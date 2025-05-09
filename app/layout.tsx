import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

// Définition des polices Geist pour l'application
const geistSans = Geist({
  variable: "--font-geist-sans", // Permet d'utiliser la police via une variable CSS
  subsets: ["latin"],           // Optimise le chargement pour le jeu de caractères latin
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // Police à chasse fixe pour code/éléments techniques
  subsets: ["latin"],
});

// Métadonnées de base pour le SEO
export const metadata: Metadata = {
  title: "FlyAir - Voyagez en Corée", // Plus spécifique au projet
  description: "Réservez des vols vers la Corée et découvrez ses plus beaux sites touristiques",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* ☝️ J'ai ajouté les variables de police à la balise HTML */}
      <body>
        <Suspense fallback={<div>Chargement...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}