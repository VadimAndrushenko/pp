import { readFileSync } from 'fs'
import { join } from 'path'

const root = process.cwd()

const MONTHS_GENITIVE = [
  'ЯНВАРЯ', 'ФЕВРАЛЯ', 'МАРТА', 'АПРЕЛЯ', 'МАЯ', 'ИЮНЯ',
  'ИЮЛЯ', 'АВГУСТА', 'СЕНТЯБРЯ', 'ОКТЯБРЯ', 'НОЯБРЯ', 'ДЕКАБРЯ',
]

const DAYS_OF_WEEK = [
  'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье',
]

function dateParts(iso) {
  const [year, month, day] = iso.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  return {
    date: String(d.getDate()).padStart(2, '0'),
    month: MONTHS_GENITIVE[d.getMonth()],
    dayOfWeek: DAYS_OF_WEEK[(d.getDay() + 6) % 7],
    dateLabel: `${d.getDate()} ${MONTHS_GENITIVE[d.getMonth()].toLowerCase()}`,
  }
}

// ─── photo data from src/config/gallery-photos.ts ───
const PHOTOS = [
  { src: 'https://picsum.photos/seed/poidem-photo-1/800/600', title: 'Караоке батл', dateKey: '2026-05-24' },
  { src: 'https://picsum.photos/seed/poidem-photo-2/800/600', title: 'DJ вечеринка', dateKey: '2026-05-24' },
  { src: 'https://picsum.photos/seed/poidem-photo-3/800/600', title: 'Квиз', dateKey: '2026-05-24' },
  { src: 'https://picsum.photos/seed/poidem-photo-4/800/600', title: 'Бизнес-завтрак', dateKey: '2026-05-24' },
  { src: 'https://picsum.photos/seed/poidem-photo-5/800/600', title: 'Живая музыка', dateKey: '2026-05-25' },
  { src: 'https://picsum.photos/seed/poidem-photo-6/800/600', title: 'Караоке батл', dateKey: '2026-05-25' },
  { src: 'https://picsum.photos/seed/poidem-photo-7/800/600', title: 'Бизнес-завтрак', dateKey: '2026-05-26' },
  { src: 'https://picsum.photos/seed/poidem-photo-8/800/600', title: 'DJ вечеринка', dateKey: '2026-05-26' },
  { src: 'https://picsum.photos/seed/poidem-photo-9/800/600', title: 'Квиз', dateKey: '2026-05-28' },
  { src: 'https://picsum.photos/seed/poidem-photo-10/800/600', title: 'Живая музыка', dateKey: '2026-05-30' },
  { src: 'https://picsum.photos/seed/poidem-photo-11/800/600', title: 'Караоке батл', dateKey: '2026-06-03' },
  { src: 'https://picsum.photos/seed/poidem-photo-12/800/600', title: 'Бизнес-завтрак', dateKey: '2026-06-04' },
  { src: 'https://picsum.photos/seed/poidem-photo-13/800/600', title: 'DJ вечеринка', dateKey: '2026-06-07' },
  { src: 'images/gallery/karaoke-battle-start.jpg', title: 'Старт караоке-батла', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-contestants.jpg', title: 'Участники батла', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-first-song.jpg', title: 'Первый номер', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-prepare.jpg', title: 'Подготовка к выступлению', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-microphone.jpg', title: 'Битва за микрофон', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-stage-lights.jpg', title: 'Сцена в огнях', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-duet.jpg', title: 'Караоке-дуэт', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-hall-singing.jpg', title: 'Зал подпевает', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-final.jpg', title: 'Финал батла', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-hot-number.jpg', title: 'Зажигательный номер', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-atmosphere.jpg', title: 'Атмосфера вечеринки', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-applause.jpg', title: 'Аплодисменты зала', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-after-show.jpg', title: 'После шоу', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-guests.jpg', title: 'Гости вечеринки', dateKey: '2026-06-03' },
  { src: 'images/gallery/karaoke-battle-party-lights.jpg', title: 'Огни вечеринки', dateKey: '2026-06-03' },
  { src: 'images/gallery/pub-evening-june.jpg', title: 'Вечер в пабе', dateKey: '2026-06-06' },
]

// ─── video data from src/config/gallery-videos.ts ───
const VIDEOS = [
  { videoId: 'dQw4w9WgXcQ', title: 'Караоке батл', dateKey: '2026-05-24' },
  { videoId: 'jNQXAC9IVRw', title: 'DJ вечеринка', dateKey: '2026-05-24' },
  { videoId: '9bZkp7q19f0', title: 'Квиз', dateKey: '2026-05-24' },
  { videoId: 'kJQP7kiw5Fk', title: 'Бизнес-завтрак', dateKey: '2026-05-30' },
  { videoId: 'fJ9rUzIMcZQ', title: 'Живая музыка', dateKey: '2026-05-30' },
  { videoId: 'OPf0YbXqDm0', title: 'Караоке батл', dateKey: '2026-05-30' },
  { videoId: 'RgKAFK5djSk', title: 'DJ сет', dateKey: '2026-06-04' },
  { videoId: 'Zi_XLOBDo_Y', title: 'Интервью', dateKey: '2026-06-04' },
  { videoId: 'C0DPdy98e4c', title: 'Бизнес-завтрак', dateKey: '2026-06-04' },
  { videoId: 'YQHsXMglC9A', title: 'DJ вечеринка', dateKey: '2026-06-07' },
  { videoId: 'hHW1oY26kxQ', title: 'Квиз', dateKey: '2026-06-07' },
  { videoId: '60ItHLz5WEA', title: 'Живая музыка', dateKey: '2026-06-07' },
]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function fetchBuffer(url) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return Buffer.from(await res.arrayBuffer())
    } catch (e) {
      if (attempt === 3) throw e
      await sleep(1500 * attempt)
    }
  }
}

