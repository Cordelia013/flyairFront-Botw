// schema/destination.ts

export default {
  name: 'destination',
  title: 'Tours',
  type: 'document',
  fields: [
  
      {
        name: 'title',
        title: 'Titre',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        title: 'Image principale',
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
      {
        name: 'excerpt',
        title: 'Description courte',
        type: 'text',
        rows: 3,
      },
      {
        name: 'location',
        title: 'Localisation',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Prix',
        type: 'string',
      },
      {
        name: 'duration',
        title: 'Durée de l\'activité',
        type: 'string',
      },
      {
        name: 'categories',
        title: 'Catégories',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            {title: 'Seoul', value: 'seoul'},
            {title: 'Outdoor', value: 'outdoor'},
            {title: 'Family Friendly', value: 'family-friendly'},
            {title: 'Cultural', value: 'cultural'},
            {title: 'Shopping', value: 'shopping'},
          ]
        }
      }
    ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}