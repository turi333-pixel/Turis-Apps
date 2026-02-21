import { notFound } from "next/navigation";
import { seedApps } from "@/lib/apps-data";
import { Metadata } from "next";
import { AppDetailClient } from "./AppDetailClient";
import { FetchAppWrapper } from "./FetchAppWrapper";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return seedApps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const app = seedApps.find((a) => a.slug === slug);

    if (!app) {
        return {
            title: "App — Turi Apps",
            description: "View app details on Turi Apps.",
        };
    }

    return {
        title: `${app.name} — Turi Apps`,
        description: app.shortDescription,
        openGraph: {
            title: `${app.name} — Turi Apps`,
            description: app.shortDescription,
        },
    };
}

export default async function AppDetailPage({ params }: Props) {
    const { slug } = await params;
    const seedApp = seedApps.find((a) => a.slug === slug);

    // If it's a seed app, render directly
    if (seedApp) {
        return <AppDetailClient app={seedApp} />;
    }

    // Otherwise, fetch from Supabase on the client
    return <FetchAppWrapper slug={slug} />;
}
