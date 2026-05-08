"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Обновленная схема: убрали лимит сообщения, добавили направление
const buildSchema = (validation: any) =>
  z.object({
    name: z
      .string()
      .min(1, validation.nameRequired || "Введите имя")
      .min(2, validation.nameMin || "Минимум 2 символа"),
    phone: z
      .string()
      .min(1, validation.phoneRequired || "Введите телефон")
      .regex(/^\+?[0-9\s\-()]{7,20}$/, validation.phoneInvalid || "Неверный формат"),
    message: z.string().optional().or(z.literal("")), // Сделали необязательным
    industry: z.string().min(1, "Пожалуйста, выберите направление"), // Новое поле
  });

  type FormData = { name: string; phone: string; message?: string; industry: string };

interface ContactFormProps {
  source?: string;
  darkBg?: boolean;
  showMessageField?: boolean;
  labels?: {
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    message?: string;
    messagePlaceholder?: string;
    submit: string;
    industry?: string;
  };
}

export default function ContactForm({
  source = "website",
  darkBg = false,
  showMessageField = false,
  labels,
}: ContactFormProps) {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const schema = buildSchema(t.validation || {});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const formLabels = labels ?? {
    name: t.form?.name || "ИМЯ",
    namePlaceholder: t.form?.namePlaceholder || "Иван Иванов",
    phone: t.form?.phone || "ТЕЛЕФОН",
    phonePlaceholder: t.form?.phonePlaceholder || "+998 90-000-00-00",
    message: t.form?.project || "СООБЩЕНИЕ",
    messagePlaceholder: t.form?.projectPlaceholder || "Расскажите о проекте...",
    submit: t.form?.submit || "ОТПРАВИТЬ ЗАПРОС",
    industry: "НАПРАВЛЕНИЕ",
  };

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full border rounded-md px-4 py-3.5 text-[15px] outline-none transition-all duration-200 ${
      darkBg
        ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white focus:ring-1 focus:ring-white"
        : "bg-white text-[#191c1e] placeholder:text-[#9ca3af] focus:ring-1"
    } ${
      hasError
        ? "border-red-400 focus:border-red-500 focus:ring-red-500"
        : darkBg
        ? ""
        : "border-gray-200 focus:border-[#0942b2] focus:ring-[#0942b2]"
    }`;

  const labelClass = `uppercase text-[11px] font-bold tracking-wider mb-2 block ${
    darkBg ? "text-white/70" : "text-[#64748b]"
  }`;

  const errorClass = "text-[12px] text-red-500 mt-1.5 font-medium";

  // Иконка стрелочки для селекта (белая для темной темы, серая для светлой)
  const selectArrowColor = darkBg ? "%23ffffff" : "%236b7280";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div>
        <label className={labelClass}>{formLabels.name}</label>
        <input
          {...register("name")}
          placeholder={formLabels.namePlaceholder}
          className={inputClass(!!errors.name)}
          autoComplete="name"
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div>
        <label className={labelClass}>{formLabels.phone}</label>
        <input
          {...register("phone", {
            onChange: (e) => {
              let val = e.target.value.replace(/[^\d]/g, ""); 
              if (!val) {
                e.target.value = "";
                return;
              }
              if (!val.startsWith("998")) val = "998" + val;
              val = val.substring(0, 12);
              
              let formatted = "+998";
              if (val.length > 3) formatted += " " + val.substring(3, 5);
              if (val.length > 5) formatted += "-" + val.substring(5, 8);
              if (val.length > 8) formatted += "-" + val.substring(8, 10);
              if (val.length > 10) formatted += "-" + val.substring(10, 12);
              
              e.target.value = formatted; 
            }
          })}
          placeholder={formLabels.phonePlaceholder}
          type="tel"
          maxLength={17}
          className={inputClass(!!errors.phone)}
          autoComplete="tel"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      {/* НОВОЕ ПОЛЕ: Направление */}
      <div>
        <label className={labelClass}>{formLabels.industry}</label>
        <select
          {...register("industry")}
          className={`${inputClass(!!errors.industry)} appearance-none cursor-pointer`}
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20stroke%3D%22${selectArrowColor}%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
            backgroundSize: "1.2em 1.2em",
            paddingRight: "2.5rem"
          }}
        >
          <option value="" disabled selected hidden>Выберите из списка...</option>
          <option value="B2B / Промышленность" className="text-black">B2B / Промышленность</option>
          <option value="Образование" className="text-black">Образование</option>
          <option value="Банки / Финтех" className="text-black">Банки / Финтех</option>
          <option value="Медицина" className="text-black">Медицина</option>
          <option value="Госсектор" className="text-black">Государственный сектор</option>
          <option value="Другое" className="text-black">Другое</option>
        </select>
        {errors.industry && <p className={errorClass}>{errors.industry.message}</p>}
      </div>

      {showMessageField && (
        <div>
          <label className={labelClass}>{formLabels.message}</label>
          <textarea
            {...register("message")}
            placeholder={formLabels.messagePlaceholder}
            rows={4}
            className={`${inputClass(!!errors.message)} resize-none`}
          />
          {errors.message && (
            <p className={errorClass}>{errors.message.message}</p>
          )}
        </div>
      )}

      {!showMessageField && (
        <input type="hidden" {...register("message")} value="Заявка с компактной формы" />
      )}

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`w-full py-4 mt-2 font-bold text-[15px] tracking-wide rounded-md transition-all ${
          darkBg
            ? "bg-white text-[#0942b2] hover:bg-gray-100"
            : "bg-[#0942b2] text-white hover:bg-[#0735a0]"
        } disabled:opacity-70 disabled:cursor-not-allowed uppercase`}
      >
        {status === "loading" ? (t.form?.sending || "ОТПРАВКА...") : formLabels.submit}
      </motion.button>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[14px] text-green-500 font-semibold text-center mt-4"
        >
          {t.form?.success || "Заявка успешно отправлена!"}
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[14px] text-red-500 font-semibold text-center mt-4"
        >
          {t.form?.error || "Произошла ошибка. Попробуйте еще раз."}
        </motion.p>
      )}
    </form>
  );
}