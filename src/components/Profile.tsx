import React from 'react'

interface IProfilePage {
  photo: string
  firstName: string
  lastName: string
  title: string
}

export function Profile({ photo, lastName, firstName, title }: IProfilePage) {
  return (
    <div className="profile-card">
      <div className="container m-auto">
        <button>
          <img
            className="w-100"
            src={photo}
            alt="Profile Picture"
          />
        </button>
      </div>
      <div className="mt-2">
        <div className="text-lg font-color primary">
          { firstName } { lastName }
        </div>
        <div className="text-sm">
          { title }
        </div>
      </div>
    </div>
  )
}
