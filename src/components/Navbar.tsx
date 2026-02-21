"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Plus, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Language } from "@/lib/i18n/translations";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-xl font-bold tracking-tight gradient-text">
                            Turi Apps
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/"
                            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                        >
                            {t("nav.home")}
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                        >
                            {t("nav.about")}
                        </Link>
                        <div className="flex items-center bg-card border border-card-border rounded-full p-1 gap-1">
                            {(["en", "es", "de"] as Language[]).map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setLanguage(lang)}
                                    className={`w-8 h-8 rounded-full text-xs font-medium uppercase transition-colors ${language === lang
                                        ? "bg-accent text-white"
                                        : "text-muted hover:text-foreground hover:bg-surface"
                                        }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                        <ThemeToggle />
                        <Link
                            href="/submit"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
                        >
                            <Plus className="w-4 h-4" />
                            {t("nav.addApp")}
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <div className="flex items-center gap-3 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="w-9 h-9 rounded-full glass flex items-center justify-center cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <X className="w-4 h-4" />
                            ) : (
                                <Menu className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-16 left-0 right-0 md:hidden bg-background/95 backdrop-blur-3xl border-b border-card-border shadow-2xl z-40"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            <Link
                                href="/"
                                onClick={() => setMobileOpen(false)}
                                className="text-base font-medium text-foreground hover:bg-surface px-4 py-3 rounded-xl transition-colors"
                            >
                                {t("nav.home")}
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => setMobileOpen(false)}
                                className="text-base font-medium text-foreground hover:bg-surface px-4 py-3 rounded-xl transition-colors"
                            >
                                {t("nav.about")}
                            </Link>

                            {/* Mobile Language Switcher */}
                            <div className="flex items-center gap-2 px-4 py-2">
                                <Globe className="w-4 h-4 text-muted" />
                                <div className="flex gap-2">
                                    {(["en", "es", "de"] as Language[]).map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => setLanguage(lang)}
                                            className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-colors ${language === lang
                                                ? "bg-accent text-white"
                                                : "bg-surface text-muted hover:text-foreground"
                                                }`}
                                        >
                                            {lang}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-2 mt-2 border-t border-card-border">
                                <Link
                                    href="/submit"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-full text-base font-semibold bg-accent text-white hover:bg-accent-hover transition-all"
                                >
                                    <Plus className="w-5 h-5" />
                                    {t("nav.addApp")}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
