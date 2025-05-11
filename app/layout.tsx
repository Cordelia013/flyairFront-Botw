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
      path: './font/pp-neue-montreal/ppneuemontreal-thin.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/pp-neue-montreal/PPNeueMontreal-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    // {
    //   path: '../public/font/pp-neue-montreal/PPNeueMontreal-Bold.woff',
    //   weight: '700',
    //   style: 'normal',
    // }
  ],
  variable: '--font-pp-neue-montreal',
  display: 'swap',
});

const ppPangaia = localFont({
  src: [
    {
      path: './font/pp-pangaia-webfont/PPangaia-Medium-BF654c530cc86d5.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/pp-pangaia-webfont/PPangaia-MediumItalic.woff',
      weight: '500', 
      style: 'italic',
    },
    {
      path: '/font/pp-pangaia-webfont/PPangaia-UltralightItalic.woff', 
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