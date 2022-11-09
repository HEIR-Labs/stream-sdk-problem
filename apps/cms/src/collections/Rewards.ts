import { lists, validation } from '../utils'
import { is6rings } from '../utils/validation'
import { Reward } from '../payload-types'
import { CollectionConfig } from '../utils/types'

const slug = 'rewards'

const rewardCodePattern = /[0-9]{6}/

const makeRewardCode = () => {
  const [value] = Math.random().toString().match(rewardCodePattern)
  return value
}

const Rewards: CollectionConfig<typeof slug> = {
  slug,
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'name',
    description: 'User reward opportunities associated with an athlete Huddle',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'huddleId',
      label: 'Huddle',
      type: 'select',
      required: true,
      options: lists.huddleOptions,
    },
    {
      name: 'code',
      type: 'text',
      label: 'Reward Code',
      unique: true,
      required: true,
      validate: () => true,
      hooks: {
        beforeChange: [({ data }) => data.code || makeRewardCode()],
      },
      admin: {
        readOnly: true,
        description: 'This generates when the reward is created.',
      },
    },
    {
      name: 'sortOrder',
      label: 'Sort Order',
      type: 'number',
      required: true,
      admin: {
        description:
          'Determines position at which reward is rendered in a list view',
      },
    },
    {
      name: 'externalLink',
      label: 'External Link',
      type: 'text',
      admin: {
        description: 'If provided, will make the reward a clickable link',
      },
    },
    {
      name: 'dateComingSoon',
      type: 'date',
      label: 'Date coming soon',
      required: true,
      admin: { date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'dateSelecting',
      type: 'date',
      label: 'Date selecting',
      required: true,
      admin: { date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'dateAwarded',
      type: 'date',
      label: 'Date awarded',
      required: true,
      admin: {
        description:
          'After this date has passed, a field will appear for Awarded Wallet ID',
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
    {
      name: 'claimBy',
      type: 'date',
      label: 'Due date to claim',
      required: true,
      admin: { date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'legacyYear',
      label: 'Legacy year',
      type: 'number',
      admin: {
        description: '(Only for 6 rings rewards)',
        style: { fontStyle: 'italic' },
        condition: is6rings,
      },
      validate(value: number, { data }) {
        return !is6rings(data as Reward) || !value || value > 1979
          ? true
          : 'Legacy year must be at least 1980'
      },
    },
    {
      name: 'awardedTo',
      label: 'Awarded Wallet ID',
      type: 'text',
      required: false,
      validate: validation.isSolanaAddress,
      admin: {
        description: '(Solana wallet address)',
        style: { fontStyle: 'italic' },
        condition(data) {
          return new Date() > new Date(data.dateAwarded)
        },
      },
    },
    // These are in the notion spec but not sure how to capture them yet
    // ref: https://www.notion.so/heir-labs/Draft-Creator-Tools-Membership-043d2480f7e441129fd934713c82e1d4#9f9a5e4ca777447b830b2eb73306a97d
    // 12. TBD for MVP related NFT ID
    // 13. TBD for MVP smart contract ID
  ],
}

export default Rewards
