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
              fields: [
                {
                  name: "text",
                  type: "text",
                  label: "Текст",
                  defaultValue: "Ресторан на Фукуоке, где каждый день",
                },
                {
                  name: "accent",
                  type: "text",
                  label: "Акцент (цветной)",
                  defaultValue: "что-то происходит!",
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
          label: "Услуги",
          fields: [
            {
              name: "services",
              type: "array",
              label: "Услуги (сетка на главной)",
              labels: { singular: "услуга", plural: "услуги" },
              minRows: 6,
              maxRows: 12,
              fields: [
                {
                  name: "icon",
                  type: "text",
                  label: "Иконка (Lucide)",
                  admin: {
                    components: {
                      Field: "/src/collections/components/IconPickerField",
                    },
                  },
                },
                { name: "title", type: "text", label: "Название", required: true },
                { name: "description", type: "text", label: "Описание", required: true },
                { name: "href", type: "text", label: "Ссылка", required: true },
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
                  },
                },
                { name: "label", type: "text", label: "Текст", required: true },
                { name: "desc", type: "text", label: "Подтекст", required: true },
                { name: "href", type: "text", label: "Ссылка", required: true },
              ],
            },
          ],
        },
        {
          label: "Фото и видеоотчёты",
          fields: [
            {
              name: "galleryPhotos",
              type: "relationship",
              relationTo: "gallery-reports",
              hasMany: true,
              label: "Фото отчёты на главной",
              admin: {
                description:
                  "Выберите фотоотчёты из списка. Если ничего не выбрано — покажутся все.",
              },
            },
            {
              name: "galleryVideos",
              type: "relationship",
              relationTo: "gallery-videos",
              hasMany: true,
              label: "Видео отчёты на главной",
              admin: {
                description:
                  "Выберите видеоотчёты из списка. Если ничего не выбрано — покажутся все.",
              },
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
            },
            {
              name: "eventsTitle",
              type: "text",
              label: "Заголовок «Расписание на неделю»",
              defaultValue: "РАСПИСАНИЕ НА НЕДЕЛЮ",
            },
            {
              name: "galleryTitle",
              type: "text",
              label: "Заголовок «Фото и видеоотчёты»",
              defaultValue: "ФОТО И ВИДЕООТЧЁТЫ",
            },
          ],
        },
      ],
    },
  ],
}
