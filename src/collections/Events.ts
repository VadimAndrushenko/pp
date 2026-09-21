import type { CollectionConfig } from "payload"
import {
  computeDateForDayOfWeek,
  computePartsFromIsoDate,
} from "./components/dateTimeUtils"

function resolveSchedule(siblingData: Record<string, unknown>) {
  const scheduleType = siblingData?.scheduleType as string | undefined
  const dayOfWeek = siblingData?.dayOfWeek as string | undefined
  const specificDate = siblingData?.specificDate as string | undefined

  if (scheduleType === "one-off" && specificDate) {
    const parts = computePartsFromIsoDate(specificDate)
    if (parts) return parts
  }

  return {
    date: dayOfWeek ? computeDateForDayOfWeek(dayOfWeek).date : "",
    month: dayOfWeek ? computeDateForDayOfWeek(dayOfWeek).month : "",
    dayOfWeek: dayOfWeek ?? "Понедельник",
  }
}

export const Events: CollectionConfig = {
  slug: "events",
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "title",
    group: "Контент",
    components: {
      beforeList: ["/src/collections/components/EventsDaysTabs"],
    },
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
      name: "date",
      type: "text",
      label: "День",
      required: true,
      admin: { hidden: true },
      hooks: {
        beforeValidate: [
          ({ siblingData }) => resolveSchedule(siblingData).date,
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
          ({ siblingData }) => resolveSchedule(siblingData).month,
        ],
      },
    },
    {
      name: "dayOfWeek",
      type: "select",
      label: "День недели",
      required: true,
      defaultValue: "Понедельник",
      options: [
        { label: "Понедельник", value: "Понедельник" },
        { label: "Вторник", value: "Вторник" },
        { label: "Среда", value: "Среда" },
        { label: "Четверг", value: "Четверг" },
        { label: "Пятница", value: "Пятница" },
        { label: "Суббота", value: "Суббота" },
        { label: "Воскресенье", value: "Воскресенье" },
      ],
      admin: { hidden: true },
      hooks: {
        beforeValidate: [
          ({ siblingData }) => resolveSchedule(siblingData).dayOfWeek,
        ],
      },
    },
    {
      name: "time",
      type: "text",
      label: "Время",
      required: true,
      defaultValue: "20:00",
      admin: { hidden: true },
    },
    {
      name: "scheduleType",
      type: "select",
      label: "Тип расписания",
      required: true,
      defaultValue: "recurring",
      options: [
        { label: "Постоянное", value: "recurring" },
        { label: "Одноразовое", value: "one-off" },
      ],
      admin: { hidden: true },
    },
    {
      name: "specificDate",
      type: "text",
      label: "Дата (одноразовое)",
      admin: { hidden: true },
    },
    {
      type: "ui",
      name: "eventSchedule",
      admin: {
        components: {
          Field: "/src/collections/components/EventDateTimeField",
        },
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Изображение",
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
      type: "tabs",
      tabs: [
        {
          label: "Страница события",
          fields: [
            {
              type: "collapsible",
              label: "Hero и программа",
              fields: [
                {
                  name: "heroLines",
                  type: "array",
                  label: "Строки заголовка (до 3)",
                  maxRows: 3,
                  fields: [
                    {
                      name: "line",
                      type: "text",
                      label: "Строка",
                    },
                  ],
                },
                {
                  name: "heroSubtitle",
                  type: "text",
                  label: "Подзаголовок события",
                },
                {
                  name: "programHeading",
                  type: "text",
                  label: "Заголовок программы",
                  defaultValue: "В ПРОГРАММЕ",
                },
                {
                  name: "features",
                  type: "array",
                  label: "Пункты программы",
                  fields: [
                    {
                      name: "icon",
                      type: "text",
                      label: "Иконка",
                      admin: {
                        components: {
                          Field: "/src/collections/components/IconPickerField",
                        },
                      },
                    },
                    {
                      name: "title",
                      type: "text",
                      label: "Название",
                    },
                    {
                      name: "desc",
                      type: "text",
                      label: "Описание",
                    },
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
