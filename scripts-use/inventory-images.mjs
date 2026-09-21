import { readdirSync, readFileSync, statSync } from 'fs'
import { join } from 'path'

const root = process.cwd()
const publicImages = root + '/public/images'
const srcDir = root + '/src'

function walk(dir, out = []) {
  for (const ent of readdirSync(dir)) {
    const p = join(dir, ent)
    if (statSync(p).isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

const files = walk(publicImages).filter((f) => /\.(png|jpe?g|webp|svg|gif)$/i.test(f))
const srcFiles = walk(srcDir)
const allContent = srcFiles.map((f) => readFileSync(f, 'utf8')).join('\n')

const used = []
const unused = []

for (const f of files) {
  const publicPath = '/images' + f.slice(publicImages.length)
  if (allContent.includes(publicPath)) used.push(f)
  else unused.push(f)
}

console.log('=== USED (' + used.length + ') ===')
for (const f of used) console.log('/images' + f.slice(publicImages.length))
console.log('\n=== UNUSED (' + unused.length + ') ===')
for (const f of unused) console.log('/images' + f.slice(publicImages.length))