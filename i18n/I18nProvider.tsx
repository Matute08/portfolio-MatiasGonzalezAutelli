"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import es from "./es.json";
import en from "./en.json";

type Lang = "es" | "en";
type NestedDict = { [key: string]: string | NestedDict | string[] };

const translations: Record<Lang, NestedDict> = { es, en } as const;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  ta: (key: string) => string[];
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const resolve = useCallback(
    (key: string): unknown => {
      const keys = key.split(".");
      let value: unknown = translations[lang];
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = (value as NestedDict)[k];
        } else {
          return key;
        }
      }
      return value;
    },
    [lang]
  );

  const t = useCallback((key: string): string => {
    const v = resolve(key);
    if (Array.isArray(v)) return (v as string[]).join(", ");
    return typeof v === "string" ? v : key;
  }, [resolve]);

  const ta = useCallback((key: string): string[] => {
    const v = resolve(key);
    return Array.isArray(v) ? (v as string[]) : [String(v)];
  }, [resolve]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t, ta }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslations must be used within I18nProvider");
  }
  return context;
}
