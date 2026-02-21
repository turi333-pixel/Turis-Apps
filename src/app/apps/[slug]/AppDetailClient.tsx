"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Camera, Check, Trash2, X, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { App } from "@/lib/types";
import { supabase } from "@/lib/supabase";
import { CategoryBadge } from "@/components/CategoryBadge";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { TranslationKey } from "@/lib/i18n/translations";
import { getLocalizedSeedApps } from "@/lib/i18n/seedApps";

const ADMIN_PASSWORD = "turi2024";

export function AppDetailClient({ app: initialApp }: { app: App }) {
    const { t, language } = useLanguage();

    // Override with localized text if it's a seed app
    const app = getLocalizedSeedApps(language).find(a => a.id === initialApp.id) || initialApp;
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [submittingDelete, setSubmittingDelete] = useState(false);

    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordError(false);

        if (password !== ADMIN_PASSWORD) {
            setPasswordError(true);
            return;
        }

        setSubmittingDelete(true);

        const { error } = await supabase
            .from("apps")
            .delete()
            .eq("id", app.id);

        setSubmittingDelete(false);

        if (error) {
            console.error("Error deleting app:", error);
            alert("Failed to delete app: " + error.message);
            return;
        }

        router.push("/");
        router.refresh();
    };

    return (
        <div className="relative min-h-screen">
            {/* Background gradient */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${app.gradient} pointer-events-none`}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {t("detail.back")}
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="flex items-start gap-4 mb-6">
                        <span className="text-5xl" role="img" aria-label={app.name}>
                            {app.emoji}
                        </span>
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                                {app.name}
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                {app.categories.map((cat) => (
                                    <CategoryBadge key={cat} category={cat} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="glass rounded-[var(--radius-card)] p-6 sm:p-8 mb-8"
                >
                    <p className="text-lg leading-relaxed text-muted">
                        {app.longDescription}
                    </p>
                </motion.div>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="glass rounded-[var(--radius-card)] p-6 sm:p-8 mb-8"
                >
                    <h2 className="text-xl font-bold mb-4">{t("detail.keyFeatures")}</h2>
                    <ul className="space-y-3">
                        {app.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-accent" />
                                </span>
                                <span className="text-muted">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Screenshot placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="glass rounded-[var(--radius-card)] p-12 mb-8 flex flex-col items-center justify-center text-center"
                >
                    <Camera className="w-10 h-10 text-muted mb-3" />
                    <p className="text-sm text-muted">{t("detail.screenshot")}</p>
                </motion.div>

                {/* Launch button & Delete */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href={app.launchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-accent/25"
                    >
                        {t("detail.launch")}
                        <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                        onClick={() => setIsDeleting(true)}
                        className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-base font-medium text-red-400 bg-red-400/10 hover:bg-red-400/20 transition-all duration-200"
                    >
                        <Trash2 className="w-4 h-4" />
                        {t("detail.delete")}
                    </button>
                </motion.div>
            </div>

            {/* Delete Confirmation Modal */}
            <AnimatePresence>
                {isDeleting && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-background/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-card glass border border-card-border p-6 rounded-[var(--radius-card)] max-w-sm w-full relative"
                        >
                            <button
                                onClick={() => {
                                    setIsDeleting(false);
                                    setPassword("");
                                    setPasswordError(false);
                                }}
                                className="absolute right-4 top-4 text-muted hover:text-foreground transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <h3 className="text-xl font-bold mb-2">{t("delete.title")} {app.name}?</h3>
                            <p className="text-sm text-muted mb-6">
                                {t("delete.warning")}
                            </p>
                            <form onSubmit={handleDelete} className="flex flex-col gap-4">
                                <div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder={t("delete.placeholder")}
                                        className="w-full px-4 py-3 text-sm rounded-xl glass bg-surface border-none outline-none focus:ring-2 focus:ring-red-400/50 transition-all placeholder:text-muted"
                                        autoFocus
                                    />
                                    {passwordError && (
                                        <p className="mt-2 text-sm text-red-400">{t("delete.incorrect")}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={submittingDelete}
                                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-red-500 text-white hover:bg-red-600 transition-all disabled:opacity-50"
                                >
                                    {submittingDelete ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        t("delete.confirm")
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
