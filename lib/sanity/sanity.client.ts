// lib/sanity.client.ts
import { client } from './sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Configuration de l'image builder
const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);

// Récupérer toutes les destinations
export async function getDestinations() {
  const query = `*[_type == "destination"] | order(title asc) {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    location,
    price,
    duration,
    categories
  }`;
  
  return client.fetch(query);
}

// Récupérer une destination par slug
export async function getDestinationBySlug(slug: string) {
  const query = `*[_type == "destination" && slug.current == $slug][0]`;
  return client.fetch(query, { slug });
}




// Récupérer toutes les vols
export async function getflights() {
  const query = `*[_type == "flight"] | order(flightNumber  asc) {
    _id,
    flightNumber,
    airline,
    airlineLogo,
    departure,
    arrival,
    departureDateTime,
    arrivalDateTime,
    duration,
    pricing,
    capacity,
    amenities,
    destination,
    status
  }`;
  
  return client.fetch(query);
}

// Récupérer une destination par slug
export async function getFlightByNumber(flightNumber: string) {
  const query = `*[_type == "flight" && flightNumber == $flightNumber][0]`;
  return client.fetch(query, { flightNumber });
}