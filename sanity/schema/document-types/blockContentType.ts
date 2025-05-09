import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon} from '@sanity/icons'

/**
 * Ceci est le type de schéma pour le contenu en bloc utilisé dans le type de document post
 * L'importation de ce type dans la propriété `schema` de la configuration du studio
 * vous permet de le réutiliser dans d'autres types de documents avec :
 *  {
 *    name: 'nomQuelconque',
 *    title: 'Un titre',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Les styles vous permettent de définir comment les blocs peuvent être balisés. L'ensemble
      // par défaut correspond aux balises HTML, mais vous pouvez définir n'importe quel titre ou valeur
      // que vous souhaitez, et décider comment vous voulez les utiliser là où vous voulez
      // utiliser votre contenu.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Les marques vous permettent de baliser du texte en ligne dans l'éditeur Portable Text
      marks: {
        // Les décorateurs sont généralement une propriété unique – par exemple, un style typographique
        // préférence ou un surlignement
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Les annotations peuvent être n'importe quelle structure d'objet – par exemple, un lien ou une note de bas de page.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // Vous pouvez ajouter des types supplémentaires ici. Notez que vous ne pouvez pas utiliser
    // des types primitifs comme 'string' et 'number' dans le même tableau
    // qu'un type de bloc.
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
  ],
})
