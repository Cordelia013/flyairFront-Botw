import { type SchemaTypeDefinition } from 'sanity'
import destination from './destination'
import flight from './flight'

export const schema = {
  types: [destination, flight],
} satisfies { types: SchemaTypeDefinition[] }
