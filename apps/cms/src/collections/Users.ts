import { auth } from '../utils'
import { CollectionConfig } from '../utils/types'

const slug = 'users'

const Users: CollectionConfig<typeof slug> = {
  slug,
  auth: true,
  access: auth.adminOnlyAccess,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    {
      name: 'role',
      type: 'select',
      options: ['admin', 'developer', 'editor', 'viewer'],
      required: true,
    },
  ],
}

export default Users
