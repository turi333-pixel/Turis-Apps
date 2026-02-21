"use client";

import { motion } from "framer-motion";
import { allCategories } from "@/lib/apps-data";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { TranslationKey } from "@/lib/i18n/translations";

interface FilterBarProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
    const { t } = useLanguage();

    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {allCategories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onFilterChange(cat)}
                    className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer"
                >
                    {activeFilter === cat && (
                        <motion.div
                            layoutId="active-filter"
                            className="absolute inset-0 bg-accent rounded-full"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                    )}
                    <span
                        className={`relative z-10 ${activeFilter === cat ? "text-white" : "text-muted hover:text-foreground"
                            }`}
                    >
                        {t(`cat.${cat}` as TranslationKey)}
                    </span>
                </button>
            ))}
        </div>
    );
}
