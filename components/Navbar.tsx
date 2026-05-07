"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/services", label: t.nav.services },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/about", label: t.nav.about },
    { href: "/contacts", label: t.nav.contacts },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2 2xl:py-3" 
          : "bg-white py-4 2xl:py-6"
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
        <nav className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/no_bg_dark.png"
              alt="One Key Technologies"
              width={200}
              height={50}
              className="h-9 md:h-10 2xl:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 2xl:gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                // Заменили цвет на #475569, поставили font-normal для Dela Gothic
                className={`text-[15px] 2xl:text-[17px] font-normal transition-all duration-200 relative group ${
                  isActive(link.href)
                    ? "text-[#0942b2]"
                    : "text-[#475569] hover:text-[#0942b2]"
                }`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-[#0942b2] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right side (Language Switcher + Button) */}
          <div className="hidden md:flex items-center gap-5 2xl:gap-7">
            
            {/* Elegant Language Switcher */}
            <div className="flex bg-[#f2f4f6] p-1 rounded-lg">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocale(loc as Locale)}
                  className={`px-3 py-1.5 text-[13px] 2xl:text-[15px] font-bold rounded-md transition-all duration-200 ${
                    locale === loc
                      ? "bg-white text-[#0942b2] shadow-sm"
                      : "text-[#6b7280] hover:text-[#191c1e]"
                  }`}
                >
                  {localeNames[loc as Locale]}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href="/contacts" 
              className="bg-[#0942b2] text-white px-7 py-3 2xl:px-8 2xl:py-3.5 rounded font-semibold text-[15px] 2xl:text-[17px] hover:bg-[#073694] transition-colors"
            >
              {t.nav.discuss}
            </Link>
          </div>

          {/* Mobile burger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-[#191c1e] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#191c1e] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#191c1e] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile menu dropdown */}
   
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }} // Легкое смещение сверху вниз вместо height: 0
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      // Исправленные классы: используем фиксированное положение от верхнего края
      className="lg:hidden fixed inset-0 z-[60] bg-white overflow-y-auto" 
      style={{ height: '100dvh' }} // Использование динамического vh для мобильных
    >
      {/* Кнопка закрытия внутри самого меню или повтор шапки для консистентности */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
         <Image src="/images/no_bg_dark.png" alt="Logo" width={140} height={35} className="h-8 w-auto object-contain" />
         <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center">
            {/* Иконка крестика */}
            <div className="relative w-6 h-6">
               <span className="absolute block w-6 h-[2px] bg-[#191c1e] rotate-45 top-1/2" />
               <span className="absolute block w-6 h-[2px] bg-[#191c1e] -rotate-45 top-1/2" />
            </div>
         </button>
      </div>

      <div className="px-5 py-8 flex flex-col gap-6">
        {/* Твой контент (ссылки, переключатель языка) */}
        <div className="flex flex-col gap-5">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)} // Обязательно закрываем по клику
                className={`block text-[24px] font-normal py-2 ${
                  isActive(link.href) ? "text-[#0942b2]" : "text-[#475569]"
                }`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* ... остальной код (языки и кнопка) ... */}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
}