export type Category =
  | "Productivity"
  | "Lifestyle"
  | "Creative"
  | "Tech"
  | "Motorbike"
  | "Wellness"
  | "Music"
  | "Gardening"
  | "Decision-Making"
  | "Fashion"
  | "Weather";

export interface App {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  shortDescription: string;
  longDescription: string;
  categories: Category[];
  launchUrl: string;
  screenshotUrl?: string;
  features: string[];
  tags: string[];
  gradient: string; // tailwind gradient classes or CSS gradient
  featured?: boolean;
}
