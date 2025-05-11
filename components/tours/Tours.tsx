// components/Tour/TourContent.tsx
"use client"

import { useEffect, useState } from 'react';
import { getDestinations } from '@/lib/sanity/sanity.client';

type Destination = {
  _id: string;
  title: string;
  excerpt?: string;
  location?: string;
  // Autres champs selon ton schéma
};

export default function TourContent() {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function loadDestinations() {
            try {
                const data = await getDestinations();
                setDestinations(data);
            } catch (error) {
                console.error("Erreur lors du chargement des destinations:", error);
            } finally {
                setLoading(false);
            }
        }
        
        loadDestinations();
    }, []);
    
    if (loading) return <div className="text-center my-20">Chargement des destinations...</div>;
    
    return (
        <div className="mt-16">
            <h1 className="text-4xl mb-10">Découvrez nos Tours</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((dest) => (
                    <div key={dest._id} className="p-4 border border-gray-200 rounded-lg">
                        <h2 className="text-xl font-bold">{dest.title}</h2>
                        {dest.location && <p className="text-sm mt-2">Lieu: {dest.location}</p>}
                        {dest.excerpt && <p className="mt-3">{dest.excerpt}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}