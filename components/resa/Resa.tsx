// components/resa/Resa.tsx
"use client"

import React from 'react';
import FlightCard, { Flight } from './FlightCard';

// Séparateur visuel
// const separator = (
//   <div className="w-0.5 h-32 opacity-20 bg-zinc-300 rounded-full" />
// );

export default function Resa() {
    // Tableau local de 5 vols fictifs
    const flights: Flight[] = [
        {
            _id: '1',
            flightNumber: 'AF123',
            airline: 'Air France',
            departure: { city: 'Paris', airport: 'CDG' },
            arrival: { city: 'Seoul', airport: 'ICN' }
        },
        {
            _id: '2',
            flightNumber: 'KE902',
            airline: 'Korean Air',
            departure: { city: 'Seoul', airport: 'ICN' },
            arrival: { city: 'Tokyo', airport: 'NRT' }
        },
        {
            _id: '3',
            flightNumber: 'LH789',
            airline: 'Lufthansa',
            departure: { city: 'Frankfurt', airport: 'FRA' },
            arrival: { city: 'Seoul', airport: 'ICN' }
        },
        {
            _id: '4',
            flightNumber: 'JL456',
            airline: 'Japan Airlines',
            departure: { city: 'Tokyo', airport: 'NRT' },
            arrival: { city: 'Busan', airport: 'PUS' }
        },
        {
            _id: '5',
            flightNumber: 'BA321',
            airline: 'British Airways',
            departure: { city: 'London', airport: 'LHR' },
            arrival: { city: 'Seoul', airport: 'ICN' }
        },
    ];

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
    }

    // function handleChange(name: string, value: string | number): void {
    //     // à compléter si besoin
    // }

    return (
        <>
            <div className="mt-16 absolute -top-16 -left-0 xl:text-[96px]">
                <h1 className="text-4xl mb-10 uppercase">Reservations</h1>
            </div>

            <div className="mt-16">
                <div className="grid grid-cols-12 gap-4 w-full h-screen">
                    <div className="col-span-3 rounded-lg min-h-[200px] p-6">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2">Price range</h3>
                                <p className="text-xl">£999</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Take off time</h3>
                                <p>00:00 - 24:00</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Landing time</h3>
                                <p>00:00 - 24:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-9 rounded-lg min-h-[200px] p-6">
                        <div className="flex items-center gap-2">
                            <form onSubmit={handleSubmit} className="w-full h-30 px-8 py-2 text-xl rounded-[40px] flex flex-col gap-4 bg-white/10">
                                {flights.map((flight) => (
                                    <FlightCard key={flight._id} flight={flight} />
                                ))}
                                <button type="submit" className="w-40 h-30 px-8 py-2 text-xl rounded-[40px] flex justify-between items-center gap-4 bg-black/50 text-white self-end">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}