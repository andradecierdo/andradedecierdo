import React from 'react'
import { useProfile } from '../context/ProfileContext'

export function MainProfile() {
  const { user } = useProfile()

  return (
    <div className="profile-main">
      <div className="banner-container">
        <div className="photo" >
          <img
            src={user.bannerCover}
            alt="Profile Picture"
          />
          <div className="info">
            <div className="name">
              { user.firstName } { user.lastName }
            </div>
            <div className="position">
              { user.title }
            </div>
            <div className="overview">
              { user.overview }
            </div>
          </div>
        </div>
      </div>

      <div className="experience-container">...</div>
    </div>
  )
}