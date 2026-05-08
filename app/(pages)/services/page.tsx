"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "@/components/FadeIn";

export default function ServicesPage() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <div className="w-full overflow-hidden flex flex-col items-center">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-white relative pt-24 pb-16 md:pt-32 md:pb-24 2xl:pt-40 2xl:pb-32">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-16 items-center">
            <FadeIn direction="left">
              {/* Уменьшили мобильный шрифт до 32px, добавили break-words для длинных слов */}
              <h1 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px] 2xl:text-[80px] font-normal leading-[1.1] tracking-tight text-[#191c1e] break-words">
                {s.hero.title1}
                <br />
                <span className="text-[#0942b2]">{s.hero.title2}</span>
                <br />
                {s.hero.title3}
              </h1>
              <p className="mt-6 text-[16px] md:text-[18px] 2xl:text-[22px] text-[#6b7280] leading-relaxed max-w-[480px] 2xl:max-w-[600px]">
                {s.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.15} direction="right">
              <div className="relative flex justify-center lg:justify-end">
                <Image
                  src="/images/sky.svg"
                  alt="Services illustration"
                  width={800}
                  height={600}
                  priority
                  className="w-full max-w-[600px] 2xl:max-w-[800px] h-auto object-contain"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
     <section className="w-full bg-[#f8fafc] py-16 md:py-24 2xl:py-32">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          {/* Сетка из 3 колонок для гибкости как в макете */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 2xl:gap-10">
            
            {/* 01. Разработка (Занимает 2 колонки по горизонтали) */}
            <FadeIn className="md:col-span-2">
              <div className="bg-white rounded-2xl p-8 lg:p-10 2xl:p-14 border border-gray-100 shadow-sm h-full relative group">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-12 h-12 2xl:w-16 2xl:h-16">
                    <Image src="/images/terminal.svg" alt="icon" width={64} height={64} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[32px] 2xl:text-[48px] font-normal text-[#0942b2]/10 leading-none" style={{ fontFamily: 'var(--font-heading)' }}>01</span>
                </div>
                
                <h3 className="text-[26px] 2xl:text-[36px] font-normal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                  {s.s1.title}
                </h3>
                <p className="text-[15px] 2xl:text-[18px] text-[#6b7280] leading-relaxed mb-8 max-w-[500px]">
                  {s.s1.desc}
                </p>
                
                <ul className="space-y-3.5">
                  {s.s1.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[14px] 2xl:text-[16px] text-[#191c1e] font-semibold">
                      <span className="w-1.5 h-1.5 bg-[#0942b2] rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* 02. IT-Консалтинг (Занимает 1 колонку, но может быть выше остальных) */}
            <FadeIn delay={0.1}>
              <div className="bg-[#0942b2] rounded-2xl p-8 lg:p-10 2xl:p-14 text-white h-full flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-12 h-12 2xl:w-16 2xl:h-16">
                      <Image src="/images/circus.svg" alt="icon" width={64} height={64} className="w-full h-full object-contain brightness-0 invert" />
                    </div>
                    <span className="text-[32px] 2xl:text-[48px] font-normal text-white/20 leading-none" style={{ fontFamily: 'var(--font-heading)' }}>02</span>
                  </div>
                  <h3 className="text-[26px] 2xl:text-[36px] font-normal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                    {s.s2.title}
                  </h3>
                  <p className="text-[15px] 2xl:text-[18px] text-white/80 leading-relaxed mb-10">
                    {s.s2.desc}
                  </p>
                </div>
                
                <div>
                  <p className="text-[11px] 2xl:text-[13px] font-bold uppercase tracking-widest text-white/50 mb-4">Ключевая экспертиза:</p>
                  <div className="flex flex-wrap gap-2">
                    {s.s2.tags.map((tag) => (
                      <span key={tag} className="text-[11px] 2xl:text-[13px] font-bold bg-white/10 border border-white/20 px-4 py-2 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 03. Аутстаффинг (1 колонка снизу) */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 lg:p-10 2xl:p-14 border border-gray-100 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-12 h-12 2xl:w-16 2xl:h-16">
                      <Image src="/images/people.svg" alt="icon" width={64} height={64} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[32px] 2xl:text-[48px] font-normal text-[#0942b2]/10 leading-none" style={{ fontFamily: 'var(--font-heading)' }}>03</span>
                  </div>
                  <h3 className="text-[26px] 2xl:text-[36px] font-normal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                    {s.s3.title}
                  </h3>
                  <p className="text-[15px] 2xl:text-[18px] text-[#6b7280] leading-relaxed">
                    {s.s3.desc}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <div className=" px-4 py-2 rounded-md">
                    <span className="text-[24px] 2xl:text-[32px] font-bold text-[#0942b2] font-sans">+40</span>
                  </div>
                  <span className="text-[11px] 2xl:text-[13px] font-bold uppercase tracking-widest text-[#0942b2]">{s.s3.available}</span>
                </div>
              </div>
            </FadeIn>

            {/* 04. DevOps & Инфраструктура (Занимает 2 колонки, с картинкой справа) */}
            <FadeIn delay={0.3} className="md:col-span-2">
              <div className="bg-white rounded-2xl p-8 lg:p-10 2xl:p-14 border border-gray-100 shadow-sm h-full flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
                <div className="flex-1 z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-12 h-12 2xl:w-16 2xl:h-16">
                      <Image src="/images/cloud.svg" alt="icon" width={64} height={64} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[32px] 2xl:text-[48px] font-normal text-[#0942b2]/10 leading-none" style={{ fontFamily: 'var(--font-heading)' }}>04</span>
                  </div>
                  <h3 className="text-[26px] 2xl:text-[36px] font-normal mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                    {s.s4.title}
                  </h3>
                  <p className="text-[15px] 2xl:text-[18px] text-[#6b7280] leading-relaxed mb-10 max-w-[400px]">
                    {s.s4.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[24px] 2xl:text-[32px] font-bold text-[#0942b2] font-sans">24/7</span>
                    <span className="text-[11px] 2xl:text-[13px] font-bold uppercase tracking-widest text-[#0942b2]">мониторинг</span>
                  </div>
                </div>
                
                {/* Иллюстрация DevOps как в Figma */}
                <div className="flex-1 flex justify-end relative">
                   <Image 
                    src="/images/fire.svg" 
                    alt="DevOps Illustration" 
                    width={450} 
                    height={350} 
                    className="w-full max-w-[380px] 2xl:max-w-[450px] h-auto object-contain"
                   />
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="w-full bg-[#0942b2] py-16 md:py-24 2xl:py-32">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            
            <FadeIn direction="left" className="max-w-[800px] text-center md:text-left w-full">
              <h2 
               
                className="text-[28px] sm:text-[32px] md:text-[42px] 2xl:text-[56px] font-normal text-white leading-[1.2] md:leading-[1.1] tracking-tight break-words" 
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {/* whitespace-nowrap теперь работает ТОЛЬКО на планшетах и ПК (md:whitespace-nowrap) */}
                <span className="block md:whitespace-nowrap">
                  {s.cta.title.split(' ').slice(0, 2).join(' ')}
                </span>
                <span className="block">
                  {s.cta.title.split(' ').slice(2).join(' ')}
                </span>
              </h2>
              
              <p className="mt-6 text-[15px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] text-white/75 leading-relaxed max-w-[600px] mx-auto md:mx-0">
                {s.cta.subtitle}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <Link 
                href="/contacts#contact-form" 
                className="inline-block bg-transparent border-2 border-white text-white px-8 md:px-10 py-3.5 rounded font-bold text-[15px] md:text-[16px] 2xl:text-[18px] hover:bg-white hover:text-[#0942b2] transition-all whitespace-nowrap active:scale-95"
              >
                {s.cta.btn}
              </Link>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}