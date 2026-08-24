export const DELIVERY_FEE = 50_000

export const FREE_DELIVERY_FROM = 1_000_000

export const DELIVERY_ETA = "45–60 минут"

export function getDelivery(total: number) {
  const free = total >= FREE_DELIVERY_FROM
  return {
    free,
    fee: free ? 0 : DELIVERY_FEE,
    remaining: Math.max(0, FREE_DELIVERY_FROM - total),
  }
}
