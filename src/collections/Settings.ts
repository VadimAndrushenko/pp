import type { GlobalConfig } from "payload"

export const Settings: GlobalConfig = {
  slug: "settings",
  admin: {
    group: "Настройки",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Основное",
          fields: [
            {
              name: "siteName",
              type: "text",
              label: "Название сайта",
              defaultValue: "POIDEM POZHREM!",
            },
            {
              name: "tagline",
              type: "text",
              label: "Слоган",
              defaultValue: "Ресторан на Фукуоке, где каждый день что-то происходит!",
            },
            {
              name: "description",
              type: "textarea",
              label: "Описание сайта",
              defaultValue: "Сообщество и поддержка русскоязычных на Фукуоке",
            },
            {
              name: "footerHeart",
              type: "text",
              label: "Текст в футере",
              defaultValue: "POIDEM POZHREM — в этом ресторане реально жизнь становится вкусной!",
            },
            {
              name: "cuisines",
              type: "text",
              label: "Кухни",
              defaultValue: "РУССКАЯ • КАВКАЗСКАЯ • ВОСТОЧНАЯ • ЕВРОПЕЙСКАЯ • АЗИАТСКАЯ КУХНЯ",
            },
            {
              type: "group",
              name: "neonSlogan",
              label: "Неоновый слоган",
              fields: [
                { name: "line1", type: "text", label: "Строка 1", defaultValue: "Я ВЫБИРАЮ" },
                { name: "accent1", type: "text", label: "Акцент 1", defaultValue: "ВКУСНО" },
                { name: "accent2", type: "text", label: "Акцент 2", defaultValue: "ЖИТЬ!" },
                { name: "subtitle", type: "text", label: "Подзаголовок", defaultValue: "И ЭТО ЛУЧШЕЕ РЕШЕНИЕ СЕГОДНЯ" },
              ],
            },
          ],
        },
        {
          label: "Контакты",
          fields: [
            { name: "phone", type: "text", label: "Телефон", defaultValue: "+84 783 779 879" },
            { name: "phoneHref", type: "text", label: "Телефон (ссылка)", defaultValue: "tel:+84783779879" },
            { name: "email", type: "email", label: "Email", defaultValue: "poidempozhrem@gmail.com" },
            { name: "address", type: "text", label: "Адрес", defaultValue: "97 Trần Hưng Đạo, Dương Đông, Phú Quốc" },
            { name: "addressFull", type: "textarea", label: "Полный адрес", defaultValue: "97 Trần Hưng Đạo, Дương Đông, Phú Quốc, 2 этаж (вход через Holiday Center)" },
          ],
        },
        {
          label: "Соцсети и мессенджеры",
          fields: [
            { name: "telegram", type: "text", label: "Telegram", defaultValue: "https://t.me/poidem_pozhrem" },
            { name: "telegramBot", type: "text", label: "Telegram Bot", defaultValue: "https://t.me/poidem_pozhrem_bot" },
            { name: "whatsapp", type: "text", label: "WhatsApp", defaultValue: "https://wa.me/84783779879" },
            { name: "instagram", type: "text", label: "Instagram", defaultValue: "https://instagram.com/poidem_po_zhrem" },
            { name: "facebook", type: "text", label: "Facebook", defaultValue: "https://facebook.com/PoidemPozhrem" },
            { name: "youtube", type: "text", label: "YouTube", defaultValue: "https://youtube.com/@poidempozhrEM" },
            { name: "tiktok", type: "text", label: "TikTok", defaultValue: "https://tiktok.com/@poidem_pozhrem" },
            { name: "zalo", type: "text", label: "Zalo", defaultValue: "https://zalo.me/84783779879" },
          ],
        },
        {
          label: "Карты и доставка",
          fields: [
            { name: "googleMaps", type: "text", label: "Google Maps", defaultValue: "https://maps.google.com/?q=97+Tran+Hung+Dao+Duong+Dong+Phu+Quoc" },
            { name: "yandexMaps", type: "text", label: "Яндекс Карты", defaultValue: "https://yandex.ru/maps/?pt=103.9530,10.2100&z=17&l=map" },
            { name: "grab", type: "text", label: "Grab", defaultValue: "https://r.grab.com/g/6-20260801_223246_0BD425829C55464F9ACF75301A16722E_MEXMPS-5-C76UNTW3VLBDTT" },
          ],
        },
        {
          label: "Режим работы",
          fields: [
            {
              type: "group",
              name: "workingHours",
              label: "Часы работы",
              fields: [
                { name: "label", type: "text", label: "Метка", defaultValue: "Ежедневно" },
                { name: "hours", type: "text", label: "Часы", defaultValue: "24/7" },
                { name: "highlighted", type: "checkbox", label: "Выделить", defaultValue: true },
              ],
            },
          ],
        },
      ],
    },
  ],
}
