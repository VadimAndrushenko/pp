import { readFileSync } from 'fs'
import { join } from 'path'

const root = process.cwd()

const LOCAL_IMAGES = [
  { file: 'logo.png', alt: 'Логотип POIDEM POZHREM' },
  { file: 'images/people.png', alt: 'Гости ресторана POIDEM POZHREM' },
  { file: 'images/contacts/facade.png', alt: 'Фасад ресторана POIDEM POZHREM' },
  { file: 'images/events/monday-afterparty.png', alt: 'Афиша After Weekend Party' },
  { file: 'images/events/karaoke-banner.png', alt: 'Афиша караоке-батла' },
  { file: 'images/hookah/shisha.png', alt: 'Кальян в ресторане POIDEM POZHREM' },
  { file: 'images/hookah/vip-hookah-bg.png', alt: 'VIP-зона с кальяном' },
  { file: 'images/hookah/vip-card.png', alt: 'VIP-карта кальянной' },
  { file: 'images/hookah/light.png', alt: 'Лёгкий табак для кальяна' },
  { file: 'images/hookah/medium.png', alt: 'Средний табак для кальяна' },
  { file: 'images/hookah/strong.png', alt: 'Крепкий табак для кальяна' },
  { file: 'images/hookah/menu-cover.png', alt: 'Меню кальянной' },
  { file: 'images/hookah/delivery-cover.png', alt: 'Доставка кальяна' },
  { file: 'images/hookah/delivery-1.png', alt: 'Доставка кальяна 1' },
  { file: 'images/hookah/delivery-2.png', alt: 'Доставка кальяна 2' },
  { file: 'images/delivery/food.png', alt: 'Доставка еды POIDEM POZHREM' },
  { file: 'images/delivery/hookah.png', alt: 'Доставка кальяна' },
  { file: 'images/delivery/delivery-hero.png', alt: 'Доставка из ресторана POIDEM POZHREM' },
]

async function main() {
  const { getPayload } = await import('payload')
  const config = (await import('@payload-config')).default
  const payload = await getPayload({ config })

  for (const item of LOCAL_IMAGES) {
    const filePath = join(root, 'public', item.file)
    let buf
    try {
      buf = readFileSync(filePath)
    } catch {
      console.log(`  ✗ missing ${item.file}`)
      continue
    }
    const filename = item.file.split('/').pop()
    const ext = filename.split('.').pop().toLowerCase()
    const mimetype = ext === 'png' ? 'image/png' : 'image/jpeg'

    const { docs } = await payload.find({
      collection: 'media',
      where: { filename: { equals: filename } },
      limit: 1,
    })
    if (docs.length > 0) {
      console.log(`  ↻ exists #${docs[0].id} ${filename}`)
      continue
    }

    const created = await payload.create({
      collection: 'media',
      data: { alt: item.alt },
      file: { data: buf, mimetype, name: filename },
    })
    console.log(`  ✔ uploaded #${created.id} ${filename} (${(buf.length / 1024).toFixed(0)}KB)`)
  }

  console.log('\nDone.')
  process.exit(0)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})