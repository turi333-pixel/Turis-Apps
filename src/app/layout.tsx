import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Turi Apps — AI Apps Built to Solve Real Things",
  description:
    "A curated collection of practical AI tools across productivity, lifestyle, creativity and tech. Built by Arturo Ordieres.",
  keywords: [
    "AI",
    "apps",
    "tools",
    "productivity",
    "machine learning",
    "artificial intelligence",
  ],
  openGraph: {
    title: "Turi Apps — AI Apps Built to Solve Real Things",
    description:
      "A curated collection of practical AI tools across productivity, lifestyle, creativity and tech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
