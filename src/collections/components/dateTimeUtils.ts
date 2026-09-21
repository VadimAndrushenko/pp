export const DAYS_OF_WEEK = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
] as const

export const MONTHS_GENITIVE = [
  "ЯНВАРЯ",
  "ФЕВРАЛЯ",
  "МАРТА",
  "АПРЕЛЯ",
  "МАЯ",
  "ИЮНЯ",
  "ИЮЛЯ",
  "АВГУСТА",
  "СЕНТЯБРЯ",
  "ОКТЯБРЯ",
  "НОЯБРЯ",
  "ДЕКАБРЯ",
] as const

export const HOURS = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"))
export const MINUTES = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"]

export const DAY_NUMBER_TO_INDEX = {
  Понедельник: 0,
  Вторник: 1,
  Среда: 2,
  Четверг: 3,
  Пятница: 4,
  Суббота: 5,
  Воскресенье: 6,
} as const

export function computeDateForDayOfWeek(
  dayOfWeek: string,
  now: Date = new Date(),
): { date: string; month: string } {
  const index = DAYS_OF_WEEK.indexOf(dayOfWeek as (typeof DAYS_OF_WEEK)[number])
  if (index === -1) return { date: "", month: "" }

  const mondayOffset = (now.getDay() + 6) % 7
  const monday = new Date(now)
  monday.setHours(0, 0, 0, 0)
  monday.setDate(monday.getDate() - mondayOffset)

  const target = new Date(monday)
  target.setDate(monday.getDate() + index)

  return {
    date: String(target.getDate()).padStart(2, "0"),
    month: MONTHS_GENITIVE[target.getMonth()],
  }
}

export function parseISODate(value: string): Date {
  const [year, month, day] = value.split("-").map(Number)
  return new Date(year, month - 1, day)
}

export function formatISODate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function dayOfWeekFromDate(date: Date): string {
  const jsDay = date.getDay()
  const index = (jsDay + 6) % 7
  return DAYS_OF_WEEK[index]
}

export function getWeekBounds(now: Date = new Date()): { monday: Date; sunday: Date } {
  const mondayOffset = (now.getDay() + 6) % 7
  const monday = new Date(now)
  monday.setHours(0, 0, 0, 0)
  monday.setDate(monday.getDate() - mondayOffset)

  const sunday = new Date(monday)
  sunday.setDate(sunday.getDate() + 6)
  sunday.setHours(23, 59, 59, 999)

  return { monday, sunday }
}

export function isDateInCurrentWeek(value: string, now: Date = new Date()): boolean {
  const { monday, sunday } = getWeekBounds(now)
  const target = parseISODate(value)
  return target >= monday && target <= sunday
}

export function computePartsFromIsoDate(
  value: string,
): { date: string; month: string; dayOfWeek: string } | null {
  if (!value) return null
  const target = parseISODate(value)
  if (Number.isNaN(target.getTime())) return null

  return {
    date: String(target.getDate()).padStart(2, "0"),
    month: MONTHS_GENITIVE[target.getMonth()],
    dayOfWeek: dayOfWeekFromDate(target),
  }
}

export function formatDateLabel(value: string): string {
  if (!value) return ""
  const target = parseISODate(value)
  if (Number.isNaN(target.getTime())) return ""

  const month = MONTHS_GENITIVE[target.getMonth()].toLowerCase()
  return `${target.getDate()} ${month}`
}