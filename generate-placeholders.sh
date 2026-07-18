#!/bin/bash
set -e

IMGDIR="/home/miko/Проекты/pp new/public/images"

# Helper: create SVG with given specs
make_svg() {
  local file="$1" w="$2" h="$3" bg="$4" label="$5" sublabel="$6" accent="${7:-#FF6A00}"
  mkdir -p "$(dirname "$file")"
  cat > "$file" << SVGEOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $w $h" width="$w" height="$h">
  <rect width="$w" height="$h" fill="$bg"/>
  <rect x="8" y="8" width="$((w-16))" height="$((h-16))" fill="none" stroke="$accent" stroke-width="2" rx="4"/>
  <!-- diagonal cross lines -->
  <line x1="0" y1="0" x2="$w" y2="$h" stroke="$accent" stroke-width="1" opacity="0.15"/>
  <line x1="$w" y1="0" x2="0" y2="$h" stroke="$accent" stroke-width="1" opacity="0.15"/>
  <text x="$((w/2))" y="$((h/2-12))" font-family="sans-serif" font-size="$((w/22))" font-weight="bold" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">$label</text>
SVGEOF
  if [ -n "$sublabel" ]; then
    cat >> "$file" << SVGEOF
  <text x="$((w/2))" y="$((h/2+22))" font-family="sans-serif" font-size="$((w/34))" fill="#FF6A00" text-anchor="middle" dominant-baseline="middle">$sublabel</text>
SVGEOF
  fi
  echo '</svg>' >> "$file"
  echo "Created: $file"
}

# 1. Hero couple (4:5 → 400×500)
make_svg "$IMGDIR/hero-couple.svg" 400 500 "#121110" "POIDEM POZHREM!" "Hero — Couple"

# 2. Video preview (16:9 → 640×360)
make_svg "$IMGDIR/video-preview.svg" 640 360 "#0A0A0A" "▶ Video Preview" "16:9"

# Events
make_svg "$IMGDIR/events/karaoke.svg" 400 300 "#121110" "🎤 Караоке" "Каждую пятницу, 20:00"
make_svg "$IMGDIR/events/quiz.svg" 400 300 "#121110" "🧠 Квиз" "Каждую среду, 19:00"
make_svg "$IMGDIR/events/dj.svg" 400 300 "#121110" "🎧 DJ Party" "Суббота, 22:00"
make_svg "$IMGDIR/events/business.svg" 400 300 "#121110" "💼 Бизнес-завтрак" "Вторник, 10:00"
make_svg "$IMGDIR/events/live-music.svg" 400 300 "#121110" "🎸 Live Music" "Воскресенье, 20:00"
make_svg "$IMGDIR/events/interior.svg" 400 300 "#121110" "🏠 Интерьер" "Зал ресторана"

# Gallery photos (1:1)
for i in 1 2 3 4; do
  make_svg "$IMGDIR/gallery/photo-${i}.svg" 400 400 "#121110" "Фото ${i}" "Галерея"
done

# Gallery videos (16:9)
for i in 1 2 3 4; do
  make_svg "$IMGDIR/gallery/video-${i}.svg" 640 360 "#0A0A0A" "▶ Видео ${i}" "Галерея"
done

# Hookah
make_svg "$IMGDIR/hookah/hero.svg" 400 500 "#121110" "Кальянная карта" "Hero"
make_svg "$IMGDIR/hookah/menu-cover.svg" 300 420 "#121110" "Меню кальянов" "Обложка"
make_svg "$IMGDIR/hookah/delivery.svg" 400 300 "#121110" "Доставка" "Кальяны с доставкой"
make_svg "$IMGDIR/hookah/yellow.svg" 300 300 "#121110" "Yellow" "Yellow Mix"
make_svg "$IMGDIR/hookah/blue.svg" 300 300 "#121110" "Blue" "Blue Mix"
make_svg "$IMGDIR/hookah/red.svg" 300 300 "#121110" "Red" "Red Mix"
make_svg "$IMGDIR/hookah/center.svg" 400 300 "#121110" "Центр" "Кальянная в центре"
make_svg "$IMGDIR/hookah/north.svg" 400 300 "#121110" "Север" "Кальянная на севере"

# Delivery
make_svg "$IMGDIR/delivery/hero.svg" 400 500 "#121110" "Доставка еды" "POIDEM POZHREM!"

# Collages
make_svg "$IMGDIR/gallery/photo-collage.svg" 800 400 "#121110" "Фото коллаж" "Галерея"
make_svg "$IMGDIR/gallery/video-collage.svg" 800 400 "#0A0A0A" "▶ Видео коллаж" "Галерея"

echo ""
echo "=== All placeholders generated ==="
