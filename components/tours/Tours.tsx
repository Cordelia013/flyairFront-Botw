'use client'

// src/components/Tours.tsx
import { useState, useEffect } from 'react';
import { dataTours } from './data/dataTours';
import TourCard from './TourCard';

export default function Tours() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="text-center my-20 text-gray-600">
        <span className="animate-spin inline-block mr-2">⏳</span>
        Chargement de vos réservations...
      </div>
    );
  }

  return (
    <div className="mt-3 min-h-screen w-full pb-20">
      <div className="mt-20 mb-8 relative -top-16 -left-0 text-[96px]">
        <h1 className="text-4xl mb-10 uppercase">Tours</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4">
        {dataTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}
