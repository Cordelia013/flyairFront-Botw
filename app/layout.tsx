// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./mediaQueries.css";
import Header from "@/components/layout/Header";
import ConfigurableGrid from "@/components/ConfigurableGrid";
 

// Définition des polices Geist
const geistSans = Geist({
  variable: "--font-geist-sans", 
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", 
});

export const metadata: Metadata = {
  title: "FlyAir - Voyagez en Corée",
  description: "Réservez des vols vers la Corée et découvrez ses plus beaux sites touristiques",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen w-screen">
        <Header />
        <main>
          {children}
        </main>
        
        {/* Grille plein écran */}
        <ConfigurableGrid />
      </body>
    </html>
  );
}