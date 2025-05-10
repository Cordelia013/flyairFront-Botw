/**
 * Cette route est responsable de l'environnement de création intégré utilisant Sanity Studio.
 * Toutes les routes sous votre chemin studio sont gérées par ce fichier en utilisant les routes catch-all de Next.js :
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * Vous pouvez en apprendre davantage sur le package next-sanity ici :
 * https://github.com/sanity-io/next-sanity
 */
'use client'
import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity/sanity.config'

export const dynamic = 'force-static'

export default function StudioPage() {
  return <NextStudio config={config} />
}
