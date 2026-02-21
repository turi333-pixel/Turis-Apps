import type { Metadata } from "next";
import { SubmitFormClient } from "./SubmitFormClient";

export const metadata: Metadata = {
    title: "Submit New App — Turi Apps",
    description: "Add a new AI application to the Turi Apps showcase.",
};

export default function SubmitPage() {
    return <SubmitFormClient />;
}
