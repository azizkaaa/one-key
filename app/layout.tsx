import type { Metadata } from "next";
import { Dela_Gothic_One, Raleway } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

// 1. Шрифты
const delaGothic = Dela_Gothic_One({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--font-heading",
});

const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
});

// 2. Максимальное SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://onekeytech.uz"), 

  title: {
    default: "One Key Technologies — End-to-End Digital Solutions",
    template: "%s | One Key Technologies", 
  },
  
  description: "Проектируем, разрабатываем и масштабируем технологические продукты для лидеров рынка. От идеи до высоконагруженной enterprise-архитектуры.",
  
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

  openGraph: {
    title: "One Key Technologies — End-to-End Digital Solutions",
    description: "Проектируем, разрабатываем и масштабируем технологические продукты для лидеров рынка.",
    url: "https://onekeytech.uz",
    siteName: "One Key Technologies",
    images: [
      {
        url: "/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "One Key Technologies Preview",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "One Key Technologies",
    description: "Трансформируем бизнес-процессы в конкурентные преимущества.",
    images: ["/images/og-image.jpg"],
  },

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

  alternates: {
    canonical: "https://onekeytech.uz",
    languages: {
      "ru": "https://onekeytech.uz/ru",
      "en": "https://onekeytech.uz/en",
      "uz": "https://onekeytech.uz/uz",
    },
  },
};

// 3. САМОЕ ГЛАВНОЕ: Экспорт компонента (то, чего не хватало)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${raleway.variable} ${delaGothic.variable} font-sans antialiased text-[#191c1e] bg-white`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen overflow-x-hidden">
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}