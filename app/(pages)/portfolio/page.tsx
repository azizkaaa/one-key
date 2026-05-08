"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "@/components/FadeIn";

type FilterKey = "all" | "fintech" | "ecommerce" | "scoring" | "vending";

const projectFilters: Record<string, FilterKey[]> = {
  allgood: ["all", "fintech"],
  credit: ["all", "fintech"],
  marketplace: ["all", "ecommerce"],
  aniq: ["all", "scoring"],
  coffee: ["all", "vending"],
};

export default function PortfolioPage() {
  const { t } = useLanguage();
  const p = t.portfolio;
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: p.filters.all },
    { key: "fintech", label: p.filters.fintech },
    { key: "ecommerce", label: p.filters.ecommerce },
    { key: "scoring", label: p.filters.scoring },
    { key: "vending", label: p.filters.vending },
  ];

  const projects = [
    {
      key: "allgood",
      image: "/images/mock-nasiya.svg",
      logo: "/images/logo-nasiya.svg",
      category: p.projects.allgood.category,
      title: p.projects.allgood.title,
      desc: p.projects.allgood.desc,
      large: true, // На всю ширину
    },
    {
      key: "credit",
      image: "/images/mock-anor.svg",
      category: p.projects.credit.category,
      title: p.projects.credit.title,
      desc: p.projects.credit.desc,
      large: false, // В колонку
    },
    {
      key: "marketplace",
      image: "/images/mock-market.svg",
      logo: "/images/logo-market.svg",
      category: p.projects.marketplace.category,
      title: p.projects.marketplace.title,
      desc: p.projects.marketplace.desc,
      large: false, // В колонку
    },
    {
      key: "aniq",
      image: "/images/mock-aniq.svg",
      logo: "/images/logo-aniq.svg",
      category: p.projects.aniq.category,
      title: p.projects.aniq.title,
      desc: p.projects.aniq.desc,
      tags: ["AI POWERED", "ANIQ SCORE"],
      large: true, // На всю ширину
    },
    {
      key: "coffee",
      image: "/images/mock-point.svg",
      logo: "/images/logo-point.svg",
      category: p.projects.coffee.category,
      title: p.projects.coffee.title,
      desc: p.projects.coffee.desc,
      large: true, // На всю ширину
    },
  ];

  const filtered = projects.filter((proj) =>
    projectFilters[proj.key]?.includes(activeFilter)
  );

  return (
    <div className="w-full overflow-hidden flex flex-col items-center bg-white">
      {/* 1. HERO SECTION */}
      <section className="w-full pt-24 pb-12 md:pt-32 md:pb-16 2xl:pt-40 2xl:pb-20">
  <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
      <FadeIn direction="left">
      <h1 
  className="text-[42px] sm:text-[52px] md:text-[64px] 2xl:text-[80px] font-normal leading-[1.05] tracking-tight text-[#191c1e]" 
  style={{ fontFamily: 'var(--font-heading)' }}
>
  {/* Первая строка */}
  <span className="block mb-2">{p.hero.title1}</span>
  
  {/* Вторая строка: комбинируем синий и темный цвета */}
  <div className="flex flex-wrap gap-x-3 md:gap-x-4">
    <span className="text-[#0942b2] whitespace-nowrap">
      {p.hero.titleAccent}
    </span>
    <span className="whitespace-nowrap">
      {p.hero.title2}
    </span>
  </div>
</h1>
      </FadeIn>
      
      <FadeIn delay={0.1} direction="right" className="lg:pt-6">
        <div className="border-l-4 border-[#0942b2] pl-6 md:pl-8">
          <p className="text-[16px] md:text-[18px] 2xl:text-[22px] text-[#6b7280] leading-relaxed max-w-[500px]">
            {p.hero.subtitle}
          </p>
        </div>
      </FadeIn>
    </div>
  </div>
</section>

      {/* 2. FILTERS & PROJECTS */}
      <section className="w-full bg-[#f8fafc] py-12 md:py-20 2xl:py-28">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          
          {/* Filter Tabs */}
          <FadeIn>
            {/* ДОБАВЛЕНО: flex-wrap, чтобы фильтры переносились на новые строки на мобилке */}
            <div className="flex flex-wrap bg-gray-200/50 p-1.5 rounded-xl w-full sm:w-fit mb-12 2xl:mb-16 gap-1">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`flex-grow sm:flex-grow-0 px-4 sm:px-5 py-2.5 rounded-lg text-[13px] 2xl:text-[15px] font-bold transition-all duration-200 text-center ${
                    activeFilter === filter.key
                      ? "bg-white text-[#0942b2] shadow-sm"
                      : "text-[#64748b] hover:text-[#191c1e] hover:bg-black/5"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </FadeIn>

    {/* Проекты с фиксированной сеткой как в Figma */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 2xl:gap-10">
      <AnimatePresence mode="popLayout">
      {filtered.map((proj) => {
  const isAllgood = proj.key === "allgood";
  const isCredit = proj.key === "credit";
  const isAniq = proj.key === "aniq";
  const isCoffee = proj.key === "coffee";
  const isMarket = proj.key === "marketplace";

  // Проекты, которые должны иметь структуру "Текст сверху, картинка снизу"
  const isVerticalBox = isCredit || isMarket;

  return (
    <motion.div
      key={proj.key}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ${
        isAllgood || isAniq || isCoffee ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      {/* Если это вертикальный бокс (Кредит или Маркет), убираем md:flex-row */}
      <div className={`flex flex-col h-full ${
        (isAllgood && !isVerticalBox) ? "md:flex-row" : ""
      } ${isAniq ? "md:flex-row-reverse" : ""}`}>
        
        {/* Content Area - для вертикальных боксов теперь всегда сверху */}
        <div className={`p-8 md:p-10 2xl:p-12 flex flex-col justify-center ${
          isAllgood || isAniq ? "md:w-2/5" : "w-full"
        }`}>
          <span className="text-[11px] 2xl:text-[13px] font-bold text-[#0942b2] uppercase tracking-[0.2em] mb-3">
            {proj.category}
          </span>
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-[24px] 2xl:text-[32px] font-normal leading-tight text-[#191c1e]" style={{ fontFamily: 'var(--font-heading)' }}>
              {proj.title}
            </h3>
            {proj.logo && (
              <Image
                src={proj.logo}
                alt="logo"
                width={100}
                height={40}
                className="h-6 2xl:h-8 w-auto object-contain opacity-90"
              />
            )}
          </div>

          <p className="text-[14px] 2xl:text-[16px] text-[#6b7280] leading-relaxed">
            {proj.desc}
          </p>

          {proj.tags && (
            <div className="flex flex-wrap gap-2 mt-6">
              {proj.tags.map((tag) => (
                <div key={tag} className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded text-[10px] font-bold text-[#475569] uppercase tracking-wider">
                  <span className="w-1 h-1 bg-[#0942b2] rounded-full" />
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image Area - для вертикальных боксов уходит вниз */}
        <div className={`bg-[#f8fafc] p-8 md:p-10 flex items-center justify-center overflow-hidden relative ${
          isAllgood || isAniq ? "md:w-3/5" : "w-full"
        } ${isVerticalBox ? "mt-auto border-t border-gray-50" : ""}`}>
          <Image
            src={proj.image}
            alt={proj.title}
            width={600}
            height={400}
            className="object-contain w-full h-full max-h-[350px] transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>

      </div>
    </motion.div>
  );
})}
      </AnimatePresence>
    </div>
  </div>
</section>

      {/* 3. CTA SECTION */}
      <section className="w-full bg-white py-12 md:py-20 2xl:py-24">
  <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
    <div className="bg-[#f2f4f7] rounded-2xl p-8 md:p-12 2xl:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
      
      <FadeIn direction="left" className="max-w-[750px] text-center md:text-left">
        <h2 
          className="text-[28px] md:text-[38px] 2xl:text-[46px] font-normal text-[#191c1e] leading-[1.1] tracking-[-0.02em]" 
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {/* Используем p.cta.title1 и title2 из твоего словаря.
              Чтобы "следующий" не падал, оборачиваем первую часть в span с whitespace-nowrap.
          */}
          <span className="block md:whitespace-nowrap">
            {p.cta.title1}
          </span>
          
          <span className="block text-[#0942b2]">
            {p.cta.title2} <span className="text-[#191c1e]">{p.cta.title3 || ""}</span>
          </span>
        </h2>
        
        <p className="mt-4 text-[14px] md:text-[16px] 2xl:text-[18px] text-[#475569] leading-relaxed">
          {p.cta.subtitle}
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Link 
          href="/contacts" 
          className="inline-block bg-[#0942b2] text-white px-8 py-3.5 md:px-10 md:py-4 rounded font-bold text-[15px] 2xl:text-[17px] hover:bg-[#073694] transition-all shadow-md hover:shadow-lg active:scale-[0.98] whitespace-nowrap"
        >
          {p.cta.btn}
        </Link>
      </FadeIn>
    </div>
  </div>
</section>
    </div>
  );
}