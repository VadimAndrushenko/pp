import type { CollectionConfig } from "payload"
import { publishedStatusField } from "./statusField"

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
    publishedStatusField,
    {
      name: "title",
      type: "text",
      label: "Название",
      required: true,
      admin: {
        description: "Название услуги. Например: «Доставка»",
      },
    },
    {
      name: "description",
      type: "text",
      label: "Описание",
      required: true,
      admin: {
        description: "Короткое описание под названием. Например: «Привезём всё за 40 минут»",
      },
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
        description: "Выберите иконку из списка. Она показывается рядом с названием.",
      },
    },
    {
      name: "href",
      type: "text",
      label: "Ссылка",
      required: true,
      admin: {
        description: "Куда ведёт плитка. Пример: /menu, /events, https://t.me/poidem_pozhrem",
      },
    },
    {
      name: "order",
      type: "number",
      label: "Порядок",
      defaultValue: 0,
      admin: {
        description: "Чем меньше число — тем выше услуга на главной. Например: 0, 1, 2…",
      },
    },
  ],
}
