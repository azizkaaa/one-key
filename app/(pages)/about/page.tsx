"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="w-full overflow-hidden flex flex-col items-center bg-white">
      {/* 1. HERO */}
      <section className="w-full pt-24 pb-16 md:pt-32 md:pb-24 2xl:pt-40 2xl:pb-32">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <FadeIn direction="left">
              <h1 
                className="text-[42px] sm:text-[52px] md:text-[64px] 2xl:text-[80px] font-normal leading-[1.05] tracking-tight text-[#191c1e]" 
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="block mb-1 md:mb-2">{a.hero.title1}</span>
                <div className="flex flex-wrap gap-x-3 md:gap-x-4">
                  <span className="text-[#0942b2] whitespace-nowrap">{a.hero.title2}</span>
                  <span className="whitespace-nowrap">{a.hero.title3}</span>
                </div>
              </h1>
              <p className="mt-8 text-[16px] md:text-[18px] 2xl:text-[22px] text-[#6b7280] leading-relaxed max-w-[500px] 2xl:max-w-[600px]">
                {a.hero.subtitle}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.15} direction="right">
              <div className="flex justify-center lg:justify-end relative">
                <Image
                  src="/images/about.svg"
                  alt="About illustration"
                  width={600}
                  height={500}
                  priority
                  className="w-full max-w-[500px] 2xl:max-w-[650px] h-auto object-contain"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


     {/* НАША КОМАНДА */}
     <section className="w-full bg-[#f8fafc] py-16 md:py-24 2xl:py-32">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          
          {/* Заголовок */}
          <FadeIn>
            <h2 className="text-[36px] md:text-[46px] 2xl:text-[56px] text-[#191c1e] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {a.team.title} {/* или t.team.title в зависимости от того, как ты передаешь */}
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-[#0942b2] mb-12 2xl:mb-16" />
          </FadeIn>

          {/* Карточки (Сетка) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 2xl:gap-8">
            {[
              {
                id: "backend",
                icon: "/images/builder.svg", // Проверь пути к иконкам
                data: a.team.backend,
              },
              {
                id: "frontend",
                icon: "/images/terminal.svg",
                data: a.team.frontend,
              },
              {
                id: "management",
                icon: "/images/manag.svg",
                data: a.team.management,
              },
            ].map((card, i) => (
              <FadeIn key={card.id} delay={i * 0.1} className="h-full">
                {/* Дизайн карточки как в Figma: верхняя синяя граница */}
                <div className="bg-white h-full border border-gray-100 border-t-[4px] border-t-[#0942b2] rounded-b-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 2xl:p-10">
                  
                  {/* Шапка карточки (Иконка + Заголовок) */}
                  <div className="flex items-center gap-4 mb-8 2xl:mb-10">
                    <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-[#eef2fa] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Image 
                        src={card.icon} 
                        alt={card.data.title} 
                        width={24} 
                        height={24} 
                        className="w-6 h-6 2xl:w-7 2xl:h-7 object-contain" 
                      />
                    </div>
                    <h3 className="text-[22px] 2xl:text-[26px] text-[#191c1e]" style={{ fontFamily: 'var(--font-heading)' }}>
                      {card.data.title}
                    </h3>
                  </div>

                  {/* Список ролей внутри карточки */}
                  <div className="space-y-6 2xl:space-y-8">
                    {card.data.roles.map((role: any, idx: number) => (
                      <div 
                        key={idx} 
                        // Добавляем легкую серую линию между элементами (кроме последнего)
                        className="border-b border-gray-100 pb-6 2xl:pb-8 last:border-0 last:pb-0"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-[16px] 2xl:text-[18px] text-[#191c1e] pr-2">
                            {role.name}
                          </h4>
                          <span className="text-[12px] 2xl:text-[13px] font-bold text-[#0942b2] whitespace-nowrap mt-1 uppercase tracking-wider">
                            {role.experience}
                          </span>
                        </div>
                        <p className="text-[14px] 2xl:text-[16px] text-[#6b7280] leading-relaxed">
                          {role.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>
      {/* 3. НАШИ ЦЕННОСТИ */}
      <section className="w-full bg-white py-16 md:py-24 2xl:py-32">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          <FadeIn>
            <h2 className="text-[32px] md:text-[42px] 2xl:text-[56px] font-normal text-[#191c1e] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {a.values.title}
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-[#0942b2] rounded-full mb-12 2xl:mb-16" />
          </FadeIn>

          {/* Умная сетка: на планшетах 2x2, на десктопах 12 колонок для асимметрии */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 2xl:gap-8">
            {[
              { key: "mission", data: a.values.mission, featured: false, icon: "/images/rocket.svg" },
              { key: "precision", data: a.values.precision, featured: true, icon: "/images/target.svg" },
              { key: "transparency", data: a.values.transparency, featured: false, icon: "/images/eye.svg" },
              { key: "innovation", data: a.values.innovation, featured: false, icon: "/images/blub.svg" },
            ].map((item, i) => {
              
              // Логика расположения блоков как в Figma
              const spanClass = 
                item.key === "mission" ? "md:col-span-1 lg:col-span-7 2xl:col-span-8" :
                item.key === "precision" ? "md:col-span-1 lg:col-span-5 2xl:col-span-4" :
                "md:col-span-1 lg:col-span-6"; // Для прозрачности и инноваций (50/50)

              return (
                <FadeIn key={item.key} delay={i * 0.1} className={spanClass}>
                  <div
                    className={`rounded-2xl p-8 lg:p-10 2xl:p-14 h-full border ${
                      item.featured 
                        ? "bg-[#0942b2] text-white border-[#0942b2] shadow-lg" 
                        : "bg-[#f8fafc] text-[#191c1e] border-gray-100 hover:shadow-md transition-shadow"
                    }`}
                  >
                    {/* Твоя оригинальная иконка со стилями */}
                    <div className={`w-12 h-12 2xl:w-14 2xl:h-14 mb-8 rounded-xl flex items-center justify-center ${
                      item.featured ? "bg-white/10" : "bg-white shadow-sm border border-gray-50"
                    }`}>
                      <Image 
                        src={item.icon} 
                        alt={item.data.title} 
                        width={28} 
                        height={28} 
                        className={`w-7 h-7 2xl:w-8 2xl:h-8 object-contain ${item.featured ? "brightness-0 invert" : ""}`} 
                      />
                    </div>
                    
                    <h3 className="text-[24px] 2xl:text-[32px] font-normal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.data.title}
                    </h3>
                    <p className={`text-[15px] 2xl:text-[18px] leading-relaxed ${
                      item.featured ? "text-white/80" : "text-[#6b7280]"
                    }`}>
                      {item.data.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. АРХИТЕКТУРА ДОВЕРИЯ */}
      <section className="w-full bg-[#f8fafc] py-16 md:py-24 2xl:py-32">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <FadeIn direction="left" className="order-last lg:order-first">
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/images/hero-illustration.svg"
                  alt="Architecture illustration"
                  width={600}
                  height={500}
                  className="w-full max-w-[500px] 2xl:max-w-[650px] object-contain"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.15} direction="right">
              <h2 className="text-[32px] md:text-[42px] 2xl:text-[56px] font-normal text-[#191c1e] mb-10 2xl:mb-14" style={{ fontFamily: 'var(--font-heading)' }}>
                {a.architecture.title}
              </h2>
              <div className="space-y-8 2xl:space-y-10">
                {[
                  { icon: "/images/people.svg", data: a.architecture.culture },
                  { icon: "/images/block.svg", data: a.architecture.security },
                  { icon: "/images/progress.svg", data: a.architecture.scalability },
                ].map((item) => (
                  <div key={item.data.title} className="flex gap-5 2xl:gap-6 items-start">
                    {/* Контейнер для иконки с легким синим фоном как в фигме */}
                    <div className="w-12 h-12 2xl:w-16 2xl:h-16 bg-[#eef2fa] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Image src={item.icon} alt="icon" width={28} height={28} className="w-6 h-6 2xl:w-8 2xl:h-8 object-contain" />
                    </div>
                    <div>
                    <h4 
  className="font-bold text-[18px] 2xl:text-[22px] text-[#191c1e] mb-2" 
  style={{ fontFamily: 'Raleway, sans-serif' }}
>
  {item.data.title}
</h4>
                      <p className="text-[15px] 2xl:text-[17px] text-[#6b7280] leading-relaxed max-w-[450px]">
                        {item.data.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="w-full bg-[#0942b2] py-16 md:py-24 2xl:py-32">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12 text-center">
          <FadeIn>
            <h2 className="text-[36px] md:text-[48px] 2xl:text-[64px] font-normal text-white leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              {a.cta.title}
            </h2>
            <p className="text-[16px] md:text-[18px] 2xl:text-[22px] text-white/80 leading-relaxed max-w-[600px] 2xl:max-w-[700px] mx-auto mb-10">
              {a.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                href="/contacts#contact-form" 
                className="w-full sm:w-auto bg-white text-[#0942b2] px-10 py-4 rounded-md font-bold text-[16px] 2xl:text-[18px] hover:bg-gray-100 transition-all active:scale-95 text-center"
              >
                {a.cta.btn1}
              </Link>
              <Link 
                href="/portfolio" 
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 py-3.5 rounded-md font-bold text-[16px] 2xl:text-[18px] hover:bg-white hover:text-[#0942b2] transition-all active:scale-95 text-center"
              >
                {a.cta.btn2}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}