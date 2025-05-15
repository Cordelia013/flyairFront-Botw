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
  // Logique pour les images prioritaires
  const isPriorityImage = true;

  return (
    <div className="h-[454px] bg-[rgba(217,217,217,0.1)] rounded-3xl overflow-hidden shadow-lg flex flex-col">
      {/* Conteneur d'image avec hauteur fixe */}
      <div className="relative h-[230px] flex-shrink-0">
        <Image 
          src={tour.image} 
          alt={tour.title}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover w-full h-full"
          priority={isPriorityImage}
        />
      </div>

      {/* Conteneur du contenu avec flex */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Titre */}
        <h3 className="text-2xl font-semibold mb-[26.5px] flex-shrink-0">{tour.title}</h3>
        
        {/* Zone de description avec défilement si nécessaire */}
        <div className="overflow-y-auto flex-grow mb-[26.5px] min-h-0">
          <p className="text-white text-sm font-neue-montreal">{tour.description}</p>
        </div>

        {/* Footer - conserve exactement votre structure */}
        <div className="flex items-center gap-2 text-sm flex-shrink-0">
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