import React from 'react'
import { Avatar } from './Avatar'

interface IProfilePage {
  photo: string
  firstName: string
  lastName: string
  title: string
  loaded: boolean
  onProfileClick: () => void
}

export function Profile({ photo, lastName, firstName, title, loaded, onProfileClick }: IProfilePage) {
  return (
    <div className="profile-card">
      <Avatar photo={photo} onProfileClick={() => onProfileClick()}/>
      { loaded &&
        <div className="mt-2">
          <div className="name color primary">
            {firstName} {lastName}
          </div>
          <div className="color secondary">
            {title}
          </div>
        </div>
      }
    </div>
  )
}
