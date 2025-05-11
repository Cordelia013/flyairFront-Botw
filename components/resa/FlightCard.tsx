// components/resa/Resa.tsx
"use client"

import React from 'react';

// Type Flight à importer ou redéclarer si besoin
export type Flight = {
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
  // autres champs si besoin
};

type FlightCardProps = {
  flight: Flight;
};

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h2 className="text-xl font-bold">{flight.airline} - {flight.flightNumber}</h2>
      <p className="mt-2">
        De {flight.departure.city} ({flight.departure.airport})
        à {flight.arrival.city} ({flight.arrival.airport})
      </p>
    </div>
  );
}

// // Demo Page with Multiple Flight Cards
// const FlightCardsDemo = () => {
//   const flightOptions = [
//     { departureTime: "17:00", departureCity: "Seoul", arrivalTime: "21:30", arrivalCity: "Busan", price: "€150" },
//     { departureTime: "08:15", departureCity: "Paris", arrivalTime: "10:45", arrivalCity: "Seoul", price: "€950" },
//     { departureTime: "14:30", departureCity: "Tokyo", arrivalTime: "18:20", arrivalCity: "Seoul", price: "€320" }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 space-y-4">
//       <h1 className="text-white text-2xl font-bold mb-6">Available Flights</h1>
      
//       {flightOptions.map((flight, index) => (
//         <FlightCard
//           key={index}
//           flight={flight as unknown as Flight}
//         />
//       ))}
//     </div>
//   );
// };

// export  FlightCardsDemo;