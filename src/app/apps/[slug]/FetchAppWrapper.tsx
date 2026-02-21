"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { App } from "@/lib/types";
import { AppDetailClient } from "./AppDetailClient";
import { Loader2 } from "lucide-react";

export function FetchAppWrapper({ slug }: { slug: string }) {
    const [app, setApp] = useState<App | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        async function fetchApp() {
            const { data, error } = await supabase
                .from("apps")
                .select("*")
                .eq("slug", slug)
                .single();

            if (error || !data) {
                setNotFound(true);
                setLoading(false);
                return;
            }

            setApp({
                id: data.id,
                slug: data.slug,
                name: data.name,
                emoji: data.emoji || "🤖",
                shortDescription: data.short_description,
                longDescription: data.long_description || data.short_description,
                categories: data.categories || [],
                launchUrl: data.launch_url,
                screenshotUrl: data.screenshot_url,
                features: data.features || [],
                tags: data.tags || [],
                gradient: data.gradient || "from-violet-600/20 via-purple-600/10 to-transparent",
                featured: data.featured || false,
            });
            setLoading(false);
        }

        fetchApp();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-accent" />
            </div>
        );
    }

    if (notFound || !app) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
                <div>
                    <h1 className="text-3xl font-bold mb-2">App Not Found</h1>
                    <p className="text-muted mb-6">The app you're looking for doesn't exist.</p>
                    <a
                        href="/"
                        className="px-6 py-3 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-all"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        );
    }

    return <AppDetailClient app={app} />;
}
