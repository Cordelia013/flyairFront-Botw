// app/page.tsx
'use client'

import type { ReactNode } from 'react';
import Container from "@/components/layout/Container";
import Grid from "@/components/layout/Grid";
import Header from '@/components/layout/Header';


export default function Home(): ReactNode {
  return (
    <Container>
        <Header />
      <h1 className="text-3xl font-bold my-8">Bienvenue sur FlyAir</h1>
      
      <Grid>
        {/* Bannière principale */}
        <div className="col-span-4 md:col-span-8 lg:col-span-12 bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Découvrez la Corée</h2>
          <p>Réservez votre vol et explorez les merveilles de la Corée du Sud.</p>
        </div>
        
        {/* Carte destinations populaires */}
        <div className="col-span-4 md:col-span-4 lg:col-span-6 bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-2">Destinations populaires</h3>
          <p>Seoul, Busan, Jeju Island...</p>
        </div>
        
        {/* Offres spéciales */}
        <div className="col-span-4 md:col-span-4 lg:col-span-6 bg-red-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-2">Offres spéciales</h3>
          <p>Profitez de nos réductions sur les vols vers Seoul!</p>
        </div>
      </Grid>
    </Container>
  );
}