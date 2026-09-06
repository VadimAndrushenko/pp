import type { CollectionConfig } from "payload"

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
    group: "Контент",
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
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      unique: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Описание",
      required: true,
    },
    {
      name: "category",
      type: "select",
      label: "Категория",
      required: true,
      options: [
        { label: "Все", value: "all" },
        { label: "Караоке", value: "karaoke" },
        { label: "Квиз", value: "quiz" },
        { label: "Музыка", value: "music" },
        { label: "Бизнес", value: "business" },
        { label: "Шоу", value: "show" },
      ],
      defaultValue: "all",
    },
    {
      type: "row",
      fields: [
        {
          name: "date",
          type: "text",
          label: "День",
          required: true,
          admin: { width: "33%" },
        },
        {
          name: "month",
          type: "text",
          label: "Месяц",
          required: true,
          admin: { width: "33%" },
        },
        {
          name: "dayOfWeek",
          type: "text",
          label: "День недели",
          required: true,
          admin: { width: "34%" },
        },
      ],
    },
    {
      name: "time",
      type: "text",
      label: "Время",
      required: true,
    },
    {
      name: "image",
      type: "text",
      label: "URL изображения",
      required: true,
    },
    {
      name: "admission",
      type: "select",
      label: "Вход",
      required: true,
      options: [
        { label: "Бесплатно", value: "free" },
        { label: "Платно", value: "paid" },
      ],
      defaultValue: "free",
    },
    {
      name: "order",
      type: "number",
      label: "Порядок",
      defaultValue: 0,
    },
  ],
}
