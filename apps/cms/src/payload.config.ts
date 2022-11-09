import path from 'path'
import { buildConfig } from 'payload/config'
import { Logo, Icon } from './components/Logo'
import Media from './collections/Media'
import Users from './collections/Users'
import Rewards from './collections/Rewards'
import Services from './collections/Services'
import Polls from './collections/Polls'
// import NFTs from './collections/NFTs'

const gqlDisabled =
  process.env.NODE_ENV === 'production' && process.env.PLAYGROUND !== 'true'

const collections = [
  Users,
  Services,

  // Add Collections here
  Media,
  Rewards,
  Polls,

  // Added initially but disabled for now
  // NFTs,
]

const slugs = collections.map((c) => c.slug)
export type HeirCollection = typeof slugs[number]

const config = buildConfig({
  serverURL: process.env.SERVER_URL,
  collections,
  graphQL: {
    disablePlaygroundInProduction: gqlDisabled,
  },
  admin: {
    user: Users.slug,
    components: { graphics: { Logo, Icon } },
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})

export default config
