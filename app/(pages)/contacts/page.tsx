"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import FadeIn from "@/components/FadeIn";

const buildSchema = (v: any) =>
  z.object({
    name: z.string().min(1, v.nameRequired || "Введите имя").min(2, v.nameMin || "Минимум 2 символа"),
    phone: z
      .string()
      .min(1, v.phoneRequired || "Введите телефон")
      .regex(/^\+?[0-9\s\-()]{7,20}$/, v.phoneInvalid || "Неверный формат"),
    message: z.string().optional().or(z.literal("")), // Сделали необязательным
    industry: z.string().min(1, "Пожалуйста, выберите направление"), // Новое поле
  });

// ДОБАВИЛИ знак вопроса к message и поле industry
type FormData = { name: string; phone: string; message?: string; industry: string };

export default function ContactsPage() {
  const { t } = useLanguage();
  const c = t.contacts;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const schema = buildSchema(t.validation);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "contacts-page" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  // Стили для инпутов "только нижняя линия"
  const labelClass = "text-[11px] 2xl:text-[12px] font-bold tracking-widest text-[#6b7280] uppercase mb-2 block";
  const inputBaseClass = "w-full bg-transparent border-b-2 py-3 text-[15px] 2xl:text-[17px] text-[#191c1e] placeholder-[#9ca3af] focus:outline-none transition-colors rounded-none";
  const inputClass = (err: boolean) => 
    `${inputBaseClass} ${err ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-[#0942b2]"}`;

  return (
    <div className="w-full overflow-hidden flex flex-col items-center bg-white">
      {/* 1. HERO */}
      <section className="w-full bg-[#f8fafc] pt-24 pb-16 md:pt-32 md:pb-24 2xl:pt-40 2xl:pb-32">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            <FadeIn direction="left">
              <h1 
                className="text-[42px] sm:text-[52px] md:text-[64px] 2xl:text-[80px] font-normal leading-[1.05] tracking-tight text-[#191c1e] mb-8"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="block mb-2">{c.hero.title1}</span>
                <span className="text-[#0942b2] block mb-2">{c.hero.title2}</span>
                <span className="block">{c.hero.title3}</span>
              </h1>
              <p className="text-[16px] md:text-[18px] 2xl:text-[22px] text-[#6b7280] leading-relaxed max-w-[480px]">
                {c.hero.subtitle}
              </p>
            </FadeIn>

            {/* Карточки контактов */}
            <FadeIn delay={0.1} direction="right" className="lg:pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 2xl:gap-6">
                
                {/* Email */}
                <div className="bg-white rounded-2xl p-8 2xl:p-10 shadow-sm">
                  <div className="text-[#0942b2] mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <p className="text-[11px] 2xl:text-[12px] font-bold tracking-widest text-[#6b7280] uppercase mb-2">
                    {c.info.email}
                  </p>
                  <a href="mailto:info@onekeytech.uz" className="text-[16px] 2xl:text-[18px] font-bold text-[#191c1e] hover:text-[#0942b2] transition-colors">
                  info@onekeytech.uz
                  </a>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-2xl p-8 2xl:p-10 shadow-sm">
                  <div className="text-[#0942b2] mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.19h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.88-1.88a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <p className="text-[11px] 2xl:text-[12px] font-bold tracking-widest text-[#6b7280] uppercase mb-2">
                    {c.info.phone}
                  </p>
                  {/* Шрифт Helvetica применен ко всему номеру телефона */}
                  <a 
                    href="tel:+998998283136" 
                    className="text-[16px] 2xl:text-[18px] font-bold text-[#191c1e] hover:text-[#0942b2] transition-colors"
                    style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                  >
                    +998 99 828 31 36
                  </a>
                </div>

                {/* Office (Темная карточка) */}
                <div className="sm:col-span-2 bg-[#545a69] rounded-2xl p-8 md:p-10 2xl:p-12 text-white">
                  <div className="text-white mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="text-[11px] 2xl:text-[12px] font-bold tracking-widest text-white/70 uppercase mb-3">
                    {c.info.office}
                  </p>
                  <p className="text-[18px] 2xl:text-[22px] font-normal mb-2 tracking-wide">
                    {/* Вычленяем только цифры из адреса и применяем к ним Helvetica */}
                    {String(c.info.address).split(/(\d+)/).map((part, i) => 
                      /\d/.test(part) ? <span key={i} style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{part}</span> : part
                    )}
                  </p>
                  <p className="text-[14px] 2xl:text-[16px] text-white/60">
                    {/* Вычленяем только цифры из часов работы и применяем к ним Helvetica */}
                    {String(c.info.hours).split(/(\d+)/).map((part, i) => 
                      /\d/.test(part) ? <span key={i} style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{part}</span> : part
                    )}
                  </p>
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. MAP + FORM */}
      <section className="w-full bg-white py-16 md:py-24 2xl:py-32 scroll-mt-20 md:scroll-mt-24">
        <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Map */}
            <FadeIn direction="left" className="h-full">
              <div className="relative rounded-2xl overflow-hidden h-[450px] md:h-[600px] lg:h-full bg-[#e8edf5]">
             <iframe
  title="One Key Technologies Office"
  src="https://maps.google.com/maps?q=41.321363,69.286768&hl=ru&z=16&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-2xl absolute inset-0"
/>
                
                {/* Плашка на карте */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl px-6 py-5 max-w-[260px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 bg-[#0942b2] rounded-full" />
                    <span className="text-[11px] font-bold text-[#0942b2] tracking-widest uppercase">
                      Главный офис
                    </span>
                  </div>
                  <p className="text-[16px] font-bold text-[#191c1e] mb-1">One Key Technologies</p>
                  <p className="text-[12px] text-[#6b7280]">Центр инноваций и разработки ПО</p>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.15} direction="right">
              <div id="contact-form" className="bg-[#f8fafc] rounded-2xl p-8 md:p-12 2xl:p-16">
                <h2 
                  className="text-[32px] md:text-[40px] 2xl:text-[48px] font-normal text-[#191c1e] mb-10"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {c.form.title}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8 2xl:space-y-10">
                  <div>
                    <label className={labelClass}>{c.form.name}</label>
                    <input
                      {...register("name")}
                      placeholder={c.form.namePlaceholder}
                      className={inputClass(!!errors.name)}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="text-[12px] text-red-500 mt-2">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>{c.form.phone}</label>
                    <input
                      {...register("phone", {
                        onChange: (e) => {
                          let val = e.target.value.replace(/[^\d]/g, ""); 
                          if (!val) {
                            e.target.value = "";
                            return;
                          }
                          if (!val.startsWith("998")) {
                             val = "998" + val;
                          }
                          val = val.substring(0, 12);
                          let formatted = "+998";
                          if (val.length > 3) formatted += " " + val.substring(3, 5);
                          if (val.length > 5) formatted += "-" + val.substring(5, 8);
                          if (val.length > 8) formatted += "-" + val.substring(8, 10);
                          if (val.length > 10) formatted += "-" + val.substring(10, 12);
                          
                          e.target.value = formatted; 
                        }
                      })}
                      placeholder="+998 90-000-00-00"
                      type="tel"
                      className={inputClass(!!errors.phone)}
                      autoComplete="tel"
                      maxLength={17}
                      style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                    />
                    {errors.phone && (
                      <p className="text-[12px] text-red-500 mt-2">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* НОВОЕ ПОЛЕ: Направление */}
                  <div>
                    <label className={labelClass}>ВЫБЕРИТЕ НАПРАВЛЕНИЕ</label>
                    <select
                      {...register("industry")}
                      className={`${inputClass(!!errors.industry)} appearance-none cursor-pointer`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.5rem center",
                        backgroundSize: "1.5em 1.5em",
                        paddingRight: "2.5rem"
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled hidden>Выберите из списка...</option>
                      <option value="B2B / Промышленность" className="text-black">B2B / Промышленность</option>
                      <option value="Образование" className="text-black">Образование</option>
                      <option value="Банки / Финтех" className="text-black">Банки / Финтех</option>
                      <option value="Медицина" className="text-black">Медицина</option>
                      <option value="Госсектор" className="text-black">Государственный сектор</option>
                      <option value="Другое" className="text-black">Другое</option>
                    </select>
                    {errors.industry && (
                      <p className="text-[12px] text-red-500 mt-2">{errors.industry.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>{c.form.message}</label>
                    <textarea
                      {...register("message")}
                      placeholder={c.form.messagePlaceholder}
                      rows={3}
                      className={`${inputClass(!!errors.message)} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[12px] text-red-500 mt-2">{errors.message.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-[#0942b2] text-white py-4 2xl:py-5 rounded font-bold text-[14px] 2xl:text-[15px] tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-[#0735a0] transition-colors disabled:opacity-60 shadow-lg shadow-blue-900/20 mt-4"
                  >
                    {status === "loading" ? c.form.sending : c.form.submit}
                    {status !== "loading" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </motion.button>

                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[15px] text-green-600 font-medium text-center"
                    >
                      {c.form.success}
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[15px] text-red-500 font-medium text-center"
                    >
                      {c.form.error}
                    </motion.p>
                  )}
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}