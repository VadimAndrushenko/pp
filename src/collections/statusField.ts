import type { Field } from "payload"

/**
 * Переопределение системного поля `_status` (версионирование) —
 * оформлено строго как в проекте Phuquoc Club (коллекция SubSections).
 * Применяется ТОЛЬКО к динамическим коллекциям (с `versions.drafts`),
 * не к статике, медиа и пользователям.
 */
export const publishedStatusField: Field = {
  name: "_status",
  type: "select",
  label: "Статус",
  options: [
    { label: "📝 Черновик", value: "draft" },
    { label: "✅ Опубликовано", value: "published" },
  ],
  defaultValue: "draft",
  required: true,
  index: true,
  admin: {
    position: "sidebar",
    description: "Черновик — запись не видна на сайте.",
  },
}