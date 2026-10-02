import type { GlobalConfig } from "payload"

export const HomeContent: GlobalConfig = {
  slug: "home-content",
  label: "Содержание главной страницы",
  admin: {
    group: "Страницы",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Верхняя часть сайта",
          fields: [
            {
              name: "title",
              type: "group",
              label: "Заголовок",
              admin: {
                description: "Главный заголовок на первом экране.",
              },
              fields: [
                {
                  name: "text",
                  type: "text",
                  label: "Текст",
                  defaultValue: "Ресторан на Фукуоке, где каждый день",
                  admin: {
                    description: "Основная часть заголовка. Например: «Ресторан на Фукуоке, где каждый день»",
                  },
                },
                {
                  name: "accent",
                  type: "text",
                  label: "Акцент (цветной)",
                  defaultValue: "что-то происходит!",
                  admin: {
                    description: "Цветная часть заголовка. Например: «что-то происходит!»",
                  },
                },
              ],
            },
            {
              name: "cuisines",
              type: "text",
              label: "Кухни",
              defaultValue: "РУССКАЯ • КАВКАЗСКАЯ • ВОСТОЧНАЯ • ЕВРОПЕЙСКАЯ • АЗИАТСКАЯ КУХНЯ",
              admin: {
                description: "Кухни разделяются значком •",
              },
            },
            {
              name: "neonSlogan",
              type: "group",
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
          label: "Быстрая навигация",
          fields: [
            {
              name: "quickNav",
              type: "array",
              label: "Пункты быстрой навигации (ровно 4)",
              labels: { singular: "пункт", plural: "пункты" },
              minRows: 4,
              maxRows: 4,
              admin: {
                description: "Строго 4 пункта: текст, ссылка и иконка.",
              },
              fields: [
                {
                  name: "icon",
                  type: "text",
                  label: "Иконка (Lucide)",
                  required: true,
                  admin: {
                    components: {
                      Field: "/src/collections/components/IconPickerField",
                    },
                    description: "Выберите иконку из списка.",
                  },
                },
                { name: "label", type: "text", label: "Текст", required: true, admin: { description: "Например: «Что сегодня?»" } },
                { name: "desc", type: "text", label: "Подтекст", required: true, admin: { description: "Пояснение. Например: «Каждый день — мероприятия»" } },
                { name: "href", type: "text", label: "Ссылка", required: true, admin: { description: "Куда ведёт плитка. Пример: /menu, /events" } },
              ],
            },
          ],
        },
        {
          label: "Фото и видеоотчёты",
          fields: [
            {
              name: "galleryPhotoPicks",
              type: "json",
              label: "Фото на главной (поштучно)",
              admin: {
                description:
                  "Отметьте отдельные фотографии из отчётов — они по одной попадут на главную. Если ничего не выбрано, секция не показывается.",
                components: {
                  Field: "/src/globals/components/GalleryPhotoPickField",
                },
              },
            },
            {
              name: "galleryVideoPicks",
              type: "json",
              label: "Видео на главной (поштучно)",
              admin: {
                description:
                  "Отметьте отдельные видео из отчётов — они по одному попадут на главную. Если ничего не выбрано, секция не показывается.",
                components: {
                  Field: "/src/globals/components/GalleryVideoPickField",
                },
              },
            },
          ],
        },
        {
          label: "Услуги",
          fields: [
            {
              name: "services",
              type: "array",
              label: "Услуги (сетка на главной)",
              labels: { singular: "услуга", plural: "услуги" },
              admin: {
                description:
                  "Сетка услуг на главной. Количество плиток любое — столько, сколько добавишь. Рекомендуем 6–8.",
              },
              fields: [
                {
                  name: "icon",
                  type: "text",
                  label: "Иконка (Lucide)",
                  admin: {
                    components: {
                      Field: "/src/collections/components/IconPickerField",
                    },
                    description: "Выберите иконку из списка.",
                  },
                },
                { name: "title", type: "text", label: "Название", required: true, admin: { description: "Например: «Наше меню»" } },
                { name: "description", type: "text", label: "Описание", required: true, admin: { description: "Коротко о разделе. Например: «Кавказская и азиатская кухня»" } },
                { name: "href", type: "text", label: "Ссылка", required: true, admin: { description: "Куда ведёт плитка. Пример: /menu, /events" } },
              ],
            },
          ],
        },
        {
          label: "Заголовки секций",
          fields: [
            {
              name: "menuTitle",
              type: "text",
              label: "Заголовок «Меню»",
              defaultValue: "МЕНЮ",
              admin: {
                description: "Заголовок секции меню на главной.",
              },
            },
            {
              name: "eventsTitle",
              type: "text",
              label: "Заголовок «Расписание на неделю»",
              defaultValue: "РАСПИСАНИЕ НА НЕДЕЛЮ",
              admin: {
                description: "Заголовок секции расписания на главной.",
              },
            },
            {
              name: "galleryTitle",
              type: "text",
              label: "Заголовок «Фото и видеоотчёты»",
              defaultValue: "ФОТО И ВИДЕООТЧЁТЫ",
              admin: {
                description: "Заголовок секции галереи на главной.",
              },
            },
          ],
        },
        {
          label: "SEO",
          admin: {
            description: "Как главная страница выглядит в поиске и при отправке ссылки в мессенджер.",
          },
          fields: [
            {
              name: "seoTitle",
              type: "text",
              label: "Title главной",
              required: true,
              maxLength: 70,
              defaultValue: "Ресторан на Фукуоке POIDEM POZHREM — меню, события, доставка",
              admin: {
                description: "Заголовок в выдаче поиска.",
              },
            },
            {
              name: "seoDescription",
              type: "textarea",
              label: "Description главной",
              required: true,
              maxLength: 180,
              defaultValue:
                "Русская, кавказская, восточная, европейская и азиатская кухня на Фукуоке. Кальяны, живые события каждый день, доставка блюд.",
              admin: {
                description: "Описание под заголовком в выдаче. Оптимально 140–160 символов.",
              },
            },
            {
              name: "seoImage",
              type: "upload",
              relationTo: "media",
              label: "Картинка для ссылки (OG)",
              admin: {
                description:
                  "Эта картинка показывается рядом с заголовком, когда гость отправляет ссылку на сайт в мессенджере или соцсети. Оптимальный размер 1200×630. Если не выбрана — используется общая обложка og-default.jpg.",
              },
            },
            {
              name: "seoFavicon",
              type: "upload",
              relationTo: "media",
              label: "Иконка вкладки браузера (favicon)",
              admin: {
                description:
                  "Маленькая иконка, которая стоит рядом с адресом сайта во вкладке браузера и в закладках. Это НЕ картинка для ссылки — для неё есть поле выше. Квадратная, от 64×64 до 512×512. Ставится на всём сайте сразу.",
              },
            },
            {
              name: "seoKeywords",
              type: "text",
              label: "Ключевые слова",
              required: true,
              defaultValue:
                "ресторан фукуок, ресторан русский, кальян фукуок, караоке фукуок, меню фукуок, доставка фукуок",
              admin: {
                description:
                  "Через запятую. Поисковики их не учитывают, но помогают вам самим ориентироваться. Пример: ресторан фукуок, кальян фукуок, караоке",
              },
            },
          ],
        },
      ],
    },
  ],
}
