import React from 'react'

export const HeirLogo = ({ width }) => {
  return (
    <svg
      width={width}
      height={width * 2.18}
      viewBox="0 0 22 48"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      style={{ scale: 2 }}
    >
      <path d="M0 0V9H2V5.5H20V9H22V0H20V3.5H2V0H0Z" />
      <path d="M0 12H22V14H2V16H22V18H2V20H22V22H0V12Z" />
      <path d="M21.036 23.6142L0.035993 34.6142L0.964007 36.3858L21.964 25.3858L21.036 23.6142Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 38H18.4737C20.298 38 22 39.3031 22 41.25C22 42.6489 21.1212 43.7155 19.9498 44.205L21.8654 48H19.625L17.8583 44.5H2V48H0V38ZM2 42.5H18.4737C19.4398 42.5 20 41.8611 20 41.25C20 40.6389 19.4398 40 18.4737 40H2V42.5Z"
      />
    </svg>
  )
}

export const Logo = () => {
  return <HeirLogo width={40} />
}

export const Icon = () => {
  return <HeirLogo width={16} />
}
