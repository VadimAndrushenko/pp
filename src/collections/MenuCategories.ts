import type { CollectionConfig } from "payload"

export const MenuCategories: CollectionConfig = {
  slug: "menu-categories",
  admin: {
    useAsTitle: "title",
    group: "Меню",
  },
  fields: [
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
      type: "text",
      label: "URL изображения",
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
        },
        {
          name: "subtitle",
          type: "text",
          label: "Подзаголовок",
        },
        {
          name: "numbered",
          type: "checkbox",
          label: "Нумерованный список",
          defaultValue: false,
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
              fields: [
                {
                  name: "text",
                  type: "text",
                  label: "Текст бейджа",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
