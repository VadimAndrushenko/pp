const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

// Отправка готового текста в чат бота (вызывается из клиентских компонентов)
export async function sendTelegramMessage(text: string): Promise<boolean> {
  if (!token || !chatId) {
    console.error("Проверьте NEXT_PUBLIC_TELEGRAM_BOT_TOKEN и NEXT_PUBLIC_TELEGRAM_CHAT_ID в .env")
    return false
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    })
    return res.ok
  } catch (err) {
    console.error(err)
    return false
  }
}
