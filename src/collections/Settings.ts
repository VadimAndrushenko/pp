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
              admin: {
                description: "Название ресторана, как в шапке сайта.",
              },
            },
            {
              name: "tagline",
              type: "text",
              label: "Слоган",
              defaultValue: "Ресторан на Фукуоке, где каждый день что-то происходит!",
              admin: {
                description: "Фраза-слоган, используется в описании сайта.",
              },
            },
            {
              name: "description",
              type: "textarea",
              label: "Описание сайта",
              defaultValue: "Сообщество и поддержка русскоязычных на Фукуоке",
              admin: {
                description: "Короткое описание для поисковиков (показывается в выдаче Google).",
              },
            },
            {
              name: "footerHeart",
              type: "text",
              label: "Текст в футере",
              defaultValue: "POIDEM POZHREM — в этом ресторане реально жизнь становится вкусной!",
              admin: {
                description: "Строка внизу каждой страницы.",
              },
            },
            {
              name: "cuisines",
              type: "text",
              label: "Кухни",
              defaultValue: "РУССКАЯ • КАВКАЗСКАЯ • ВОСТОЧНАЯ • ЕВРОПЕЙСКАЯ • АЗИАТСКАЯ КУХНЯ",
              admin: {
                description: "Перечень кухонь. Кухни разделяются значком •",
              },
            },
            {
              type: "group",
              name: "neonSlogan",
              label: "Неоновый слоган",
              admin: {
                description: "Светящаяся строка на главной из 3 коротких слов + подзаголовок.",
              },
              fields: [
                { name: "line1", type: "text", label: "Строка 1", defaultValue: "Я ВЫБИРАЮ", admin: { description: "Первое слово слогана. Например: «Я ВЫБИРАЮ»" } },
                { name: "accent1", type: "text", label: "Акцент 1", defaultValue: "ВКУСНО", admin: { description: "Второе слово, обычно цветное. Например: «ВКУСНО»" } },
                { name: "accent2", type: "text", label: "Акцент 2", defaultValue: "ЖИТЬ!", admin: { description: "Третье слово. Например: «ЖИТЬ!»" } },
                { name: "subtitle", type: "text", label: "Подзаголовок", defaultValue: "И ЭТО ЛУЧШЕЕ РЕШЕНИЕ СЕГОДНЯ", admin: { description: "Фраза под неоновыми словами." } },
              ],
            },
          ],
        },
        {
          label: "Контакты",
          fields: [
            { name: "phone", type: "text", label: "Телефон", defaultValue: "+84 783 779 879", admin: { description: "Телефон в виде текста, как показывается на сайте." } },
            { name: "phoneHref", type: "text", label: "Телефон (ссылка)", defaultValue: "tel:+84783779879", admin: { description: "Ссылка для звонка. Формат: tel:+цифры без пробелов" } },
            { name: "email", type: "email", label: "Email", defaultValue: "poidempozhrem@gmail.com", admin: { description: "Почта для связи." } },
            { name: "address", type: "text", label: "Адрес", defaultValue: "97 Trần Hưng Đạo, Dương Đông, Phú Quốc", admin: { description: "Короткий адрес для шапки и футера." } },
            { name: "addressFull", type: "textarea", label: "Полный адрес", defaultValue: "97 Trần Hưng Đạo, Дương Đông, Phú Quốc, 2 этаж (вход через Holiday Center)", admin: { description: "Подробное описание, как добраться." } },
          ],
        },
        {
          label: "Соцсети и мессенджеры",
          fields: [
            { name: "telegram", type: "text", label: "Telegram", defaultValue: "https://t.me/poidem_po_zhrem", admin: { description: "Ссылка на канал. Формат: https://t.me/название" } },
            { name: "telegramBot", type: "text", label: "Telegram Bot", defaultValue: "https://t.me/poidem_pozhrem_bot", admin: { description: "Ссылка на бот. Формат: https://t.me/название_bot" } },
            { name: "whatsapp", type: "text", label: "WhatsApp", defaultValue: "https://wa.me/84783779879", admin: { description: "Формат: https://wa.me/код_страны+цифры" } },
            { name: "instagram", type: "text", label: "Instagram", defaultValue: "https://instagram.com/poidem_po_zhrem", admin: { description: "Ссылка, которая откроется по кнопке Instagram." } },
            { name: "facebook", type: "text", label: "Facebook", defaultValue: "https://facebook.com/PoidemPozhrem", admin: { description: "Ссылка на страницу Facebook." } },
            { name: "youtube", type: "text", label: "YouTube", defaultValue: "https://youtube.com/@poidempozhrem", admin: { description: "Ссылка на канал YouTube." } },
            { name: "tiktok", type: "text", label: "TikTok", defaultValue: "https://tiktok.com/@poidem.po.zhrem", admin: { description: "Ссылка на профиль TikTok." } },
            { name: "zalo", type: "text", label: "Zalo", defaultValue: "https://zalo.me/84783779879", admin: { description: "Ссылка на профиль Zalo." } },
          ],
        },
        {
          label: "Карты и доставка",
          fields: [
            { name: "googleMaps", type: "text", label: "Google Maps", defaultValue: "https://maps.app.goo.gl/wnerDY6EdTK7AzfJ8", admin: { description: "Ссылка на ресторан в Google Maps." } },
            { name: "yandexMaps", type: "text", label: "Яндекс Карты", defaultValue: "https://yandex.ru/maps/?pt=103.9530,10.2100&z=17&l=map", admin: { description: "Ссылка на ресторан в Яндекс Картах." } },
            { name: "grab", type: "text", label: "Grab", defaultValue: "https://r.grab.com/g/6-20260801_223246_0BD425829C55464F9ACF75301A16722E_MEXMPS-5-C76UNTW3VLBDTT", admin: { description: "Ссылка на заказ доставки в Grab." } },
          ],
        },
        {
          label: "Ссылки страниц",
          fields: [
            { name: "menu", type: "text", label: "Меню", defaultValue: "https://poidempozhrem.com/menu", admin: { description: "Ссылка на страницу меню." } },
            { name: "events", type: "text", label: "Афиша мероприятий", defaultValue: "https://poidempozhrem.com/events", admin: { description: "Ссылка на страницу расписания всех мероприятий." } },
            { name: "delivery", type: "text", label: "Доставка", defaultValue: "https://poidempozhrem.com/delivery", admin: { description: "Ссылка на страницу доставки." } },
            { name: "contacts", type: "text", label: "Контакты", defaultValue: "https://poidempozhrem.com/contacts", admin: { description: "Ссылка на страницу контактов." } },
            { name: "bookingForm", type: "text", label: "Форма бронирования", admin: { description: "Ссылка на форму бронирования стола. Если пусто — кнопка ведёт в WhatsApp." } },
          ],
        },
        {
          label: "Режим работы",
          fields: [
            {
              type: "group",
              name: "workingHours",
              label: "Часы работы",
              admin: {
                description: "Режим работы ресторана — показывается в контактах.",
              },
              fields: [
                { name: "label", type: "text", label: "Метка", defaultValue: "Ежедневно", admin: { description: "Текст слева. Например: «Ежедневно»" } },
                { name: "hours", type: "text", label: "Часы", defaultValue: "24/7", admin: { description: "Время работы. Например: «с 12:00 до 02:00»" } },
                { name: "highlighted", type: "checkbox", label: "Выделить", defaultValue: true, admin: { description: "Отметить, чтобы выделить часы работы на сайте." } },
              ],
            },
          ],
        },
      ],
    },
  ],
}
