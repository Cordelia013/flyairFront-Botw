// components/resa/Resa.tsx
"use client"

import React, { useEffect, useState } from 'react';
import { FlightCard, Flight } from './FlightCard';
import Separator from './Separator';
import { getDestinations } from '@/lib/sanity/sanity.client';

// Séparateur visuel
// const separator = (
//   <div className="w-0.5 h-32 opacity-20 bg-zinc-300 rounded-full" />
// );

export default function Resa() {
    const [loading, setLoading] = useState(false);
    
    const flights: Flight[] = [
        {
            _id: '1',
            flightNumber: 'AF123',
            airline: 'Air France',
            
            departure: { city: 'Paris', airport: 'CDG', time: '08:15' },
            arrival: { city: 'Seoul', airport: 'ICN', time: '10:45' }
        },
        {
            _id: '2',
            flightNumber: 'KE902',
            airline: 'Korean Air',
           
            departure: { city: 'Seoul', airport: 'ICN', time: '14:30' },
            arrival: { city: 'Tokyo', airport: 'NRT', time: '16:45' }
        },
        {
            _id: '3',
            flightNumber: 'LH789',
            airline: 'Lufthansa',
           
            departure: { city: 'Frankfurt', airport: 'FRA', time: '10:20' },
            arrival: { city: 'Seoul', airport: 'ICN', time: '12:55' }
        },
        {
            _id: '4',
            flightNumber: 'JL456',
            airline: 'Japan Airlines',
          
            departure: { city: 'Tokyo', airport: 'NRT', time: '09:00' },
            arrival: { city: 'Busan', airport: 'PUS', time: '10:30' }
        },
        {
            _id: '5',
            flightNumber: 'BA321',
            airline: 'British Airways',
            
            departure: { city: 'London', airport: 'LHR', time: '11:30' },
            arrival: { city: 'Seoul', airport: 'ICN', time: '14:15' }
        },
    ];

    const filterData = [
        {
            title: "Price range",
            value: "£999",
            valueClassName: "12px"
        },
        {
            title: "Take off time", 
            value: "00:00 - 24:00"
        },
        {
            title: "Landing time",
            value: "00:00 - 24:00"
        }
    ];

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
    }
    if (loading) {
        return (
          <div className="text-center my-20">
            <span className="animate-spin inline-block mr-2">⏳</span>
            Chargement de vos réservations...
          </div>
        );
      }
    return (
        <>
            <div className="mt-18 mb-8 absolute -top-16 -left-0 xl:text-[96px]">
                <h1 className="text-4xl mb-10 uppercase">Reservations</h1>
            </div>

            <div className="mt-32">
                <div className="grid grid-cols-12 gap-4 w-full h-screen">
                    <div className="col-span-2 rounded-lg min-h-[200px]  py-8">
                        <div className="space-y-6">
                            {filterData.map((filter, index) => (
                                <div key={index}>
                                    <p className="font-extralight mb-3 text-xl font-neue-montreal">{filter.title}</p>
                                    <Separator />
                                    <p className={`mt-3 text-xs font-neue-montreal`}>{filter.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>                            
                    <div className="col-span-10 rounded-lg min-h-[200px] p-6">
                        <div className="flex items-center gap-2">
                            <form onSubmit={handleSubmit} className="w-full h-30 px-8 py-2 text-xl rounded-[40px] flex flex-col gap-4">
                                {flights.map((flight) => (
                                    <FlightCard key={flight._id} flight={flight} />
                                ))}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}