"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "es" | "en";

interface CommonContextProps {
  language: Language;
  toggleLanguage: () => void;
}

const CommonContext = createContext<CommonContextProps | undefined>(undefined);

export const useCommonContext = () => {
  const context = useContext(CommonContext);
  if (!context) throw new Error("useCommonContext must be used within LanguageProvider");
  return context;
};

export const CommonProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0]; // "es" de "es-ES"
    if (browserLang === "en" || browserLang === "es") {
      setLanguage(browserLang as Language);
    } else {
      setLanguage("es"); // fallback
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <CommonContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </CommonContext.Provider>
  );
};
