"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, Language, TranslationKey } from "./translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Load preference from local storage on mount
        const saved = localStorage.getItem("turi_language") as Language;
        if (saved && (saved === "en" || saved === "es" || saved === "de")) {
            setLanguageState(saved);
        }
        setMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("turi_language", lang);
    };

    const t = (key: TranslationKey): string => {
        // Handle nested keys like "hero.title" if needed, 
        // but a flat dictionary is easier for TS typing
        return translations[language]?.[key] || translations["en"][key] || key;
    };

    // Prevent hydration mismatch by not rendering until we know the language
    // (Alternatively, default to EN on server, let client hydrate to EN, then swap. We'll do the latter for better SEO/LCP)

    if (!mounted) {
        // Return un-localized version on first render to match SSR
        const tSSR = (key: TranslationKey) => translations["en"][key] || key;
        return (
            <LanguageContext.Provider value={{ language: "en", setLanguage, t: tSSR }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
