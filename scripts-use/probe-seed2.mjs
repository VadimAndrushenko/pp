console.log('S2')
async function main() {
  const { getPayload } = await import('payload')
  const config = (await import('@payload-config')).default
  const payload = await getPayload({ config })

  const { docs: media } = await payload.find({ collection: 'media', limit: 5, sort: '-id' })
  const { docs: reports } = await payload.find({ collection: 'gallery-reports', limit: 40, draft: false, depth:  permalink })
  const { docs: videos } = await payload.find({ collection: 'gallery-videos', limit: 40, draft: false, depth:  permalink })
  return { media, reports, videos }
}
const out = await main().catch((e) => { console.error('S2 ERR', e); process.exit(1) })
console.log('XS2MEDIA', out.media.map(m => `${m.id}:${m.filename}`).join(' | '))
console.log('XS2REPORTS', out.reports.length)
process.exit(0)
