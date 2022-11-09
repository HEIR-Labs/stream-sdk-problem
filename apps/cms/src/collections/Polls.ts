import { lists, validation } from '../utils'
import { CollectionConfig } from '../utils/types'

const slug = 'polls'

const Polls: CollectionConfig<typeof slug> = {
  slug,
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
    description:
      'Tracks progress and result of community voting on a question within an athlete huddle\n(These are not yet used, see https://linear.app/heir/issue/ENG-1264)',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
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
      name: 'opensAt',
      label: 'Opens At',
      type: 'date',
      required: true,
      admin: { date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'expiresAt',
      label: 'Expires At',
      type: 'date',
      required: true,
      admin: { date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'huddleId',
      label: 'Huddle',
      type: 'select',
      required: true,
      options: lists.huddleOptions,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'question',
      label: 'Question',
      type: 'text',
      required: true,
    },
    {
      name: 'options',
      type: 'array',
      fields: [
        {
          name: 'text',
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
      ],
    },
    {
      name: 'blindVote',
      label: 'Blind Vote',
      type: 'checkbox',
      required: true,
      defaultValue: false,
      admin: {
        description:
          'Users can only see the results of the poll once it is closed',
      },
    },
    {
      name: 'public',
      label: 'Public',
      type: 'checkbox',
      required: true,
      defaultValue: false,
      admin: {
        description:
          'Visible to all users regardless even if they do not hold a token from associated huddle',
      },
    },
    {
      name: 'minSelections',
      label: 'Minimum Selections',
      type: 'number',
      min: 1,
      required: true,
      defaultValue: 1,
    },
    {
      name: 'maxSelections',
      label: 'Maximum Selections',
      type: 'number',
      min: 1,
      required: true,
      defaultValue: 1,
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      options: ['Collectibles', 'Experiences', 'Moments', 'Platform'],
    },
    {
      name: 'text',
      label: 'Text',
      type: 'richText',
      required: true,
    },
    {
      name: 'detailedDescription',
      label: 'Detailed description',
      type: 'richText',
      required: true,
    },
    {
      name: 'votingInstructions',
      label: 'Voting Instructions',
      type: 'text',
      required: false,
    },
    {
      name: 'views',
      label: 'View count',
      type: 'number',
      min: 0,
      defaultValue: 0,
      admin: { readOnly: true },
    },
    {
      name: 'reactions',
      label: 'Reactions',
      type: 'array',
      admin: { readOnly: true },
      fields: [
        {
          name: 'emoji',
          label: 'Emoji',
          type: 'text',
          required: true,
        },
        {
          name: 'count',
          label: 'Count',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
  ],
}

export default Polls
