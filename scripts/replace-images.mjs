import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

const srcDir = join(process.cwd(), 'src')

const imageMap = [
  ['/images/hero-couple.svg', 'https://picsum.photos/seed/poidem-hero/600/750'],
  ['/images/video-preview.svg', 'https://picsum.photos/seed/poidem-interior/800/450'],
  ['/images/events/karaoke.svg', 'https://picsum.photos/seed/poidem-karaoke/400/300'],
  ['/images/events/quiz.svg', 'https://picsum.photos/seed/poidem-quiz/400/300'],
  ['/images/events/dj.svg', 'https://picsum.photos/seed/poidem-dj/400/300'],
  ['/images/events/business.svg', 'https://picsum.photos/seed/poidem-business/400/300'],
  ['/images/events/live-music.svg', 'https://picsum.photos/seed/poidem-live-music/400/300'],
  ['/images/events/interior.svg', 'https://picsum.photos/seed/poidem-interior-night/400/400'],
  ['/images/gallery/photo-1.svg', 'https://picsum.photos/seed/poidem-photo-1/400/400'],
  ['/images/gallery/photo-2.svg', 'https://picsum.photos/seed/poidem-photo-2/400/400'],
  ['/images/gallery/photo-3.svg', 'https://picsum.photos/seed/poidem-photo-3/400/400'],
  ['/images/gallery/photo-4.svg', 'https://picsum.photos/seed/poidem-photo-4/400/400'],
  ['/images/gallery/photo-collage.svg', 'https://picsum.photos/seed/poidem-collage-photo/600/400'],
  ['/images/gallery/video-1.svg', 'https://picsum.photos/seed/poidem-video-1/400/400'],
  ['/images/gallery/video-2.svg', 'https://picsum.photos/seed/poidem-video-2/400/400'],
  ['/images/gallery/video-3.svg', 'https://picsum.photos/seed/poidem-video-3/400/400'],
  ['/images/gallery/video-4.svg', 'https://picsum.photos/seed/poidem-video-4/400/400'],
  ['/images/gallery/video-collage.svg', 'https://picsum.photos/seed/poidem-collage-video/600/400'],
  ['/images/hookah/hero.svg', 'https://picsum.photos/seed/poidem-hookah-hero/600/400'],
  ['/images/hookah/menu-cover.svg', 'https://picsum.photos/seed/poidem-hookah-menu/400/300'],
  ['/images/hookah/delivery.svg', 'https://picsum.photos/seed/poidem-hookah-delivery/400/300'],
  ['/images/hookah/yellow.svg', 'https://picsum.photos/seed/poidem-hookah-yellow/200/200'],
  ['/images/hookah/blue.svg', 'https://picsum.photos/seed/poidem-hookah-blue/200/200'],
  ['/images/hookah/red.svg', 'https://picsum.photos/seed/poidem-hookah-red/200/200'],
  ['/images/hookah/center.svg', 'https://picsum.photos/seed/poidem-delivery-center/600/300'],
  ['/images/hookah/north.svg', 'https://picsum.photos/seed/poidem-delivery-north/600/300'],
  ['/images/delivery/hero.svg', 'https://picsum.photos/seed/poidem-delivery-hero/600/400'],
]

function walk(dir) {
  const files = readdirSync(dir)
  for (const file of files) {
    const full = join(dir, file)
    if (statSync(full).isDirectory()) {
      if (file !== 'node_modules') walk(full)
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      let content = readFileSync(full, 'utf-8')
      let changed = false
      for (const [oldPath, newUrl] of imageMap) {
        if (content.includes(oldPath)) {
          content = content.split(oldPath).join(newUrl)
          changed = true
        }
      }
      if (changed) {
        writeFileSync(full, content, 'utf-8')
        console.log(`  ✓ ${full.replace(srcDir, '')}`)
      }
    }
  }
}

console.log('Replacing image URLs with picsum.photos...')
walk(srcDir)
console.log('Done!')
