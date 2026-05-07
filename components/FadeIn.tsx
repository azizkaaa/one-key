"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInProps) {
  const initial = {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
  };

  return (
    <motion.div
      initial={initial}
      // Анимация срабатывает напрямую в DOM, минуя React-ререндеры
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      // Настройки наблюдателя: один раз, за 60px до появления
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      // Опционально: подсказывает браузеру подготовить видеокарту для этих свойств
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}