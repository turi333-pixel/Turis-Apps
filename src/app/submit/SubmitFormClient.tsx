"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Send, CheckCircle2, Loader2 } from "lucide-react";
import { allCategories } from "@/lib/apps-data";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { TranslationKey } from "@/lib/i18n/translations";

const ADMIN_PASSWORD = "turi2024";

export function SubmitFormClient() {
    const { t } = useLanguage();
    const [authenticated, setAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const [form, setForm] = useState({
        name: "",
        shortDescription: "",
        longDescription: "",
        category: "",
        launchUrl: "",
        screenshotUrl: "",
        tags: "",
    });

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setAuthenticated(true);
            setPasswordError(false);
        } else {
            setPasswordError(true);
        }
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitError(null);

        const slug = form.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

        const tagsArray = form.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean);

        const { error } = await supabase.from("apps").insert({
            slug,
            name: form.name,
            short_description: form.shortDescription,
            long_description: form.longDescription,
            categories: [form.category],
            launch_url: form.launchUrl,
            screenshot_url: form.screenshotUrl || null,
            tags: tagsArray,
        });

        setSubmitting(false);

        if (error) {
            console.error("Supabase insert error:", error);
            setSubmitError(error.message);
            return;
        }

        setSubmitted(true);
    };

    const inputClass =
        "w-full px-4 py-3 text-sm rounded-xl glass bg-surface border-none outline-none focus:ring-2 focus:ring-accent/30 transition-all placeholder:text-muted";

    // Password gate
    if (!authenticated) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md glass rounded-[var(--radius-card)] p-8 text-center"
                >
                    <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
                        <Lock className="w-6 h-6 text-accent" />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">{t("submit.title")}</h1>
                    <p className="text-sm text-muted mb-6">
                        {t("submit.subtitle")}
                    </p>
                    <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={t("submit.passwordPlaceholder")}
                            className={inputClass}
                            autoFocus
                        />
                        {passwordError && (
                            <p className="text-sm text-red-400">{t("delete.incorrect")}</p>
                        )}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all cursor-pointer"
                        >
                            {t("submit.unlock")}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    // Success state
    if (submitted) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md glass rounded-[var(--radius-card)] p-8 text-center"
                >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{t("submit.successTitle")}</h2>
                    <p className="text-sm text-muted mb-6">
                        {t("submit.successDesc")}
                    </p>
                    <a
                        href="/"
                        className="inline-block px-6 py-3 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all"
                    >
                        {t("submit.successButton")}
                    </a>
                </motion.div>
            </div>
        );
    }

    // Form
    return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
                    {t("submit.formTitle")}
                </h1>
                <p className="text-muted mb-10">
                    {t("submit.subtitle")}
                </p>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                    {/* App Name */}
                    <div>
                        <label className="block text-sm font-medium mb-2">{t("submit.appName")} *</label>
                        <input
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="e.g. My AI Tool"
                            className={inputClass}
                        />
                    </div>

                    {/* Short Description */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            {t("submit.shortDescription")} *
                        </label>
                        <input
                            required
                            value={form.shortDescription}
                            onChange={(e) =>
                                setForm({ ...form, shortDescription: e.target.value })
                            }
                            placeholder={t("submit.shortDescPlaceholder")}
                            className={inputClass}
                        />
                    </div>

                    {/* Long Description */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            {t("submit.longDescription")} *
                        </label>
                        <textarea
                            required
                            rows={4}
                            value={form.longDescription}
                            onChange={(e) =>
                                setForm({ ...form, longDescription: e.target.value })
                            }
                            placeholder={t("submit.shortDescPlaceholder")}
                            className={`${inputClass} resize-none`}
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            {t("submit.category")} *
                        </label>
                        <select
                            required
                            value={form.category}
                            onChange={(e) => setForm({ ...form, category: e.target.value })}
                            className={inputClass}
                        >
                            <option value="">{t("submit.category")}</option>
                            {allCategories
                                .filter((c) => c !== "All")
                                .map((cat) => (
                                    <option key={cat} value={cat}>
                                        {t(`cat.${cat}` as TranslationKey)}
                                    </option>
                                ))}
                        </select>
                    </div>

                    {/* Launch URL */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            {t("submit.launchUrl")} *
                        </label>
                        <input
                            required
                            type="url"
                            value={form.launchUrl}
                            onChange={(e) => setForm({ ...form, launchUrl: e.target.value })}
                            placeholder="https://..."
                            className={inputClass}
                        />
                    </div>

                    {/* Screenshot URL */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            {t("submit.screenshotUrl")}
                        </label>
                        <input
                            type="url"
                            value={form.screenshotUrl}
                            onChange={(e) =>
                                setForm({ ...form, screenshotUrl: e.target.value })
                            }
                            placeholder={t("submit.screenshotPlaceholder")}
                            className={inputClass}
                        />
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            {t("submit.tags")}
                        </label>
                        <input
                            value={form.tags}
                            onChange={(e) => setForm({ ...form, tags: e.target.value })}
                            placeholder={t("submit.tagsPlaceholder")}
                            className={inputClass}
                        />
                    </div>

                    {/* Submit */}
                    {submitError && (
                        <p className="text-sm text-red-400 text-center">{submitError}</p>
                    )}

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25 cursor-pointer mt-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {submitting ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                {t("submit.submitting")}
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4" />
                                {t("submit.submitButton")}
                            </>
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
