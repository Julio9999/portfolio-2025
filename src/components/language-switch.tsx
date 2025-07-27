"use client";
import { useState } from "react";
import { useCommonContext } from "@/context/common-context";

export const LanguageSwitch = () => {
  const { language, toggleLanguage } = useCommonContext();
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: "es" | "en") => {
    if (lang !== language) toggleLanguage();
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-20">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex justify-center w-20 items-center rounded-md bg-white/5 hover:bg-white/10 px-4 py-2 text-sm font-medium  transition cursor-pointer"
      >
        {language.toUpperCase()}
        <svg
          className="ml-2 h-4 w-4 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.586l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute md:right-0  z-20  w-28 origin-top-right rounded-md purple-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 text-sm">
            <button
              onClick={() => handleSelect("en")}
              className={`block w-full text-left px-4 py-2 cursor-pointer hover:bg-white/10`}
            >
              English
            </button>
            <button
              onClick={() => handleSelect("es")}
              className={`block w-full text-left px-4 py-2 cursor-pointer hover:bg-white/10`}
            >
              Español
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
