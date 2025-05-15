

// app/layout.tsx
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import "./mediaQueries.css";
import "./home/home.css";

import ConfigurableGrid from "@/components/ConfigurableGrid";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";

// Définition des polices locales avec préchargement optimisé
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
  preload: true,
  fallback: ['system-ui', 'arial'],
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
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "FlyAir - Voyagez en Corée",
  description: "Réservez des vols vers la Corée et découvrez ses plus beaux sites touristiques",
  
};

// Nouvelle export pour le viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${ppPangaia.variable} ${ppNeueMontreal.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className=" w-screen">
      <Container>
        <Header />
      </Container>  
        <main>
          {children}
        </main>
        
        {/* Grille plein écran */}
        <ConfigurableGrid />
      </body>
    </html>
  );
}