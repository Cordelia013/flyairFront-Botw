// components/resa/Resa.tsx
"use client"

import { useEffect, useState } from 'react';
import { getflights } from '@/lib/sanity/sanity.client';

type Flight = {
  _id: string;
  flightNumber: string;
  airline: string;
  departure: {
    city: string;
    airport: string;
  };
  arrival: {
    city: string;
    airport: string;
  };
  // Autres champs selon ton schéma
};

export default function Resa() {
    const [flights, setFlights] = useState<Flight[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function loadFlights() {
            try {
                const data = await getflights();
                setFlights(data);
            } catch (error) {
                console.error("Erreur lors du chargement des vols:", error);
            } finally {
                setLoading(false);
            }
        }
        
        loadFlights();
    }, []);
    
    if (loading) return <div className="text-center my-20">Chargement des informations de vol...</div>;
    
    return (
        <div className="mt-16">
            <h1 className="text-4xl mb-10">Réservation de vols</h1>
            
            <div className="grid gap-6">
                {flights.map((flight) => (
                    <div key={flight._id} className="p-4 border border-gray-200 rounded-lg">
                        <h2 className="text-xl font-bold">{flight.airline} - {flight.flightNumber}</h2>
                        <p className="mt-2">
                            De {flight.departure.city} ({flight.departure.airport}) 
                            à {flight.arrival.city} ({flight.arrival.airport})
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}