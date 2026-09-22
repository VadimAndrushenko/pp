import type { CollectionConfig } from "payload"

export const Media: CollectionConfig = {
  slug: "media",

  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },

  admin: {
    useAsTitle: "filename",
    defaultColumns: ["filename", "alt", "updatedAt"],
    description:
      "Каталог изображений сайта. Загрузите файл-картинку и выберите её в нужном месте. Размеры подгоняются автоматически.",
  },

  upload: {
    mimeTypes: ["image/*"],
  },

  hooks: {
    beforeChange: [
      ({ data, req }) => {
        if (!data.alt) {
          data.alt = req.file?.name?.replace(/\.[^.]+$/, "") || data.filename || ""
        }
        return data
      },
    ],
  },

  fields: [
    {
      name: "alt",
      type: "text",
      label: "Альтернативный текст",
      admin: {
        description:
          'Короткое описание картинки — видно при наведении и для SEO. Например: "Караоке-батл, ночная вечеринка". Можно оставить пустым — подставится имя файла.',
      },
    },
  ],
}