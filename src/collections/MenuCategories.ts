import type { CollectionConfig } from "payload"

export const MenuCategories: CollectionConfig = {
  slug: "menu-categories",
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "title",
    group: "Меню",
  },
  fields: [
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "title",
      type: "text",
      label: "Название",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      label: "Подзаголовок",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Изображение",
      required: true,
    },
    {
      name: "group",
      type: "select",
      label: "Группа",
      required: true,
      options: [
        { label: "Основное", value: "main" },
        { label: "Алкоголь", value: "alcohol" },
        { label: "Безалкоголь", value: "non-alcohol" },
      ],
      defaultValue: "main",
    },
    {
      name: "order",
      type: "number",
      label: "Порядок",
      defaultValue: 0,
    },
    {
      name: "sections",
      type: "array",
      label: "Секции",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Название секции",
          required: true,
          admin: {
            description:
              "Если в категории только одна секция — заголовок и подзаголовок на сайте не отображаются.",
          },
        },
        {
          name: "subtitle",
          type: "text",
          label: "Подзаголовок",
          admin: {
            description:
              "Если в категории только одна секция — заголовок и подзаголовок на сайте не отображаются.",
          },
        },
        {
          name: "dishes",
          type: "array",
          label: "Блюда",
          fields: [
            {
              name: "name",
              type: "text",
              label: "Название",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              label: "Описание",
            },
            {
              name: "subtitle",
              type: "text",
              label: "Подзаголовок",
            },
            {
              name: "base",
              type: "text",
              label: "Основа / Подача",
            },
            {
              name: "composition",
              type: "textarea",
              label: "Состав",
            },
            {
              name: "weight",
              type: "text",
              label: "Вес / Объём",
            },
            {
              name: "price",
              type: "text",
              label: "Цена",
              required: true,
            },
            {
              name: "discount",
              type: "number",
              label: "Скидка (%)",
              min: 0,
              max: 100,
            },
            {
              name: "badges",
              type: "array",
              label: "Бейджи",
              admin: {
                description: "Выберите бейдж(и) из списка возможных вариантов.",
              },
              fields: [
                {
                  name: "text",
                  type: "select",
                  label: "Бейдж",
                  required: true,
                  options: [
                    { label: "Премиум", value: "Премиум" },
                    { label: "Веганское блюдо", value: "Веганское блюдо" },
                    { label: "Вегетарианское блюдо", value: "Вегетарианское блюдо" },
                    { label: "Без добавленного сахара", value: "Без добавленного сахара" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
