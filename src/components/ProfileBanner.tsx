import React from 'react'

interface IProfileBannerComponent {
  coverPhoto: string
  name: string
  title: string
  overview: string
}

export function ProfileBanner({ coverPhoto, name, title, overview }: IProfileBannerComponent ) {
  return (
    <div className="profile-banner-container">
      <div className="photo" >
        <img
          src={coverPhoto}
          alt="Banner Cover Photo"
        />
        <div className="info">
          <div className="name">
            { name }
          </div>
          <div className="position">
            { title }
          </div>
          <div className="overview">
            { overview }
          </div>
        </div>
      </div>
    </div>
  )
}
