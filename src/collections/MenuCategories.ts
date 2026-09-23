import type { CollectionConfig } from "payload"
import { slugify } from "./components/slugify"
import { publishedStatusField } from "./statusField"

export const MenuCategories: CollectionConfig = {
  slug: "menu-categories",
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "title",
    group: "Меню",
    defaultColumns: ["title", "_status", "group", "updatedAt"],
  },
  fields: [
    publishedStatusField,
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      unique: true,
      index: true,
      admin: {
        hidden: true,
      },
      hooks: {
        beforeValidate: [
          ({ siblingData, value }) =>
            value
              ? (value as string)
              : slugify((siblingData?.title as string) || "") || "category",
        ],
      },
    },
    {
      name: "title",
      type: "text",
      label: "Название",
      required: true,
      admin: {
        description: "Название категории. Например: «Шашлык и мангал»",
      },
    },
    {
      name: "subtitle",
      type: "text",
      label: "Подзаголовок",
      required: true,
      admin: {
        description: "Короткое описание категории для меню. Например: «Мясо и овощи на углях»",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Изображение",
      required: true,
      admin: {
        description: "Фото блюда категории — показывается в меню.",
      },
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
      admin: {
        description: "Раздел меню на сайте: основное меню, алкоголь или безалкоголь.",
      },
    },
    {
      name: "order",
      type: "number",
      label: "Порядок",
      defaultValue: 0,
      admin: {
        description: "Чем меньше число — тем выше категория в меню. Например: 0, 1, 2…",
      },
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
              "Если в категории только одна секция — заголовок и подзаголовок на сайте не отображаются. Пример: «Горячие блюда»",
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
              admin: {
                description: "Название блюда. Например: «Люля-кебаб из баранины»",
              },
            },
            {
              name: "description",
              type: "textarea",
              label: "Описание",
              admin: {
                description: "Продающее описание блюда. Например: «Подаётся с лавашом, зеленью и соусом ткемали».",
              },
            },
            {
              name: "subtitle",
              type: "text",
              label: "Подзаголовок",
              admin: {
                description: "Короткая пометка под названием. Например: «На открытом огне»",
              },
            },
            {
              name: "base",
              type: "text",
              label: "Основа / Подача",
              admin: {
                description: "Из чего и как подаётся. Например: «Баранина, 300 г»",
              },
            },
            {
              name: "composition",
              type: "textarea",
              label: "Состав",
              admin: {
                description: "Ингредиенты через запятую. Например: «говядина, лук, специи, лаваш».",
              },
            },
            {
              name: "weight",
              type: "text",
              label: "Вес / Объём",
              admin: {
                description: "Вес блюда или объём напитка. Например: «300 г», «1 л»",
              },
            },
            {
              name: "price",
              type: "text",
              label: "Цена",
              required: true,
              admin: {
                description: "Цена цифрами, можно с валютой. Пример: 450000 или 450 000₫",
              },
            },
            {
              name: "discount",
              type: "number",
              label: "Скидка (%)",
              min: 0,
              max: 100,
              admin: {
                description: "Процент скидки от 0 до 100. Например: 20",
              },
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
