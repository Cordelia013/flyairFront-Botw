// app/layout.tsx
import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import "./mediaQueries.css";
import "./home/home.css";

import ConfigurableGrid from "@/components/ConfigurableGrid";

// Définition des polices locales
const ppNeueMontreal = localFont({
  src: [
    {
      path: './font/PPNeueMontreal-Thin.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/PPNeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/PPNeueMontreal-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-pp-neue-montreal',
  display: 'swap',
});

const ppPangaia = localFont({
  src: [
    {
      path: './font/PPPangaia-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/PPPangaia-MediumItalic.woff2',
      weight: '500', 
      style: 'italic',
    },
    {
      path: './font/PPPangaia-UltralightItalic.woff2', 
      weight: '100',
      style: 'italic',
    }
  ],
  variable: '--font-pp-pangaia',
  display: 'swap',
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
    <html lang="fr" className={`${ppPangaia.variable} ${ppNeueMontreal.variable}`}>
      <body className="min-h-screen w-screen">
        <main>
          {children}
        </main>
        
        {/* Grille plein écran */}
        <ConfigurableGrid />
      </body>
    </html>
  );
}