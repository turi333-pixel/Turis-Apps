"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Camera, Check, Trash2, X, Loader2, Edit2, Lock, Save } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { App, Category } from "@/lib/types";
import { supabase } from "@/lib/supabase";
import { CategoryBadge } from "@/components/CategoryBadge";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { TranslationKey } from "@/lib/i18n/translations";
import { getLocalizedSeedApps } from "@/lib/i18n/seedApps";
import { allCategories } from "@/lib/apps-data";

const ADMIN_PASSWORD = "turi2024";

export function AppDetailClient({ app: initialApp }: { app: App }) {
    const { t, language } = useLanguage();

    const localizedSeedApps = getLocalizedSeedApps(language);
    const seedMatch = localizedSeedApps.find(a => a.id === initialApp.id);

    const app = seedMatch ? {
        ...initialApp,
        name: seedMatch.name,
        shortDescription: seedMatch.shortDescription,
        longDescription: seedMatch.longDescription,
        features: seedMatch.features || initialApp.features,
        tags: seedMatch.tags || initialApp.tags,
    } : initialApp;

    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isModifying, setIsModifying] = useState(false);
    const [modifyAuthenticated, setModifyAuthenticated] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const [submittingDelete, setSubmittingDelete] = useState(false);
    const [submittingModify, setSubmittingModify] = useState(false);
    const [modifyError, setModifyError] = useState<string | null>(null);

    const EMOJI_OPTIONS = ["🤖", "🎙", "👗", "🌊", "🍺", "🏍", "🎸", "🌱", "🌦", "⚓", "🔎", "⚡", "💡", "🚀", "🎯", "🛠", "✨", "🔥"];

    const [form, setForm] = useState({
        name: app.name,
        emoji: app.emoji || "🤖",
        shortDescription: app.shortDescription,
        longDescription: app.longDescription,
        category: app.categories[0] || "",
        launchUrl: app.launchUrl,
        screenshotUrl: app.screenshotUrl || "",
        tags: app.tags.join(", "),
    });

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

    const handleModifyPasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordError(false);

        if (password !== ADMIN_PASSWORD) {
            setPasswordError(true);
            return;
        }

        setModifyAuthenticated(true);
    };

    const handleModifySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittingModify(true);
        setModifyError(null);

        const tagsArray = form.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean);

        const { error } = await supabase
            .from("apps")
            .update({
                name: form.name,
                emoji: form.emoji,
                short_description: form.shortDescription,
                long_description: form.longDescription,
                categories: [form.category as Category],
                launch_url: form.launchUrl,
                screenshot_url: form.screenshotUrl || null,
                tags: tagsArray,
            })
            .eq("id", app.id);

        setSubmittingModify(false);

        if (error) {
            console.error("Supabase update error:", error);
            setModifyError(error.message);
            return;
        }

        setIsModifying(false);
        setModifyAuthenticated(false);
        setPassword("");
        window.location.reload(); // Hard reload to fetch new data since it's a Server Component wrapping this Client Component
    };

    const inputClass =
        "w-full px-4 py-3 text-sm rounded-xl glass bg-surface border-none outline-none focus:ring-2 focus:ring-accent/30 transition-all placeholder:text-muted";

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
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                        <div className="flex items-start gap-4">
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

                        <a
                            href={app.launchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-accent/25 shrink-0 w-full sm:w-auto"
                        >
                            {t("detail.launch")}
                            <ExternalLink className="w-4 h-4" />
                        </a>
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

                {/* Modify / Delete Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-center gap-4 mt-12 mb-8"
                >
                    <button
                        onClick={() => setIsModifying(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 transition-all duration-200"
                    >
                        <Edit2 className="w-4 h-4" />
                        {t("detail.modify" as TranslationKey)}
                    </button>
                    <button
                        onClick={() => setIsDeleting(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-red-400 bg-red-400/10 hover:bg-red-400/20 transition-all duration-200"
                    >
                        <Trash2 className="w-4 h-4" />
                        {t("detail.delete")}
                    </button>
                </motion.div>
            </div>

            {/* Delete Confirmation Modal */}
            <AnimatePresence>
                {isDeleting && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-background/80 backdrop-blur-sm">
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

                {isModifying && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-12 bg-background/80 backdrop-blur-sm overflow-y-auto">
                        <div className="min-h-full flex items-center justify-center w-full my-auto">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-card glass border border-card-border p-6 rounded-[var(--radius-card)] max-w-2xl w-full relative my-8"
                            >
                                <button
                                    onClick={() => {
                                        setIsModifying(false);
                                        setModifyAuthenticated(false);
                                        setPassword("");
                                        setPasswordError(false);
                                    }}
                                    className="absolute right-4 top-4 text-muted hover:text-foreground transition-colors z-10"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {!modifyAuthenticated ? (
                                    <div className="text-center py-8">
                                        <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
                                            <Lock className="w-6 h-6 text-accent" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{t("submit.title")}</h3>
                                        <p className="text-sm text-muted mb-6">
                                            {t("delete.warning")}
                                        </p>
                                        <form onSubmit={handleModifyPasswordSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
                                            <div>
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder={t("delete.placeholder")}
                                                    className={inputClass}
                                                    autoFocus
                                                />
                                                {passwordError && (
                                                    <p className="mt-2 text-sm text-red-400 text-left">{t("delete.incorrect")}</p>
                                                )}
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all"
                                            >
                                                {t("submit.unlock")}
                                            </button>
                                        </form>
                                    </div>
                                ) : (
                                    <div className="pt-4">
                                        <h3 className="text-2xl font-bold mb-6">{t("detail.modify" as TranslationKey)}: {app.name}</h3>
                                        <form onSubmit={handleModifySubmit} className="flex flex-col gap-6">
                                            {/* App Name */}
                                            <div>
                                                <label className="block text-sm font-medium mb-2">{t("submit.appName")} *</label>
                                                <input
                                                    required
                                                    value={form.name}
                                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                    className={inputClass}
                                                />
                                            </div>

                                            {/* Icon Selection */}
                                            <div>
                                                <label className="block text-sm font-medium mb-2">
                                                    {t("submit.emoji")} *
                                                </label>
                                                <div className="flex flex-wrap gap-2">
                                                    {EMOJI_OPTIONS.map((emoji) => (
                                                        <button
                                                            key={emoji}
                                                            type="button"
                                                            onClick={() => setForm({ ...form, emoji })}
                                                            className={`w-12 h-12 rounded-xl text-2xl flex items-center justify-center transition-all ${form.emoji === emoji
                                                                ? "bg-accent/20 scale-110 shadow-lg shadow-accent/10 border-2 border-accent"
                                                                : "glass bg-surface hover:bg-white/10 border-2 border-transparent"
                                                                }`}
                                                        >
                                                            {emoji}
                                                        </button>
                                                    ))}
                                                </div>
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
                                                    onChange={(e) => setForm({ ...form, category: e.target.value as Category })}
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
                                                    className={inputClass}
                                                />
                                            </div>

                                            {/* Submit */}
                                            {modifyError && (
                                                <p className="text-sm text-red-400 text-center">{modifyError}</p>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={submittingModify}
                                                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all duration-200 cursor-pointer mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                                            >
                                                {submittingModify ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                        Saving...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Save className="w-4 h-4" />
                                                        Save Changes
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
