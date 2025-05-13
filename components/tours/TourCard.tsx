'use client'


import Image from 'next/image';

type Tour = {
    id: number;
    title: string;
    description: string;
    image: string;
    location: string;
    price: number;
    activities: string[];
  };
  
  export default function TourCard({ tour }: { tour: Tour }) {
    return (
      <div className="h-[45vh] bg-[rgba(217,217,217,0.1)] rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-48">
        <Image 
  src={tour.image} 
  alt={tour.title}
  fill
  className="object-cover w-full h-full"
/>
        </div>
  
        <div className="p-6 group relative flex flex-col">
          <h3 className="text-2xl font-semibold mb-[26.5px]">{tour.title}</h3>
          <p className="text-white mb-[26.5px] text-sm font-neue-montreal">{tour.description}</p>
  
          <div className="absolute bottom-[16px] flex items-center gap-2 text-sm">
            <button className="hover:underline">{tour.location}</button>
            <div className="w-[2px] h-[2px] bg-white"></div>
            <span className="text-gray-400">({tour.price}€)</span>
            <div className="w-[2px] h-[2px] bg-white"></div>
  
            <div className="relative">
              <button className="text-gray-400 hover:underline group">
                {tour.activities.length} activités
            
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  