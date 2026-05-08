import type { Metadata } from "next";
import { Dela_Gothic_One, Raleway } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

// Инициализируем наш жирный шрифт для заголовков
const delaGothic = Dela_Gothic_One({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--font-heading",
});

// Инициализируем Raleway для основного текста
const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  // Укажи здесь ваш реальный домен (пока можно оставить netlify, потом поменяешь на .com/.tech)
  metadataBase: new URL("https://onekey-technology.netlify.app"), 

  title: {
    default: "One Key Technologies — End-to-End Digital Solutions",
    // Шаблон для внутренних страниц (например, вкладка будет: "Услуги | One Key Technologies")
    template: "%s | One Key Technologies", 
  },
  
  description: "Проектируем, разрабатываем и масштабируем технологические продукты для лидеров рынка. От идеи до высоконагруженной enterprise-архитектуры.",
  
  // Ключевые слова (Google их уже почти не читает, но Яндекс и другие поисковики все еще учитывают)
  keywords: [
    "разработка ПО", 
    "IT консалтинг", 
    "мобильная разработка", 
    "создание веб-сервисов", 
    "One Key Technologies", 
    "IT компания Ташкент", 
    "fintech разработка",
    "Flutter",
    "цифровая трансформация"
  ],

  // Open Graph — это то, как ссылка выглядит в Telegram, WhatsApp, LinkedIn и т.д.
  openGraph: {
    title: "One Key Technologies — End-to-End Digital Solutions",
    description: "Проектируем, разрабатываем и масштабируем технологические продукты для лидеров рынка.",
    url: "https://onekey-technology.netlify.app",
    siteName: "One Key Technologies",
    images: [
      {
        // Сделай красивую картинку 1200x630 с вашим логотипом и закинь в public/images/
        url: "/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "One Key Technologies Preview",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  // Настройки для ссылок в Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "One Key Technologies",
    description: "Трансформируем бизнес-процессы в конкурентные преимущества.",
    images: ["/images/og-image.jpg"],
  },

  // Указания для поисковых роботов (разрешаем индексировать всё)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Так как у вас 3 языка, это ОЧЕНЬ важно для Google, чтобы он понимал версии сайта
  alternates: {
    canonical: "https://onekey-technology.netlify.app",
    languages: {
      "ru": "https://onekey-technology.netlify.app/ru",
      "en": "https://onekey-technology.netlify.app/en",
      "uz": "https://onekey-technology.netlify.app/uz",
    },
  },
};