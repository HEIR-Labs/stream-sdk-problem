import { PayloadRequest } from 'payload/types'
import { User } from '../payload-types'

type AccessHandler = (args: {
  req: Omit<PayloadRequest, 'user'> & { user: User }
}) => boolean

/**
 * Determines whether a user either has:
 * - had their email listed in the env variable `ADMINS`
 * - been **given** the role of `admin` _(by another admin)_
 *
 * This env var and util is necessary for `admin` role to account
 * for the case of **first** user with `admin` role who otherwise will
 * not be able to assign themselves as `admin` role 🙃
 */
const _isAdmin = (user: User) => {
  return (
    (process.env.ADMINS?.split(',') || []).includes(user.email) ||
    user.role === 'admin'
  )
}

export const hasRole = (role: User['role']) =>
  (({ req: { user } }) => _isAdmin(user) || user.role === role) as AccessHandler

export const isAdmin: AccessHandler = ({ req: { user } }) => _isAdmin(user)

const restrictAllAccessWithHandler = (h: AccessHandler) => ({
  create: h,
  read: h,
  update: h,
  delete: h,
})

/**
 * Allows full access **only** to users with `admin` role
 */
export const adminOnlyAccess = restrictAllAccessWithHandler(isAdmin)

/**
 * Allows full access only to users with **at least** the given `role`
 */
export const fullAccessWithRole = (role: User['role']) => {
  return restrictAllAccessWithHandler(hasRole(role))
}
