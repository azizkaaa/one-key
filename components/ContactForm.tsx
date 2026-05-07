"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const buildSchema = (validation: {
  nameRequired: string;
  nameMin: string;
  phoneRequired: string;
  phoneInvalid: string;
  messageRequired: string;
  messageMin: string;
}) =>
  z.object({
    name: z
      .string()
      .min(1, validation.nameRequired)
      .min(2, validation.nameMin),
    phone: z
      .string()
      .min(1, validation.phoneRequired)
      .regex(/^\+?[0-9\s\-()]{7,20}$/, validation.phoneInvalid),
    message: z
      .string()
      .min(1, validation.messageRequired)
      .min(10, validation.messageMin),
  });

type FormData = { name: string; phone: string; message: string };

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

  const schema = buildSchema(t.validation);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const formLabels = labels ?? {
    name: t.form.name,
    namePlaceholder: t.form.namePlaceholder,
    phone: t.form.phone,
    phonePlaceholder: t.form.phonePlaceholder,
    message: t.form.project,
    messagePlaceholder: t.form.projectPlaceholder,
    submit: t.form.submit,
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

  // Новые стили для полей ввода (полная рамка, правильные отступы)
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

  // Новые стили для подписей (uppercase, нужный цвет)
  const labelClass = `uppercase text-[11px] font-bold tracking-wider mb-2 block ${
    darkBg ? "text-white/70" : "text-[#64748b]"
  }`;

  const errorClass = "text-[12px] text-red-500 mt-1.5 font-medium";

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
          {...register("phone")}
          placeholder={formLabels.phonePlaceholder}
          type="tel"
          // Запрещаем ввод букв (оставляем только цифры, плюс, скобки и дефис)
          onChange={(e) => {
            e.target.value = e.target.value.replace(/[^\d+()-\s]/g, "");
          }}
          className={inputClass(!!errors.phone)}
          autoComplete="tel"
          // Применяем Helvetica напрямую к инпуту номера телефона
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
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
        <input type="hidden" {...register("message")} value="Заявка с формы" />
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
        } disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {status === "loading" ? t.form.sending : formLabels.submit}
      </motion.button>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[14px] text-green-500 font-semibold text-center mt-4"
        >
          {t.form.success}
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[14px] text-red-500 font-semibold text-center mt-4"
        >
          {t.form.error}
        </motion.p>
      )}
    </form>
  );
}