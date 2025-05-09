// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { GridProvider } from "@/components/layout/grid/GridContext";
import GridControl from "@/components/layout/grid/GridControl";
import GridVisualizer from "@/components/layout/grid/GridVisualizer";

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

// Métadonnées
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
      <body className="min-h-screen">
        <GridProvider>
          {/* Contenu principal (z-index plus élevé que la grille) */}
          <div className="relative z-10">
            <Suspense fallback={<div className="flex items-center justify-center h-32">Chargement...</div>}>
              {children}
            </Suspense>
          </div>
          
          {/* Grille de développement (uniquement en mode développement) */}
          {process.env.NODE_ENV === 'development' && (
            <>
              <GridVisualizer />
              <GridControl 
                shortcutKey="g"
                position="bottom-right"
              />
            </>
          )}
        </GridProvider>
      </body>
    </html>
  );
}