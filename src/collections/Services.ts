import type { CollectionConfig } from "payload"

export const Services: CollectionConfig = {
  slug: "services",
  versions: {
    drafts: true,
  },
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
      name: "description",
      type: "text",
      label: "Описание",
      required: true,
    },
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
    {
      name: "href",
      type: "text",
      label: "Ссылка",
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
