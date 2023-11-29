import React from 'react'
import { useProfile } from '../context/ProfileContext'
import { ProfessionalExperience } from '../components/experience/ProfessionalExperience'
import { ProfileBanner } from '../components'

export function MainProfile() {
  const { user: { bannerCover, title, firstName, lastName, overview, experiences } } = useProfile()

  return (
    <div className="profile-main">
      <ProfileBanner
        coverPhoto={bannerCover}
        name={`${firstName} ${lastName}`}
        title={title}
        overview={overview}
      />

      <div className="scroll-component main experience-container">
        <div className="timeline">
          { experiences.map((experience, index) => {
            return (
              <div key={index} className="timeline-container item">
                <ProfessionalExperience  experience={experience} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
