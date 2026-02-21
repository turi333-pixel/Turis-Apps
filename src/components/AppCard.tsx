"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { App } from "@/lib/types";
import { CategoryBadge } from "./CategoryBadge";

interface AppCardProps {
    app: App;
    index: number;
}

export function AppCard({ app, index }: AppCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
        >
            <Link href={`/apps/${app.slug}`} className="block group h-full">
                <div className="relative h-full glass rounded-[var(--radius-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/20 overflow-hidden">
                    {/* Gradient background */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[var(--radius-card)]`}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                        {/* Emoji + badges */}
                        <div className="flex items-start justify-between mb-4">
                            <span className="text-3xl" role="img" aria-label={app.name}>
                                {app.emoji}
                            </span>
                            <div className="flex flex-wrap gap-1.5 justify-end">
                                {app.categories.map((cat) => (
                                    <CategoryBadge key={cat} category={cat} />
                                ))}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                            {app.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted leading-relaxed flex-1">
                            {app.shortDescription}
                        </p>

                        {/* CTA */}
                        <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                            View Details
                            <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
