import { readFile } from 'node:fs/promises'
import sharp from 'sharp'

const WIDTH = 1200
const HEIGHT = 630

const ACCENT = '#FF6A00'
const BG = '#000000'
const TEXT_PRIMARY = '#FFFFFF'
const TEXT_MUTED = '#B7B4B0'

const FONT_BOLD = '/usr/share/fonts/TTF/DejaVuSans-Bold.ttf'
const FONT_REGULAR = '/usr/share/fonts/TTF/DejaVuSans.ttf'

const escapeXml = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const fontFace = (id: string, base64: string): string =>
  `@font-face { font-family: "${id}"; src: url(data:font/ttf;base64,${base64}) format("truetype"); }`

const main = async (): Promise<void> => {
  const [boldFont, regularFont, logoBuffer] = await Promise.all([
    readFile(FONT_BOLD),
    readFile(FONT_REGULAR),
    readFile('public/logo.png'),
  ])

  const logo = await sharp(logoBuffer).resize({ width: 560, fit: 'inside' }).toBuffer()

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="6%" r="74%">
      <stop offset="0%" stop-color="#3A1A00" />
      <stop offset="62%" stop-color="${BG}" />
    </radialGradient>
    <style>
      ${fontFace('OgBold', boldFont.toString('base64'))}
      ${fontFace('OgRegular', regularFont.toString('base64'))}
    </style>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />
  <image href="data:image/png;base64,${logo.toString('base64')}" x="320" y="120" height="156" />
  <text x="600" y="410" text-anchor="middle" font-family="OgBold" font-size="58" letter-spacing="-1" fill="${TEXT_PRIMARY}">${escapeXml('Ресторан русской кухни на Фукуоке')}</text>
  <text x="600" y="470" text-anchor="middle" font-family="OgRegular" font-size="27" letter-spacing="3.4" fill="${ACCENT}">${escapeXml('РУССКАЯ • КАВКАЗСКАЯ • ВОСТОЧНАЯ')}</text>
  <rect x="500" y="512" width="200" height="5" rx="2.5" fill="${ACCENT}" />
  <text x="600" y="566" text-anchor="middle" font-family="OgRegular" font-size="24" letter-spacing="1.4" fill="${TEXT_MUTED}">${escapeXml('POIDEMPOZHREM.COM')}</text>
</svg>`

  await sharp(Buffer.from(svg))
    .flatten({ background: BG })
    .jpeg({ quality: 88, chromaSubsampling: '4:4:4' })
    .toFile('public/og-default.jpg')

  const meta = await sharp('public/og-default.jpg').metadata()
  console.log(
    `✅ public/og-default.jpg ${meta.width}x${meta.height}, ${((meta.size ?? 0) / 1024).toFixed(1)} КБ`,
  )
}

main().catch((error) => {
  console.error('❌ Ошибка генерации OG-картинки:', error)
  process.exit(1)
})
