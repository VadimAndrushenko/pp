try { console.log('PB S1') } catch {}

async function main() {
  const { getPayload } = await import('payload')
  const config = (await import('@payload-config')).default
  const payload = await getPayload({ config })

  const media = (await payload.find({ collection: 'media', limit: 60, sort: 'id' })).docs
  const photoRows = (await payload.find({ collection: 'gallery-reports', limit: 50, draft: false, depth: 2 })).docs
  const videoRows = (await payload.find({ collection: 'gallery-videos', limit: 50, draft: false, depth: 2 })).docs
  await payload.db.destroy()
  return { media, photoRows, videoRows }
}

async function go() {
  const { media, photoRows, videoRows } = await main()
  console.log('XMEDIA', media.length)
  for (const m of media) console.log(' M', m.id, m.filename, (m.url || '').slice(0, 46))
  console.log('XPHOTO_REPORTS', photoRows.length)
  for (const r of photoRows) console.log(' P', r.slug, (r.photos?.length ?? 0))
  console.log('XVIDEO_REPORTS', videoRows.length)
  for (const r of videoRows) console.log(' V', r.slug, (r.videos?.length ?? 0))
}

await go().catch((e) => {
  console.error('PB ERR', e?.message || e)
  process.exit(1)
})
process.exit(0)
