import type { CollectionConfig } from "payload"
import {
  computeDateForDayOfWeek,
  computePartsFromIsoDate,
} from "./components/dateTimeUtils"
import { publishedStatusField } from "./statusField"

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
    publishedStatusField,
    {
      name: "title",
      type: "text",
      label: "Название",
      required: true,
      admin: {
        description: "Название события. Например: «Караоке-батл»",
      },
    },
    {
      name: "subtitle",
      type: "text",
      label: "Подзаголовок",
      admin: {
        description: "Короткая фраза под названием. Можно оставить пустым.",
      },
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      unique: true,
      admin: {
        description: "Английскими буквами, без пробелов. Например: karaoke-battle. Используется в адресе страницы.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Описание",
      required: true,
      admin: {
        description: "Короткое описание события для карточки на главной и на странице события.",
      },
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
      admin: {
        description: "Раздел, в котором событие показывается на сайте. «Все» — общий случай.",
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
      admin: {
        description: "Показывать «Вход свободный» или «Платно» на сайте.",
      },
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
                  admin: {
                    description:
                      "Крупный заголовок на странице события. Можно разбить на 2–3 строки для красоты.",
                  },
                  fields: [
                    {
                      name: "line",
                      type: "text",
                      label: "Строка",
                      admin: {
                        description: "Одна строка заголовка. Например: «Караоке-батл каждый четверг»",
                      },
                    },
                  ],
                },
                {
                  name: "heroSubtitle",
                  type: "text",
                  label: "Подзаголовок события",
                  admin: {
                    description: "Фраза под крупным заголовком. Например: «Зажигаем в четверг!»",
                  },
                },
                {
                  name: "programHeading",
                  type: "text",
                  label: "Заголовок программы",
                  defaultValue: "В ПРОГРАММЕ",
                  admin: {
                    description: "Заголовок блока программы. По умолчанию: «В ПРОГРАММЕ»",
                  },
                },
                {
                  name: "features",
                  type: "array",
                  label: "Пункты программы",
                  admin: {
                    description:
                      "Чем интересно событие. Например: «живой звук», «розыгрыши», «хиты 90-х».",
                  },
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
                      admin: {
                        description: "Короткое название пункта. Например: «Живой звук»",
                      },
                    },
                    {
                      name: "desc",
                      type: "text",
                      label: "Описание",
                      admin: {
                        description: "Пара слов о пункте. Например: «Музыка вживую до полуночи»",
                      },
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
