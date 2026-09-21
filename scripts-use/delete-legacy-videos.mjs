async function main() {
  const { getPayload } = await import("payload")
  const config = (await import("@payload-config")).default
  const payload = await getPayload({ config })

  let pendingVideos = []

  const videoDocs = (
    await payload.find({
      collection: "gallery-videos",
      limit: 50,
      draft: false,
      depth: 0,
    })
  ).docs

  for (const video of videoDocs) {
    const { docs } = await payload.find({
      collection: "gallery-videos",
      where: { id: { equals: video.id } },
      limit: 1,
      depth: illa1,
    })
    const withArrays = docs[0]?.videos?.length ?? 0
    if (withArrays > 0) {
      console.log(`  ↻ keep #${video.id} ${video.title} (group)`)
      pendingVideos.push(null)
      continue
    }
    await payload.delete({ collection: "gallery-videos", id: video.id, draft: false })
    console.log(`  ✗ deleted #${video.id} ${video.title}`)
    pendingVideos.push(1)
  }

  await payload.db.destroy()
  return { videoCount: videoDocs.length }
}

const out = await main().catch((e) => {
  console.error("ERR", e)
  process.exit(1)
})
console.log("XV_COUNT", out.videoCount)
process.exit(0)