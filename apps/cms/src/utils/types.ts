import { CollectionConfig as _CollectionConfig } from 'payload/types'
import * as F from 'payload/dist/fields/config/types'

import Media from '../collections/Media'
import { HeirCollection } from '../payload.config'

/**
 * The purpose behind overriding the `relationTo` fields, is to further
 * restrict them to a string literal union of the slugs
 * for each collection defined in our project,
 * rather than just using `string`
 */
type HeirField =
  | F.TextField
  | F.NumberField
  | F.EmailField
  | F.TextareaField
  | F.CheckboxField
  | F.DateField
  | F.BlockField
  | F.GroupField
  | F.RadioField
  | F.ArrayField
  | F.RichTextField
  | F.SelectField
  | F.CodeField
  | F.PointField
  | F.RowField
  | F.CollapsibleField
  | F.TabsField
  | F.UIField
  | (Omit<F.UploadField, 'relationTo'> & { relationTo: typeof Media.slug })
  | (Omit<F.RelationshipField, 'relationTo'> & { relationTo: HeirCollection })

export type CollectionConfig<T> = Omit<_CollectionConfig, 'slug' | 'fields'> & {
  slug: T
  fields: HeirField[]
}
