async function main() {
  const { getPayload } = await import('payload')
  const config = (await import('@payload-config')).default
  const payload = await getPayload({ config })

  console.log('\n── ЧИСТКА ЛЕГАСИ ВИДЕО ──')
  const { docs: videos } = await payload.find({ collection: 'gallery-videos', limit: 200 })
  for (const video of videos) {
    const hasArray = video.videos && video.videos.length > 0
    if (hasArray) {
      console.log(`  ↻ keep #${video.id} ${video.title} (group)`)
      continue
    }
    await payload.delete({
      collection: 'gallery-videos',
      id: video.id,
      draft: false,
    })
    console.log(`  ✗ deleted #${video.id} ${video.title ?? '(пусто)'}`)
  }

  console.log('\n── ЧИСТКА ЛЕГАСИ ФОТО-ОТЧЁТОВ ──')
  const { docs: reports } = await payload.find({ collection: 'gallery-reports', limit: 200 })
  for (const report of reports) {
    const hasPhotos = report.photos && report.photos.length > 0
    if (hasPhotos) {
      console.log(`  ↻ keep #${report.id} ${report.slug} (group)`)
      continue
    }
    await payload.delete({
      collection: 'gallery-reports',
      id: report.id,
      draft: false,
    })
    console.log(`  ✗ deleted #${report.id} ${report.slug} ${report.title}`)
  }

  console.log('\nDone.')
  process.exit(0)
}

await main().catch((e) => {
  console.error(e)
  process.exit(1)
})