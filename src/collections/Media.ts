import type { CollectionConfig } from 'payload'
import { revalidateSite } from "@/lib/revalidate"

export const Media: CollectionConfig = {
  slug: 'media',

  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },

  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['thumbnail', 'filename', 'alt', 'updatedAt'],
    description: 'Все изображения сайта. Загружайте сюда картинки для статей, разделов и обложек.',
  },

  hooks: {
    afterChange: [
      async ({ doc }) => {
        await revalidateSite()
        return doc
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        await revalidateSite()
        return doc
      },
    ],
  },

  upload: {
    mimeTypes: ['image/*'],
    formatOptions: {
      format: 'webp',
      options: { quality: 82, effort: 4 },
    },
    resizeOptions: {
      width: 2560,
      height: 2560,
      fit: 'inside',
      withoutEnlargement: true,
    },
    withMetadata: false,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: { quality: 75, effort: 4 },
        },
      },
      {
        name: 'card',
        width: 768,
        height: 576,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: { quality: 78, effort: 4 },
        },
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: { quality: 80, effort: 4 },
        },
      },
    ],
  },

  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Альтернативный текст',
      required: true,
      minLength: 3,
      maxLength: 200,
      admin: {
        description: 'Текст для доступности и SEO. Опишите, что изображено на картинке. Например: "Пляж на острове Фукуок, закат"',
      },
    },
  ],
}
