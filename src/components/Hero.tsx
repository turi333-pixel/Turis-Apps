"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[50vh] flex items-center justify-center hero-gradient overflow-hidden pt-24 pb-12">
            {/* Animated dots / grid background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "32px 32px",
            }} />

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-6">
                        {t("hero.badge")}
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
                        {t("hero.title1")}{" "}
                        <span className="gradient-text">{t("hero.title2")}</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-8">
                        {t("hero.subtitle")}
                    </p>
                </motion.div>

                {/* Floating decorative orbs */}
                <motion.div
                    className="absolute -top-10 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
                    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </section>
    );
}
