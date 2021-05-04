import React from 'react'

export default function Emoji({ icon }) {
  return (
    <>
      <span role="img" aria-label="emoji">
        {icon}
      </span>{' '}
    </>
  )
}
