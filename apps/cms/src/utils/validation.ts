import { Reward } from '../payload-types'
import * as lists from './lists'

export const slug = (value: string) => {
  return (
    /^([a-z0-9][a-z0-9]*)(-[a-z0-9]+)*$/.test(value) ||
    'Page name must be lowercase and can only contain hyphens and lowercase letters.'
  )
}

const sixRingsId = lists.huddleOptions.find(
  ({ label }) => label === '6 RINGS'
).value

export const is6rings = (data: Reward) => {
  return data.huddleId === sixRingsId
}

export const isSolanaAddress = (val: string) => {
  const length = val?.length || 0
  // Regex still matches when string exceeds 44 🤔
  return /[0-9a-z]{44}$/i.test(val) && length === 44
    ? true
    : `Value must be a solana wallet address (44 alpha-numeric chars) you entered ${length} chars`
}
