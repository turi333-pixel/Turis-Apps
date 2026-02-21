import { Category } from "@/lib/types";

const badgeClassMap: Record<string, string> = {
    Productivity: "badge-productivity",
    Lifestyle: "badge-lifestyle",
    Fashion: "badge-fashion",
    Creative: "badge-creative",
    Tech: "badge-tech",
    Motorbike: "badge-motorbike",
    Wellness: "badge-wellness",
    Music: "badge-music",
    Gardening: "badge-gardening",
    "Decision-Making": "badge-decision-making",
    Weather: "badge-weather",
};

export function CategoryBadge({ category }: { category: Category | string }) {
    const cls = badgeClassMap[category] || "badge-productivity";
    return (
        <span
            className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${cls}`}
        >
            {category}
        </span>
    );
}
