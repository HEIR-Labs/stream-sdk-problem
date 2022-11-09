import { validation } from '../utils'
import { CollectionConfig } from '../utils/types'

const slug = 'nfts'

const NFTs: CollectionConfig<typeof slug> = {
  slug,
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      validate: validation.slug,
    },
    {
      name: 'associatedAddress',
      label: 'Address',
      type: 'text',
      required: true,
    },
    {
      name: 'candyMachineID',
      label: 'Candy machine ID',
      type: 'text',
      required: true,
    },
    {
      name: 'year',
      label: 'Year',
      type: 'number',
      required: true,
      admin: { step: 1 },
      min: 1950,
      max: new Date().getFullYear() + 1,
      defaultValue: new Date().getFullYear(),
    },
    {
      name: 'season',
      label: 'Season',
      type: 'number',
      required: true,
      admin: { step: 1 },
      defaultValue: 1,
      min: 1,
    },
    {
      name: 'coverPhoto',
      label: 'Cover photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'magicEdenCollectionLink',
      label: 'Magic Eden Collection Link',
      type: 'text',
      required: false,
    },
    {
      name: 'blocked',
      label: 'Sale Blocked',
      type: 'checkbox',
      required: false,
      defaultValue: false,
    },
    {
      name: 'soldOut',
      label: 'Sold Out',
      type: 'checkbox',
      required: false,
      defaultValue: false,
    },
  ],
}

export default NFTs
