// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getDestinations } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.client";

export default async function Home() {
  const destinations = await getDestinations();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Découvrez la Corée avec FlyAir
          </h1>
          <p className="text-xl mb-8">
            Voyagez vers les plus belles destinations coréennes et vivez des expériences inoubliables
          </p>
          <Link 
            href="/destinations" 
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition"
          >
            Explorer nos destinations
          </Link>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Destinations populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 6).map((destination: any) => (
            <div key={destination._id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {destination.mainImage && (
                <div className="relative h-48">
                  <Image 
                    src={urlFor(destination.mainImage).url()} 
                    alt={destination.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{destination.title}</h3>
                <p className="text-gray-700 mb-4">{destination.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-medium">{destination.price}</span>
                  <Link 
                    href={`/destinations/${destination.slug.current}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}