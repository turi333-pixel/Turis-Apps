"use client";

import { motion } from "framer-motion";
import { Sparkles, Github, Linkedin, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function AboutClient() {
    const { t } = useLanguage();

    return (
        <div className="relative min-h-screen">
            {/* Background gradient */}
            <div className="absolute inset-0 hero-gradient pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-accent/15 text-accent">
                            <Sparkles className="w-3 h-3" />
                            {t("about.badge")}
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
                        {t("about.builtBy")}
                        <span className="gradient-text">Arturo Ordieres</span>
                    </h1>

                    <div className="glass rounded-[var(--radius-card)] p-6 sm:p-8 mb-8">
                        <h2 className="text-xl font-bold mb-4">{t("about.h1")}</h2>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>{t("about.p1")}</p>
                            <p>{t("about.p2")}</p>
                            <p>{t("about.p3")}</p>
                        </div>
                    </div>

                    <div className="glass rounded-[var(--radius-card)] p-6 sm:p-8 mb-8">
                        <h2 className="text-xl font-bold mb-4">{t("about.h2")}</h2>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>{t("about.p4")}</p>
                            <p>{t("about.p5")}</p>
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-foreground hover:scale-110 transition-all"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-foreground hover:scale-110 transition-all"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="/"
                            className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-foreground hover:scale-110 transition-all"
                            aria-label="Website"
                        >
                            <Globe className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
