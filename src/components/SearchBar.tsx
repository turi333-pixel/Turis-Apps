"use client";

import { Search } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
    const { t } = useLanguage();

    return (
        <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={t("grid.searchPlaceholder")}
                className="w-full pl-11 pr-4 py-3 text-sm rounded-xl glass bg-surface border-none outline-none focus:ring-2 focus:ring-accent/30 transition-all placeholder:text-muted"
            />
        </div>
    );
}
