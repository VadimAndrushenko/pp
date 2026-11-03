import type { GlobalConfig, GroupField } from "payload"
import { galleryContentFallbacks as fallback } from "@/config/gallery-content"
import { revalidateSite } from "@/lib/revalidate"

const seoGroup = (
  name: string,
  defaults: { title: string; description: string; keywords: string },
): GroupField => ({
  name,
  type: "group",
  label: "SEO",
  admin: {
    description: "Как страница выглядит в поиске и при отправке ссылки в мессенджер.",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
      maxLength: 70,
      defaultValue: defaults.title,
      admin: {
        description: "Заголовок в выдаче поиска.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true,
      maxLength: 180,
      defaultValue: defaults.description,
      admin: {
        description: "Описание под заголовком в выдаче. Оптимально 140–160 символов.",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Картинка для ссылки (OG)",
      admin: {
        description:
          "Показывается при отправке ссылки в мессенджере или соцсети. Оптимальный размер 1200×630. Если не выбрана — используется общая обложка сайта.",
      },
    },
    {
      name: "keywords",
      type: "text",
      label: "Ключевые слова",
      required: true,
      defaultValue: defaults.keywords,
      admin: {
        description:
          "Через запятую. Поисковики их не учитывают, но они помогают ориентироваться в содержимом. Пример: ресторан фукуок, караоке фукуок",
      },
    },
  ],
})

export const GalleryContent: GlobalConfig = {
  slug: "gallery-content",
  label: "Содержание страницы «Как у нас»",
  admin: {
    group: "Страницы",
    description:
      "Тексты, SEO и карточки раздела «Как у нас». Видео настраивается отдельно в блоке на главной странице.",
  },
  hooks: {
    afterChange: [
      async ({ doc }) => {
        await revalidateSite()
        return doc
      },
    ],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Как у нас",
          fields: [
            {
              name: "heading",
              type: "text",
              label: "Заголовок страницы",
              defaultValue: fallback.gallery.heading,
              admin: {
                description: "Главный заголовок страницы «Как у нас».",
              },
            },
            {
              type: "group",
              name: "reports",
              label: "Блок «Фото и видеоотчёты»",
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Заголовок блока",
                  defaultValue: fallback.gallery.reportsTitle,
                  admin: {
                    description: "Заголовок перед карточками отчётов.",
                  },
                },
                {
                  name: "subtitle",
                  type: "text",
                  label: "Подзаголовок",
                  defaultValue: fallback.gallery.reportsSubtitle,
                  admin: {
                    description: "Текст под заголовком блока.",
                  },
                },
              ],
            },
            {
              type: "group",
              name: "photoCard",
              label: "Карточка «Фото отчёты»",
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Название карточки",
                  defaultValue: fallback.gallery.photoCard.title,
                  admin: {
                    description: "Текст на карточке-ссылке на фотоотчёты.",
                  },
                },
                {
                  name: "image",
                  type: "upload",
                  relationTo: "media",
                  label: "Картинка карточки",
                  admin: {
                    description:
                      "Обложка карточки на странице «Как у нас». Если не выбрана — показывается временная заглушка.",
                  },
                },
              ],
            },
            {
              type: "group",
              name: "videoCard",
              label: "Карточка «Видео отчёты»",
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Название карточки",
                  defaultValue: fallback.gallery.videoCard.title,
                  admin: {
                    description: "Текст на карточке-ссылке на видеоотчёты.",
                  },
                },
                {
                  name: "image",
                  type: "upload",
                  relationTo: "media",
                  label: "Картинка карточки",
                  admin: {
                    description:
                      "Обложка карточки на странице «Как у нас». Если не выбрана — показывается временная заглушка.",
                  },
                },
              ],
            },
            seoGroup("gallerySeo", fallback.gallery.seo),
          ],
        },
      ],
    },
  ],
}
