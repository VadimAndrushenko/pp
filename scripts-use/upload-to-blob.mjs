import { put, head } from '@vercel/blob'
import { readdirSync, readFileSync, statSync, writeFileSync, mkdirSync, renameSync, existsSync } from 'fs'
import { join } from 'path'

const root = process.cwd()
const publicDir = root + '/public'
const imagesDir = publicDir + '/images'
const utilDir = join(imagesDir, 'util')
const mappingFile = root + '/blob-mapping.json'

const token = process.env.BLOB_READ_WRITE_TOKEN
if (!token) throw new Error('BLOB_READ_WRITE_TOKEN not found')

function walk(dir, out = []) {
  for (const ent of readdirSync(dir)) {
    const p = join(dir, ent)
    if (statSync(p).isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

const srcContent = walk(root + '/src')
  .map((f) => readFileSync(f, 'utf8'))
  .join('\n')

const allImages = walk(imagesDir).filter(
  (f) => /\.(png|jpe?g|webp|svg|gif)$/i.test(f) && !f.includes('/util/')
)

const used = []
const unused = []

for (const f of allImages) {
  const publicPath = '/images' + f.slice(imagesDir.length)
  if (srcContent.includes(publicPath)) used.push(f)
  else unused.push(f)
}

// logo.png в корне public
const logoPath = join(publicDir, 'logo.png')
if (existsSync(logoPath) && srcContent.includes('/logo.png')) {
  used.unshift(logoPath)
}

console.log(`Uploading ${used.length} used images to Blob...`)

const mapping = {}

for (const filePath of used) {
  const rel = filePath.slice(publicDir.length + 1) // images/contacts/facade.png или logo.png
  const blobPath = 'pp/' + rel
  let existing = null
  try {
    existing = await head(blobPath, { token })
  } catch {}
  if (existing) {
    mapping['/' + rel] = existing.url
    console.log(`  ⏭ ${rel} already exists`)
    continue
  }
  const blob = await put(blobPath, readFileSync(filePath), {
    access: 'private',
    token,
    contentType: getContentType(filePath),
    addRandomSuffix: false,
    allowOverwrite: true,
  })
  mapping['/' + rel] = blob.url
  console.log(`  ✔ ${rel} → ${blob.url}`)
}

writeFileSync(mappingFile, JSON.stringify(mapping, null, 2))
console.log(`\nMapping saved to ${mappingFile}`)

// Move unused to util
if (!existsSync(utilDir)) mkdirSync(utilDir, { recursive: true })

const moved = []
for (const filePath of unused) {
  const rel = filePath.slice(imagesDir.length).split('/') // e.g. /delivery/hero.svg
  const fileName = rel[rel.length - 1]
  const dirName = rel.slice(1, -1).join('/')
  const targetSubdir = dirName ? join(utilDir, dirName) : utilDir
  if (!existsSync(targetSubdir)) mkdirSync(targetSubdir, { recursive: true })
  const target = join(targetSubdir, fileName)
  if (filePath === target) continue
  renameSync(filePath, target)
  moved.push('/images' + rel.join('/'))
}

console.log(`\nMoved ${moved.length} unused images to public/images/util:`)
moved.forEach((m) => console.log('  ' + m))

function getContentType(filePath) {
  const ext = filePath.split('.').pop().toLowerCase()
  const types = {
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    gif: 'image/gif',
  }
  return types[ext] || 'application/octet-stream'
}