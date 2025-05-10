// app/layout.tsx
import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import "./mediaQueries.css";

import ConfigurableGrid from "@/components/ConfigurableGrid";

// Définition des polices locales
const ppNeueMontreal = localFont({
  src: [
    {
      path: '../public/font/pp-neue-montreal/PPNeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/pp-neue-montreal/PPNeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/pp-neue-montreal/PPNeueMontreal-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-pp-neue-montreal',
  display: 'swap',
});

const ppPangaia = localFont({
  src: '../public/font/pp-pangaia-webfont/PPPangaia-Regular.woff2',
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
    <html lang="fr" className={`${ppNeueMontreal.variable} ${ppPangaia.variable}`}>
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