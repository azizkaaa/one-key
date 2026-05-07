"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, defaultLocale, translations } from "@/lib/i18n";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[typeof defaultLocale];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && ["ru", "uz", "en"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
