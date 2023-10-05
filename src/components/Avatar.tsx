import React from 'react'

interface IAvatarComponent {
  photo: string
  onProfileClick: () => void
}

export function Avatar({ photo, onProfileClick }: IAvatarComponent) {
  return (
    <div className="avatar">
      <div className="img-container m-auto">
        <button className="p-0 border-0" onClick={() => onProfileClick()}>
          <img
            className="w-100"
            src={photo}
            alt="Profile Picture"
          />
        </button>
      </div>
    </div>
  )
}
