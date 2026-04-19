"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import en from "@/data/en.json";
import ka from "@/data/ka.json";

type Locale = "en" | "ka";
type Translations = typeof en;

const translationsMap: Record<Locale, Translations> = {
  en,
  ka,
};

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  switchLanguage: (lang: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LOCAL_STORAGE_KEY = "app-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale | null>(null);
  const [t, setT] = useState<Translations>(en);

  useEffect(() => {
    const savedLocale = localStorage.getItem(
      LOCAL_STORAGE_KEY
    ) as Locale | null;

    const initialLocale: Locale =
      savedLocale && ["en", "ka"].includes(savedLocale) ? savedLocale : "en";

    setLocale(initialLocale);
    setT(translationsMap[initialLocale]);
  }, []);

  useEffect(() => {
    if (!locale) return;
    localStorage.setItem(LOCAL_STORAGE_KEY, locale);
    setT(translationsMap[locale]);
  }, [locale]);

  const switchLanguage = (lang: Locale) => {
    setLocale(lang);
  };

  const value: LanguageContextType | undefined =
    locale !== null
      ? {
          locale,
          t,
          switchLanguage,
        }
      : undefined;

  if (!value) return null;

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