async function ensureMedia(payload, photo) {
  if (photo.src.startsWith('http')) {
    const seed = photo.src.match(/seed\/([^/]+)/)?.[1] ?? 'photo'
    const filename = `${seed}.jpg`
    const { docs } = await payload.find({
      collection: 'media',
      where: { filename: { equals: filename } },
      limit: 1,
    })
    if (docs.length > 0) {
      console.log(`  ↻ exists #${docs[0].id} ${filename}`)
      return docs[0].id
    }
    const buf = await fetchBuffer(photo.src)
    const created = await payload.create({
      collection: 'media',
      data: { alt: photo.title || 'Фото отчёта POIDEM POZHREM' },
      file: { data: buf, mimetype: 'image/jpeg', name: filename },
    })
    console.log(`  ✔ uploaded #${created.id} ${filename}`)
    return created.id
  }

  const filename = photo.src.split('/').pop()
  const { docs } = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
  })
  if (docs.length > 0) {
    console.log(`  ↻ exists #${docs[0].id} ${filename}`)
    return docs[0].id
  }
  const buf = readFileSync(join(root, 'public', photo.src))
  const created = await payload.create({
    collection: 'media',
    data: { alt: photo.title || 'Фото отчёта POIDEM POZHREM' },
    file: { data: buf, mimetype: 'image/jpeg', name: filename },
  })
  console.log(`  ✔ uploaded #${created.id} ${filename}`)
  return created.id
}

async function main() {
  const { getPayload } = await import('payload')
  const config = (await import('@payload-config')).default
  const payload = await getPayload({ config })

  // 1 ── photos: upload media and group by date ──
  console.log('\n── ФОТО ──')
  const photoDates = {}
  for (let i = 0; i < PHOTOS.length; i++) {
    const photo = PHOTOS[i]
    const imageId = await ensureMedia(payload, photo)
    const key = photo.dateKey
    if (!photoDates[key]) photoDates[key] = []
    photoDates[key].push({ title: photo.title, image: imageId })
  }

  const dateKeys = Object.keys(photoDates).sort()
  for (const key of dateKeys) {
    const items = photoDates[key]
    const parts = dateParts(key)
    const slug = `photo-report-${key}`
    const { docs: existing } = await payload.find({
      collection: 'gallery-reports',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    if (existing.length > 0) {
      console.log(`  ↻ report exists #${existing[0].id} ${slug}`)
      continue
    }
    await payload.create({
      collection: 'gallery-reports',
      draft: false,
      data: {
        title: items[0].title,
        slug,
        description: `Фотоотчёт «${items[0].title}», ${parts.dateLabel}.`,
        category: 'all',
        reportDate: key,
        time: '20:00',
        image: items[0].image,
        photos: items.map((p) => ({ title: p.title, image: p.image })),
        admission: 'free',
        order: 0,
      },
    })
    console.log(`  ✔ report ${slug} (${items.length} фото, ${parts.dateLabel})`)
  }

  // 2 ── videos: group by date ──
  console.log('\n── ВИДЕО ──')
  const videoDates = {}
  for (const video of VIDEOS) {
    const key = video.dateKey
    if (!videoDates[key]) videoDates[key] = []
    videoDates[key].push({ title: video.title, videoUrl: `https://www.youtube.com/watch?v=${video.videoId}`, videoId: video.videoId })
  }

  const videoDateKeys = Object.keys(videoDates).sort()
  for (const key of videoDateKeys) {
    const items = videoDates[key]
    const parts = dateParts(key)
    const slug = `video-report-${key}`
    const { docs: existing } = await payload.find({
      collection: 'gallery-videos',
      where: { title: { equals: items[0].title }, reportDate: { equals: key } },
      limit: 1,
    })
    if (existing.length > 0) {
      console.log(`  ↻ video report exists #${existing[0].id} ${slug}`)
      continue
    }
    await payload.create({
      collection: 'gallery-videos',
      draft: false,
      data: {
        title: items[0].title,
        videos: items.map((v) => ({
          title: v.title,
          videoUrl: v.videoUrl,
          videoId: v.videoId,
        })),
        reportDate: key,
        dateKey: key,
        dateLabel: parts.dateLabel,
        order: 0,
      },
    })
    console.log(`  ✔ video report ${slug} (${items.length} видео, ${parts.dateLabel})`)
  }

  console.log('\nDone.')
  process.exit(0)
}

await main().catch((e) => {
  console.error(e)
  process.exit(1)
})