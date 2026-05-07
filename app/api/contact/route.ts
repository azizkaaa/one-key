import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(7).max(20),
  message: z.string().min(10).max(2000).optional(),
  source: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, phone, message, source } = parsed.data;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const text = [
      `🔔 *Новая заявка !`,
      ``,
      `👤 *Имя:* ${name}`,
      `📞 *Телефон:* ${phone}`,
      message ? `💬 *Сообщение:* ${message}` : null,
      source ? `📍 *Источник:* ${source}` : null,
      ``,
      `🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" })}`,
    ]
      .filter(Boolean)
      .join("\n");

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramRes.ok) {
      const err = await telegramRes.text();
      console.error("Telegram API error:", err);
      return NextResponse.json(
        { success: false, error: "Failed to send message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
