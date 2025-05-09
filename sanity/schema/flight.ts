// schema/flight.ts
export default {
  name: 'flight',
  title: 'Vols',
  type: 'document',
  fields: [
    // --- INFORMATIONS DE BASE ---
    {
      name: 'flightNumber',
      title: 'Numéro de vol',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    },
    {
      name: 'airline',
      title: 'Compagnie aérienne',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    },
    {
      name: 'airlineLogo',
      title: 'Logo de la compagnie',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
        }
      ]
    },
    
    // --- ITINÉRAIRE ---
    {
      name: 'departure',
      title: 'Départ',
      type: 'object',
      fields: [
        {
          name: 'airport',
          title: 'Aéroport',
          type: 'string',
          validation: (Rule: { required: () => any }) => Rule.required()
        },
        {
          name: 'city',
          title: 'Ville',
          type: 'string',
          validation: (Rule: { required: () => any }) => Rule.required()
        },
        {
          name: 'country',
          title: 'Pays',
          type: 'string',
          validation: (Rule: { required: () => any }) => Rule.required()
        },
        {
          name: 'terminal',
          title: 'Terminal',
          type: 'string'
        },
        {
          name: 'gate',
          title: 'Porte d\'embarquement',
          type: 'string'
        }
      ]
    },
    {
      name: 'arrival',
      title: 'Arrivée',
      type: 'object',
      fields: [
        {
          name: 'airport',
          title: 'Aéroport',
          type: 'string',
          validation: (Rule: { required: () => any }) => Rule.required()
        },
        {
          name: 'city',
          title: 'Ville',
          type: 'string',
          validation: (Rule: { required: () => any }) => Rule.required()
        },
        {
          name: 'country',
          title: 'Pays',
          type: 'string',
          validation: (Rule: { required: () => any }) => Rule.required()
        },
        {
          name: 'terminal',
          title: 'Terminal',
          type: 'string'
        }
      ]
    },
    
    // --- HORAIRES ---
    {
      name: 'departureDateTime',
      title: 'Date et heure de départ',
      type: 'datetime',
      validation: (Rule: { required: () => any }) => Rule.required()
    },
    {
      name: 'arrivalDateTime',
      title: 'Date et heure d\'arrivée',
      type: 'datetime',
      validation: (Rule: { required: () => any }) => Rule.required()
    },
    {
      name: 'duration',
      title: 'Durée (en minutes)',
      type: 'number',
      description: 'Durée du vol en minutes'
    },
    
    // --- TARIFICATION ---
    {
      name: 'pricing',
      title: 'Tarifs',
      type: 'object',
      fields: [
        {
          name: 'currency',
          title: 'Devise',
          type: 'string',
          options: {
            list: [
              {title: 'Euro (€)', value: 'EUR'},
              {title: 'Dollar ($)', value: 'USD'},
              {title: 'Won (₩)', value: 'KRW'}
            ]
          },
          initialValue: 'EUR'
        },
        {
          name: 'economy',
          title: 'Classe Économique',
          type: 'number'
        },
        {
          name: 'business',
          title: 'Classe Affaires',
          type: 'number'
        },
        {
          name: 'firstClass',
          title: 'Première Classe',
          type: 'number'
        }
      ]
    },
    
    // --- CAPACITÉ ---
    {
      name: 'capacity',
      title: 'Capacité',
      type: 'object',
      fields: [
        {
          name: 'economyTotal',
          title: 'Places totales (Économique)',
          type: 'number'
        },
        {
          name: 'economyAvailable',
          title: 'Places disponibles (Économique)',
          type: 'number'
        },
        {
          name: 'businessTotal',
          title: 'Places totales (Affaires)',
          type: 'number'
        },
        {
          name: 'businessAvailable',
          title: 'Places disponibles (Affaires)',
          type: 'number'
        },
        {
          name: 'firstClassTotal',
          title: 'Places totales (Première)',
          type: 'number'
        },
        {
          name: 'firstClassAvailable',
          title: 'Places disponibles (Première)',
          type: 'number'
        }
      ]
    },
    
    // --- SERVICES ---
    {
      name: 'amenities',
      title: 'Services à bord',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'WiFi', value: 'wifi'},
          {title: 'Prises électriques', value: 'power-outlets'},
          {title: 'Divertissement à bord', value: 'entertainment'},
          {title: 'Repas inclus', value: 'meals'},
          {title: 'Lit plat', value: 'flat-bed'},
          {title: 'Lounge VIP', value: 'vip-lounge'}
        ]
      }
    },
    
    // --- RELATIONS ---
    {
      name: 'destination',
      title: 'Destination',
      type: 'reference',
      to: [{ type: 'destination' }],
      description: 'Lien vers une destination touristique'
    },
    
    // --- STATUT ---
    {
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          {title: 'À l\'heure', value: 'on-time'},
          {title: 'Retardé', value: 'delayed'},
          {title: 'Annulé', value: 'cancelled'},
          {title: 'Embarquement', value: 'boarding'},
          {title: 'Départ', value: 'departed'},
          {title: 'Arrivé', value: 'arrived'}
        ]
      },
      initialValue: 'on-time'
    }
  ],

  preview: {
    select: {
      title: 'flightNumber',
      departure: 'departure.city',
      arrival: 'arrival.city',
      date: 'departureDateTime',
      media: 'airlineLogo'
    },
    prepare(value: Record<string, any>) {
      const {title, departure, arrival, date, media} = value
      const flightDate = date ? new Date(date).toLocaleDateString() : ''
      
      return {
        title: title,
        subtitle: `${departure} → ${arrival} | ${flightDate}`,
        media: media
      }
    }
  }
}