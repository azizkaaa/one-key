import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// 1. Обновленная схема валидации
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(7).max(20),
  // Убрали .min(10), теперь достаточно 1 символа, если поле заполнено
  message: z.string().max(2000).optional().or(z.literal("")),
  industry: z.string().min(1, "Выберите направление"), // Новое обязательное поле
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

    const { name, phone, message, industry, source } = parsed.data;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // 2. Формируем сообщение в формате HTML (надежнее Markdown)
    // Используем <b> вместо *
    const text = [
      `<b>🔔 Новая заявка!</b>`,
      ``,
      `<b>👤 Имя:</b> ${name}`,
      `<b>📞 Телефон:</b> ${phone}`,
      `<b>🏢 Направление:</b> ${industry}`, // Добавили в отчет
      message ? `<b>💬 Сообщение:</b> ${message}` : null,
      `<b>📍 Источник:</b> ${source || "Страница контактов"}`,
      ``,
      `<i>🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" })}</i>`,
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
          parse_mode: "HTML", // Сменили на HTML
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