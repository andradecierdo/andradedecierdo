import React from 'react'
import { useProfile } from '../context/ProfileContext'
import { Profile } from '../components/Profile'

export function Home() {
  const { user: { firstName, lastName, photo, title } } = useProfile()

  return (
    <div className="p-5">
      <Profile
        firstName={firstName}
        lastName={lastName}
        photo={photo}
        title={title}
      />
    </div>
  )
}
