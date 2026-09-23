import type { CollectionConfig } from "payload"
import { computePartsFromIsoDate } from "./components/dateTimeUtils"
import { slugify } from "./components/slugify"
import { publishedStatusField } from "./statusField"

function resolveDate(siblingData: Record<string, unknown>) {
  const reportDate = siblingData?.reportDate as string | undefined
  const parts = reportDate ? computePartsFromIsoDate(reportDate) : null
  return {
    date: parts?.date ?? (siblingData?.date as string | undefined) ?? "",
    month: parts?.month ?? (siblingData?.month as string | undefined) ?? "",
    dayOfWeek: parts?.dayOfWeek ?? (siblingData?.dayOfWeek as string | undefined) ?? "",
  }
}

export const GalleryReports: CollectionConfig = {
  slug: "gallery-reports",
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "title",
    group: "Контент",
    defaultColumns: ["title", "_status", "date", "updatedAt"],
  },
  fields: [
    publishedStatusField,
    {
      name: "title",
      type: "text",
      label: "Название",
      required: true,
      admin: {
        description: "Название отчёта. Например: «Караоке-батл»",
      },
    },
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
              : slugify((siblingData?.title as string) || "") ||
                (siblingData?.reportDate as string) ||
                "report",
        ],
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Описание",
      defaultValue: "",
      admin: {
        hidden: true,
      },
    },
    {
      name: "category",
      type: "select",
      label: "Категория",
      options: [
        { label: "Все", value: "all" },
        { label: "Караоке", value: "karaoke" },
        { label: "Квиз", value: "quiz" },
        { label: "Музыка", value: "music" },
        { label: "Бизнес", value: "business" },
        { label: "Шоу", value: "show" },
      ],
      defaultValue: "all",
      admin: {
        hidden: true,
      },
    },
    {
      name: "reportDate",
      type: "text",
      admin: { hidden: true },
    },
    {
      type: "ui",
      name: "reportDatePicker",
      admin: {
        components: {
          Field: "/src/collections/components/ReportDateField",
        },
      },
    },
    {
      name: "date",
      type: "text",
      label: "День",
      required: true,
      admin: { hidden: true },
      hooks: {
        beforeValidate: [
          ({ siblingData, value }) => resolveDate(siblingData).date || value,
        ],
      },
    },
    {
      name: "month",
      type: "text",
      label: "Месяц",
      required: true,
      admin: { hidden: true },
      hooks: {
        beforeValidate: [
          ({ siblingData, value }) => resolveDate(siblingData).month || value,
        ],
      },
    },
    {
      name: "dayOfWeek",
      type: "text",
      label: "День недели",
      required: true,
      admin: { hidden: true },
      hooks: {
        beforeValidate: [
          ({ siblingData, value }) => resolveDate(siblingData).dayOfWeek || value,
        ],
      },
    },
    {
      name: "time",
      type: "text",
      label: "Время",
      defaultValue: "20:00",
      admin: {
        hidden: true,
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Главное фото",
      required: true,
      admin: {
        description: "Используется на главной странице. Остальные фото добавляйте ниже.",
      },
    },
    {
      name: "photos",
      type: "array",
      label: "Фотографии за дату",
      admin: {
        description:
          "Добавьте все фото мероприятия этого дня — все они попадут в подборку на главной странице.",
      },
      fields: [
        {
          name: "title",
          type: "text",
          label: "Подпись",
          admin: {
            description: "Необязательно — подставится название отчёта.",
          },
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Фото",
          required: true,
        },
      ],
    },
    {
      name: "admission",
      type: "select",
      label: "Вход",
      options: [
        { label: "Бесплатно", value: "free" },
        { label: "Платно", value: "paid" },
      ],
      defaultValue: "free",
      admin: {
        hidden: true,
      },
    },
    {
      name: "order",
      type: "number",
      label: "Порядок",
      defaultValue: 0,
      admin: {
        hidden: true,
      },
    },
  ],
}