import type { CollectionConfig } from "payload"

export const GalleryVideos: CollectionConfig = {
  slug: "gallery-videos",
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
      name: "videoId",
      type: "text",
      label: "YouTube Video ID",
      required: true,
    },
    {
      name: "dateKey",
      type: "text",
      label: "Дата (ISO)",
      required: true,
    },
    {
      name: "dateLabel",
      type: "text",
      label: "Дата (отображение)",
      required: true,
    },
    {
      name: "order",
      type: "number",
      label: "Порядок",
      defaultValue: 0,
    },
  ],
}
