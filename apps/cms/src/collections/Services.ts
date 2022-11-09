import { auth } from '../utils'
import { CollectionConfig } from '../utils/types'

const slug = 'services'

const Services: CollectionConfig<typeof slug> = {
  slug,
  access: auth.fullAccessWithRole('developer'),
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: 'name',
    description:
      'Machine to machine service account that uses an api key to query payload rather than a temporary jwt or cookie',
  },
  fields: [
    {
      type: 'text',
      name: 'name',
      required: true,
    },
  ],
}

export default Services
