import { CollectionConfig } from '../utils/types'

const slug = 'media'

const Media: CollectionConfig<typeof slug> = {
  slug,
  admin: {
    useAsTitle: 'alt',
    description: 'Images referenced by other collections',
  },
  upload: {
    staticURL: '/media',
    // On the server use a media dir at the root so that it's not overwritten during deploy
    staticDir:
      process.env.NODE_ENV === 'production'
        ? '/home/ubuntu/payload-media'
        : '../media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        crop: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        crop: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `null` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: null,
        crop: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}

export default Media
