import React from 'react'

export interface Access {}

export interface Admin {
  readOnly: boolean
  components: Access
}

export interface AccessLevel {
  permission: boolean
}

export interface Permissions {
  create: AccessLevel
  read: AccessLevel
  update: AccessLevel
  delete: AccessLevel
  readVersions: AccessLevel
}

export interface Props {
  name: string
  label: string
  type: string
  min: number
  defaultValue: number
  admin: Admin
  hooks: Access
  access: Access
  path: string
  fieldTypes: Access
  permissions: Permissions
}

export const CustomField: React.FC<Props> = () => {
  return <span>TODO: Implement this as needed</span>
}
