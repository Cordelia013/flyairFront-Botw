// components/resa/Resa.tsx
"use client"

import React from 'react';
import Separator from './Separator';

// Type Flight à importer ou redéclarer si besoin
export type Flight = {
  _id: string;
  flightNumber: string;
  airline: string;
  departure: {
    city: string;
    airport: string;
    time: string;
  };
  arrival: {
    city: string;
    airport: string;
    time: string;
  };
  // autres champs si besoin
};

type FlightCardProps = {
  flight: Flight;
};

export function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="flex w-full">
      <div className="grid grid-cols-[15%_auto_15%] items-center gap-4 p-4 rounded-4xl bg-white/10 flex-grow">
        {/* left */}
        <div className="flex flex-col gap-2 ">
          <p className="text-xl font-bold text-center">{flight.departure.time}</p>
          <p className='text-center'>{flight.departure.city} ({flight.departure.airport})</p>   
        </div>
        {/* center */}
        <div className="flex justify-center">
          <Separator />
        </div>
        {/* right */}
        <div className="flex flex-col gap-2 ">
          <p className="text-xl font-bold text-center">{flight.arrival.time}</p>
          <p className='text-center'>{flight.arrival.city} ({flight.arrival.airport})</p>   
        </div>
      </div>
      <button type="submit" className="px-8 py-2 text-xl bg-black/50 rounded-4xl text-white ml-4">Search</button>
    </div>
  );
}

// Demo Page with Multiple Flight Cards
const FlightCardDemo = () => {
  const flightOptions = [
    { departureTime: "17:00", departureCity: "Seoul", arrivalTime: "21:30", arrivalCity: "Busan", price: "€150" },
    { departureTime: "08:15", departureCity: "Paris", arrivalTime: "10:45", arrivalCity: "Seoul", price: "€950" },
    { departureTime: "14:30", departureCity: "Tokyo", arrivalTime: "18:20", arrivalCity: "Seoul", price: "€320" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 space-y-4">
      <h1 className="text-white text-2xl font-bold mb-6">Available Flights</h1>
      
      {flightOptions.map((flight, index) => (
        <FlightCard
          key={index}
          flight={flight as unknown as Flight}
        />
      ))}
    </div>
  );
};

export default FlightCardDemo;