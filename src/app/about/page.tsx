import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
    title: "About — Turi Apps",
    description:
        "Built by Arturo Ordieres — AI & Digital Transformation. Learn more about the Turi Apps platform.",
};

export default function AboutPage() {
    return <AboutClient />;
}
