import type { Field } from "payload"

/**
 * Переопределение системного поля `_status`.
 * Payload по умолчанию создаёт новые записи как черновики
 * (`defaultValue: 'draft'` в baseVersionFields), а нам нужно,
 * чтобы всё публиковалось сразу.
 */
export const publishedStatusField: Field = {
  name: "_status",
  type: "select",
  defaultValue: "published",
  options: [
    { label: "Черновик", value: "draft" },
    { label: "Опубликовано", value: "published" },
  ],
}