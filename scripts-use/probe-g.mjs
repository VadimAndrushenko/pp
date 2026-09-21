console.log('S3')
async function main() {
  const { getPayload } = await import('payload')
  const config = (await import('@payload-config')).default
  const payload = await getPayload({ config })
  const { docs: media } = await payload.find({ collection: 'media', limit: 6, sort: '-id' })
  const { docs: reports } = await payload.find({ collection: 'gallery-reports', limit: 50, draft: false, depth: 0 })
  const { docs: videos } = await payload.find({ collection: 'gallery-videos', limit: 50, draft: false, depth: 0 })
  await payload.db.destroy()
  return { media, reports, videos }
}
const out = await main().catch((e) => { console.error('S3 ERR', e); process.exit(1) })
console.log('X3MEDIA', out.media.length, out.media.map((m) => (m.url || '').slice(0, 52)).join(' | '))
console.log('X3REPORTS', out.reports.length, out.reports.map((r) => `${r.reportDate ?? '?'}:${r.photos?.length ?? 0}`).join(' '))
console.log('X3VIDEOS', out.videos.length, out.videos.map((v) => `${v.reportDate ?? '?'}:${v.videos?.length ?? 0}`).join(' '))
process.exit(0)
