const BASE_PATHS = [
  "/",
  "/banquet",
  "/booking",
  "/community",
  "/contacts",
  "/currency",
  "/delivery",
  "/events",
  "/find-us",
  "/gallery",
  "/gallery/photos",
  "/gallery/videos",
  "/hookah",
  "/hookah/out",
  "/hotel",
  "/island-info",
  "/menu",
  "/promotions",
  "/vip",
] as const

/**
 * Инвалидирует ISR-кеш контентных страниц после правки в админке.
 *
 * Вызывается из Payload-хуков afterChange/afterDelete. `next/cache`
 * подгружается динамически, чтобы конфиг Payload оставался рабочим в CLI
 * (generate:types и т.п.) вне Next.js-контекста. Вне Next-контекста вызов
 * молча игнорируется, чтобы не ронять запись.
 */
export const revalidateSite = async (extraPaths: string[] = []): Promise<void> => {
  const paths = new Set<string>([...BASE_PATHS, ...extraPaths])
  try {
    const { revalidatePath } = await import("next/cache")
    for (const path of paths) {
      revalidatePath(path)
    }
  } catch {
    // revalidatePath доступен только внутри Next.js request/build контекста
  }
}
