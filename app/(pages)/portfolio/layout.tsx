import type { Metadata } from "next";

// Персональное SEO для страницы портфолио
export const metadata: Metadata = {
  title: "Портфолио | One Key Technologies",
  description: "Ознакомьтесь с нашими успешными проектами: FinTech, E-Commerce, Scoring и высоконагруженные цифровые решения.",
};

// Тот самый React-компонент, который требует Next.js
export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}