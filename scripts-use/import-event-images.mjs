async function main() {
  const { getPayload } = await import('payload')
  const config = (await import('@payload-config')).default
  const payload = await getPayload({ config })

  const ids = {
    'after-weekend-party': 37,
    'karaoke-battle': 38,
    'live-music': 52,
    'dj-party': 53,
    'quiz-poidem-pozhrem': 54,
    'business-breakfast': 55,
    'show-program': 56,
    'pepe': 57,
  }
  const { docs } = await payload.find({ collection: 'events', limit: 100, draft: true })
  for (const doc of docs) {
    const img = ids[doc.slug]
    if (!img) continue
    await payload.update({
      collection: 'events',
      id: doc.id,
      draft: false,
      data: { image: img },
    })
    console.log(`updated #${doc.id} ${doc.slug} image=#${img} (status=${doc._status})`)
  }
  process.exit(0)
}
main().catch((e) => { console.error(e); process.exit(1) })