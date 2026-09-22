import type { CollectionConfig } from "payload"
import { formatDateLabel } from "./components/dateTimeUtils"
import { extractYouTubeVideoId } from "./components/youtubeUtils"
import { publishedStatusField } from "./statusField"

function resolveYoutubeId(siblingData: Record<string, unknown>) {
  const videoUrl = siblingData?.videoUrl as string | undefined
  return extractYouTubeVideoId(videoUrl)
}

function resolveVideoDate(siblingData: Record<string, unknown>) {
  const reportDate = siblingData?.reportDate as string | undefined
  if (reportDate) {
    return {
      dateKey: reportDate,
      dateLabel: formatDateLabel(reportDate),
    }
  }
  return {
    dateKey: (siblingData?.dateKey as string | undefined) ?? "",
    dateLabel: (siblingData?.dateLabel as string | undefined) ?? "",
  }
}

export const GalleryVideos: CollectionConfig = {
  slug: "gallery-videos",
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "title",
    group: "Контент",
    defaultColumns: ["title", "dateLabel", "updatedAt"],
  },
  fields: [
    publishedStatusField,
    {
      name: "title",
      type: "text",
      label: "Название отчёта",
      required: true,
      admin: {
        description: "Например: «Караоке батл», «DJ вечеринка». Можно оставить пустым, если в группе есть названия роликов.",
      },
    },
    {
      name: "videos",
      type: "array",
      label: "Видео за дату",
      required: true,
      admin: {
        description:
          "Добавьте ссылки YouTube на все ролики этого дня. ID подставится автоматически.",
      },
      fields: [
        {
          name: "title",
          type: "text",
          label: "Название ролика",
          admin: {
            description: "Необязательно — подставится название отчёта.",
          },
        },
        {
          name: "videoUrl",
          type: "text",
          label: "Ссылка YouTube",
          required: true,
          admin: {
            description:
              "Ссылка на видео. Пример: https://youtube.com/watch?v=XXXXXXXXXXX (из «Поделиться» → «Копировать»).",
          },
          validate: (value: string | null | undefined) => {
            if (!value) return true
            return extractYouTubeVideoId(value) ? true : "Введите корректную ссылку YouTube"
          },
        },
        {
          name: "videoId",
          type: "text",
          admin: { hidden: true },
          required: true,
          hooks: {
            beforeValidate: [
              ({ siblingData, value }) => {
                const id = resolveYoutubeId(siblingData)
                return id ?? value
              },
            ],
          },
        },
        {
          name: "featured",
          type: "checkbox",
          label: "Показывать на главной",
          defaultValue: false,
          admin: {
            description: "Этот ролик попадёт в подборку на главной странице.",
          },
        },
      ],
    },
    {
      name: "videoId",
      type: "text",
      label: "ID видео (старое)",
      admin: { hidden: true },
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
          Field: "/src/collections/components/VideoReportDateField",
        },
      },
    },
    {
      name: "dateKey",
      type: "text",
      label: "Дата (ISO)",
      required: true,
      admin: { hidden: true },
      hooks: {
        beforeValidate: [
          ({ siblingData, value }) => resolveVideoDate(siblingData).dateKey || value,
        ],
      },
    },
    {
      name: "dateLabel",
      type: "text",
      label: "Дата (отображение)",
      required: true,
      admin: { hidden: true },
      hooks: {
        beforeValidate: [
          ({ siblingData, value }) => resolveVideoDate(siblingData).dateLabel || value,
        ],
      },
    },
    {
      name: "order",
      type: "number",
      label: "Порядок",
      defaultValue: 0,
      admin: {
        description: "Чем меньше число — тем выше отчёт в списке. Например: 0, 1, 2…",
      },
    },
  ],
}