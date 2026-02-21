import { App } from "./types";

export const seedApps: App[] = [
    {
        id: "transcribe",
        slug: "transcribe",
        name: "Transcribe",
        emoji: "🎙",
        shortDescription:
            "Live audio transcription with smart summaries and action items.",
        longDescription:
            "Listens to live audio or uploaded recordings and generates accurate transcriptions. Automatically provides a clean summary and extracts actionable items. Ideal for meetings, workshops and voice notes.",
        categories: ["Productivity"],
        launchUrl:
            "https://voxscribe-ai-442393916614.us-west1.run.app",
        features: [
            "Real-time audio transcription",
            "Automatic summary generation",
            "Actionable item extraction",
            "Upload recordings or use live mic",
            "Clean, exportable output",
        ],
        tags: ["transcription", "audio", "productivity", "meetings"],
        gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
        featured: true,
    },
    {
        id: "voguefit-ai",
        slug: "voguefit-ai",
        name: "Voguefit AI",
        emoji: "👗",
        shortDescription:
            "Virtual try-on — see how outfits look on you with AI.",
        longDescription:
            "Upload your photo and virtually try on clothing to see how outfits look on you before buying. A fast and realistic AI-powered virtual fitting room.",
        categories: ["Lifestyle", "Fashion"],
        launchUrl:
            "https://voguefit-ai-virtual-try-on-442393916614.us-west1.run.app",
        features: [
            "Upload any photo of yourself",
            "AI-powered virtual fitting",
            "Realistic garment rendering",
            "Try multiple outfits quickly",
            "Save and compare looks",
        ],
        tags: ["fashion", "virtual-try-on", "ai", "lifestyle"],
        gradient: "from-pink-600/20 via-rose-600/10 to-transparent",
    },
    {
        id: "moodflow",
        slug: "moodflow",
        name: "MoodFlow",
        emoji: "🌊",
        shortDescription:
            "Track your mood and visualise emotional patterns over time.",
        longDescription:
            "Track your daily mood and mental state. Visualise weekly emotional patterns and receive personalised tips to improve balance and clarity.",
        categories: ["Wellness"],
        launchUrl: "https://moodflow-442393916614.us-west1.run.app",
        features: [
            "Daily mood logging",
            "Weekly pattern visualisation",
            "Personalised wellness tips",
            "Emotional trend tracking",
            "Simple, calming interface",
        ],
        tags: ["wellness", "mood", "mental-health", "tracking"],
        gradient: "from-cyan-600/20 via-teal-600/10 to-transparent",
    },
    {
        id: "beersnap",
        slug: "beersnap",
        name: "BeerSnap",
        emoji: "🍺",
        shortDescription:
            "Snap a beer photo and instantly discover tasting notes.",
        longDescription:
            "Upload or take a photo of a beer and instantly get detailed information about it. Discover tasting notes and check if it matches your personal flavour profile.",
        categories: ["Lifestyle"],
        launchUrl:
            "https://beersnap-442393916614.us-west1.run.app",
        features: [
            "Photo-based beer identification",
            "Detailed tasting notes",
            "Flavour profile matching",
            "Beer style classification",
            "Personal preference learning",
        ],
        tags: ["beer", "lifestyle", "photo-recognition", "food"],
        gradient: "from-amber-600/20 via-yellow-600/10 to-transparent",
    },
    {
        id: "motoscan-ai",
        slug: "motoscan-ai",
        name: "MotoScan AI",
        emoji: "🏍",
        shortDescription:
            "AI-powered motorcycle component assessment from a photo.",
        longDescription:
            "Upload a photo of any motorcycle component and receive an AI-powered mechanical assessment. Detect potential issues before they become serious problems.",
        categories: ["Motorbike", "Tech"],
        launchUrl:
            "https://motoscan-ai-pro-mechanic-assistant-442393916614.us-west1.run.app",
        features: [
            "Photo-based component analysis",
            "AI mechanical assessment",
            "Wear-and-tear detection",
            "Maintenance recommendations",
            "Issue severity scoring",
        ],
        tags: ["motorbike", "mechanic", "ai", "diagnostics"],
        gradient: "from-red-600/20 via-orange-600/10 to-transparent",
    },
    {
        id: "tabify-ai",
        slug: "tabify-ai",
        name: "Tabify AI",
        emoji: "🎸",
        shortDescription:
            "Automatically convert songs into guitar tablature.",
        longDescription:
            "Convert songs into accurate guitar tablature automatically. Ideal for musicians who want fast access to playable arrangements.",
        categories: ["Music"],
        launchUrl:
            "https://tabify-ai-442393916614.us-west1.run.app",
        features: [
            "Automatic tablature generation",
            "Song-to-tab conversion",
            "Multiple tuning support",
            "Export and share tabs",
            "Accurate note detection",
        ],
        tags: ["music", "guitar", "tablature", "ai"],
        gradient: "from-indigo-600/20 via-blue-600/10 to-transparent",
    },
    {
        id: "mi-huerto",
        slug: "mi-huerto",
        name: "Mi Huerto",
        emoji: "🌱",
        shortDescription:
            "Your personal AI gardening assistant for urban spaces.",
        longDescription:
            "Personal assistant for urban gardens and balcony pots. Get guidance on herbs, vegetables and plants based on your setup and season.",
        categories: ["Gardening"],
        launchUrl:
            "https://mi-huerto-tu-experto-personal-en-jardiner-a-442393916614.us-west1.run.app",
        features: [
            "Seasonal planting advice",
            "Urban garden optimisation",
            "Herb and vegetable guidance",
            "Balcony container gardening",
            "Watering and care schedules",
        ],
        tags: ["gardening", "urban", "plants", "sustainability"],
        gradient: "from-emerald-600/20 via-green-600/10 to-transparent",
    },
    {
        id: "tiempo-moto",
        slug: "tiempo-moto",
        name: "Tiempo Moto",
        emoji: "🌦",
        shortDescription:
            "Smart weather assessment for safe motorcycle riding.",
        longDescription:
            "Smart riding companion that evaluates weather conditions including humidity, temperature, frost and road safety factors to help you decide if it's safe to ride.",
        categories: ["Motorbike", "Weather"],
        launchUrl:
            "https://tiempo-moto-european-winter-rider-companion-442393916614.us-west1.run.app",
        features: [
            "Real-time weather evaluation",
            "Road safety scoring",
            "Frost and humidity alerts",
            "Ride/no-ride recommendation",
            "European weather data",
        ],
        tags: ["motorbike", "weather", "safety", "riding"],
        gradient: "from-sky-600/20 via-slate-600/10 to-transparent",
    },
    {
        id: "anchor",
        slug: "anchor",
        name: "Anchor",
        emoji: "⚓",
        shortDescription:
            "AI thinking partner for ideas, clarity and structured thinking.",
        longDescription:
            "An AI thinking partner. Talk through ideas, clarify thoughts and structure decisions. A conversational co-pilot for deep thinking.",
        categories: ["Productivity"],
        launchUrl: "https://anchor-442393916614.us-west1.run.app/",
        features: [
            "Conversational ideation",
            "Thought structuring",
            "Decision framework support",
            "Idea exploration",
            "Clarity through dialogue",
        ],
        tags: ["thinking", "ideation", "productivity", "ai"],
        gradient: "from-slate-600/20 via-zinc-600/10 to-transparent",
    },
    {
        id: "claro",
        slug: "claro",
        name: "CLARØ",
        emoji: "🔎",
        shortDescription:
            "Structured decision companion using logic and weighted reasoning.",
        longDescription:
            "Structured decision companion that helps you break down complex choices and evaluate them clearly using logic and weighted reasoning.",
        categories: ["Decision-Making"],
        launchUrl:
            "https://clar-decision-companion-442393916614.us-west1.run.app/",
        features: [
            "Structured decision breakdown",
            "Weighted criteria evaluation",
            "Logic-based comparison",
            "Clear visual scoring",
            "Export decision reports",
        ],
        tags: ["decisions", "logic", "reasoning", "productivity"],
        gradient: "from-fuchsia-600/20 via-purple-600/10 to-transparent",
    },
];

export const allCategories = [
    "All",
    "Productivity",
    "Lifestyle",
    "Creative",
    "Tech",
    "Motorbike",
    "Wellness",
    "Music",
    "Gardening",
    "Decision-Making",
    "Fashion",
    "Weather",
] as const;
