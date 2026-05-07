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
  title: "One Key Technologies — End-to-End Digital Solutions",
  description: "Проектируем, разрабатываем и масштабируем технологические продукты для лидеров рынка.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      {/* Next.js автоматически внедрит переменные шрифтов прямо в body */}
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