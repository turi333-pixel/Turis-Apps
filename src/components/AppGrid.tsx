"use client";

import { useState, useMemo, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { App } from "@/lib/types";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getLocalizedSeedApps } from "@/lib/i18n/seedApps";
import { AppCard } from "./AppCard";
import { FilterBar } from "./FilterBar";
import { SearchBar } from "./SearchBar";

export function AppGrid() {
    const { t, language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [dynamicApps, setDynamicApps] = useState<App[]>([]);

    // Fetch user-submitted apps from Supabase
    useEffect(() => {
        async function fetchApps() {
            const { data, error } = await supabase
                .from("apps")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                console.error("Error fetching apps:", error);
                return;
            }

            if (data) {
                const mapped: App[] = data.map((row) => ({
                    id: row.id,
                    slug: row.slug,
                    name: row.name,
                    emoji: row.emoji || "🤖",
                    shortDescription: row.short_description,
                    longDescription: row.long_description || row.short_description,
                    categories: row.categories || [],
                    launchUrl: row.launch_url,
                    screenshotUrl: row.screenshot_url,
                    features: row.features || [],
                    tags: row.tags || [],
                    gradient: row.gradient || "from-violet-600/20 via-purple-600/10 to-transparent",
                    featured: row.featured || false,
                }));
                setDynamicApps(mapped);
            }
        }

        fetchApps();
    }, []);

    // Merge seed apps + dynamic (dedup by slug)
    const localizedSeedApps = useMemo(() => getLocalizedSeedApps(language), [language]);

    const allApps = useMemo(() => {
        const seedSlugs = new Set(localizedSeedApps.map((a) => a.slug));
        const uniqueDynamic = dynamicApps.filter((a) => !seedSlugs.has(a.slug));
        return [...localizedSeedApps, ...uniqueDynamic];
    }, [dynamicApps, localizedSeedApps]);

    const filteredApps = useMemo(() => {
        let apps = allApps;

        if (activeFilter !== "All") {
            apps = apps.filter((app) =>
                app.categories.some((cat) => cat === activeFilter)
            );
        }

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            apps = apps.filter(
                (app) =>
                    app.name.toLowerCase().includes(q) ||
                    app.shortDescription.toLowerCase().includes(q) ||
                    app.tags.some((t) => t.toLowerCase().includes(q))
            );
        }

        return apps;
    }, [activeFilter, searchQuery, allApps]);

    return (
        <section id="apps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">

            {/* Search */}
            <div className="mb-8">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>

            {/* Filters */}
            <div className="mb-12">
                <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredApps.map((app, i) => (
                        <AppCard key={app.id} app={app} index={i} />
                    ))}
                </AnimatePresence>
            </div>

            {/* Empty state */}
            {filteredApps.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-muted text-lg">{t("grid.noResults")}</p>
                </div>
            )}
        </section>
    );
}
