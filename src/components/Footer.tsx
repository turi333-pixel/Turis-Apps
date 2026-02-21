"use client";

import { Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-card-border mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold gradient-text mb-2">Turi Apps</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            {t("footer.desc")}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-3">{t("footer.links")}</h4>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a
                                    href="/"
                                    className="text-sm text-muted hover:text-foreground transition-colors"
                                >
                                    {t("nav.home")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="text-sm text-muted hover:text-foreground transition-colors"
                                >
                                    {t("nav.about")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/submit"
                                    className="text-sm text-muted hover:text-foreground transition-colors"
                                >
                                    {t("nav.addApp")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-semibold mb-3">{t("footer.stayUpdated")}</h4>
                        <p className="text-sm text-muted mb-3">
                            {t("footer.newsletterDesc")}
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex gap-2"
                        >
                            <input
                                type="email"
                                placeholder={t("footer.placeholder")}
                                className="flex-1 px-3 py-2 text-sm rounded-lg glass bg-surface border-none outline-none focus:ring-2 focus:ring-accent/30 transition-all placeholder:text-muted"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-all cursor-pointer"
                            >
                                {t("footer.subscribe")}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-10 pt-6 border-t border-card-border gap-4">
                    <p className="text-xs text-muted">
                        © {new Date().getFullYear()} Turi Apps · {t("footer.builtBy")}
                    </p>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-foreground transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
