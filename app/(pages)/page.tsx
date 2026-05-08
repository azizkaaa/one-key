"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <div className="w-full overflow-hidden flex flex-col items-center">
      {/* 1. HERO SECTION - Убрали min-h-screen, настроили мягкие отступы */}
      <section className="w-full bg-white relative pt-24 pb-16 md:pt-32 md:pb-24 2xl:pt-40 2xl:pb-32">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-16 items-center">
            <FadeIn direction="left">
            <h1 className="text-[42px] sm:text-[52px] md:text-[64px] 2xl:text-[80px] font-normal leading-[1.05] tracking-tight text-[#191c1e]">
  {h.hero.title1}
  <br />
  {h.hero.title2}
  <br />
  {/* Добавили пробел перед span на всякий случай, чтобы слова точно не слипались */}
  <span className="text-[#0942b2]"> {h.hero.title3}</span>
</h1>
              <p className="mt-6 text-[16px] md:text-[18px] 2xl:text-[22px] text-[#6b7280] leading-relaxed max-w-[480px] 2xl:max-w-[600px]">
                {h.hero.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap gap-4 2xl:gap-6">
                <Link 
                  href="/contacts#contact-form" 
                  className="bg-[#0942b2] text-white px-8 py-3.5 2xl:px-10 2xl:py-4 rounded-md font-semibold text-[16px] 2xl:text-[18px] hover:bg-[#073694] transition-colors inline-block text-center"
                >
                  {h.hero.btnDiscuss}
                </Link>
                <Link 
                  href="/portfolio" 
                  className="bg-transparent border border-[#0942b2] text-[#0942b2] px-8 py-3.5 2xl:px-10 2xl:py-4 rounded-md font-semibold text-[16px] 2xl:text-[18px] hover:bg-[#0942b2]/5 transition-colors inline-block text-center"
                >
                  {h.hero.btnCases}
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} direction="right">
              <div className="relative flex justify-center lg:justify-end">
                <Image
                  src="/images/hero-illustration.svg"
                  alt="Hero illustration"
                  width={800}
                  height={650}
                  priority
                  className="w-full max-w-[600px] 2xl:max-w-[800px] h-auto object-contain"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. EXPERTISE SECTION - Убрали min-h-screen */}
      <section className="w-full bg-[#f8fafc] relative py-16 md:py-24 2xl:py-32">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-14 2xl:mb-20">
            <FadeIn>
              <h2 className="text-[36px] md:text-[48px] 2xl:text-[60px] font-normal leading-[1.1] tracking-tight text-[#191c1e]">
                {h.expertise.tag}
                <br />
                <span className="text-[#0942b2]">{h.expertise.tagBlue}</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[16px] md:text-[18px] 2xl:text-[20px] text-[#6b7280] leading-relaxed max-w-[400px] 2xl:max-w-[500px]">
                {h.expertise.description}
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 2xl:gap-12">
            {[
              {
                icon: "/images/fintech.svg",
                title: h.expertise.fintech.title,
                desc: h.expertise.fintech.desc,
              },
              {
                icon: "/images/govtech.svg",
                title: h.expertise.govtech.title,
                desc: h.expertise.govtech.desc,
              },
              {
                icon: "/images/medtech.svg",
                title: h.expertise.medtech.title,
                desc: h.expertise.medtech.desc,
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1} className="h-full">
                {/* Добавляем класс group, чтобы дочерние элементы знали, когда мы навели мышку на карточку */}
                <div
                  className="group rounded-2xl p-8 lg:p-10 2xl:p-14 h-full flex flex-col bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-[#0942b2] hover:border-[#0942b2]"
                >
                  <div className="mb-6 2xl:mb-8">
                    <Image 
                      src={card.icon} 
                      alt={card.title} 
                      width={48} 
                      height={48} 
                      // Фильтры сделают иконку белой при наведении на карточку
                      className="w-[40px] 2xl:w-[56px] h-auto transition-all duration-300 group-hover:brightness-0 group-hover:invert" 
                    />
                  </div>
                  <h3
                    className="text-[22px] lg:text-[24px] 2xl:text-[32px] font-bold mb-4 2xl:mb-6 text-[#191c1e] transition-colors duration-300 group-hover:text-white"
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[15px] lg:text-[16px] 2xl:text-[18px] leading-relaxed mt-auto text-[#6b7280] transition-colors duration-300 group-hover:text-white/85"
                  >
                    {card.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FULL CYCLE SECTION - Убрали min-h-screen */}
      <section className="w-full bg-white relative py-16 md:py-24 2xl:py-32">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 2xl:gap-24 items-center">
            <FadeIn direction="left">
              <h2 className="text-[36px] md:text-[48px] 2xl:text-[60px] font-normal leading-[1.1] tracking-tight text-[#191c1e]">
                {h.cycle.title1}{" "}
                <br className="hidden sm:block" />
                <span className="text-[#0942b2]">{h.cycle.title2}</span>
                <br className="hidden sm:block" />
                {h.cycle.title3}
              </h2>
              <p className="mt-6 text-[16px] md:text-[18px] 2xl:text-[22px] text-[#6b7280] leading-relaxed max-w-[480px] 2xl:max-w-[600px]">
                {h.cycle.subtitle}
              </p>

              <div className="mt-12 2xl:mt-16 space-y-8 2xl:space-y-12">
                {[
                  { num: "01", title: h.cycle.step1title, desc: h.cycle.step1desc },
                  { num: "02", title: h.cycle.step2title, desc: h.cycle.step2desc },
                  { num: "03", title: h.cycle.step3title, desc: h.cycle.step3desc },
                ].map((step, i) => (
                  <FadeIn key={step.num} delay={0.1 + i * 0.1}>
                    <div className="flex gap-6 2xl:gap-8 items-start">
  {/* Уменьшили размер текста и ширину блока на ~30% */}
  <span 
    className="text-[32px] md:text-[40px] 2xl:text-[50px] text-[#c3c6d8] w-12 md:w-16 2xl:w-20 flex-shrink-0 leading-none"
    style={{ fontFamily: 'var(--font-heading)' }}
  >
    {step.num}
  </span>
  
  {/* Немного уменьшили pt (padding-top), чтобы текст не съехал вниз */}
  <div className="pt-1 md:pt-1.5 2xl:pt-2">
    <h4 className="font-sans font-semibold text-[20px] lg:text-[22px] 2xl:text-[28px] text-[#191c1e] tracking-normal">
      {step.title}
    </h4>
    <p className="text-[15px] lg:text-[16px] 2xl:text-[18px] text-[#6b7280] mt-2 2xl:mt-3 leading-relaxed max-w-[420px] 2xl:max-w-[550px]">
      {step.desc}
    </p>
  </div>
</div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/images/cycle.svg"
                  alt="IT product cycle"
                  width={750}
                  height={650}
                  className="w-full max-w-[560px] 2xl:max-w-[750px] h-auto object-contain"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="w-full bg-[#0942b2] py-16 md:py-24 2xl:py-32 relative">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <h2 className="text-[36px] md:text-[48px] 2xl:text-[60px] font-normal leading-[1.1] tracking-tight text-white">
                {h.cta.title1}
                <br />
                {h.cta.title2}
                <br />
                {h.cta.title3}
              </h2>
              <p className="mt-6 text-[16px] md:text-[18px] 2xl:text-[22px] text-white/80 leading-relaxed max-w-[480px] 2xl:max-w-[600px]">
                {h.cta.subtitle}
              </p>
              
              <div className="mt-10 2xl:mt-14 p-6 2xl:p-8 bg-white/10 rounded-xl inline-block backdrop-blur-sm">
                 <p className="text-[13px] 2xl:text-[15px] text-white/60 mb-2 uppercase tracking-wider font-semibold">Пишите нам</p>
                 <a
                  href={`mailto:${h.cta.email}`}
                  className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-[20px] lg:text-[24px] 2xl:text-[32px] font-bold">{h.cta.email}</span>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 sm:p-10 2xl:p-14 shadow-2xl w-full max-w-[500px] 2xl:max-w-[600px] mx-auto lg:mr-0 lg:ml-auto">
                <ContactForm source="home-cta" showMessageField darkBg={false} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}