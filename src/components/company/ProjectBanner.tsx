import React from 'react'

interface IProjectBanner {
  name: string
  address: string
  details: string
  logo: string
  skills: string[]
  startDate: Date
  endDate?: Date
  website?: string
}

export function ProjectBanner({ name, address, details, logo, skills, startDate, endDate, website }: IProjectBanner) {
  const getDateLabel = (d: Date): string => {
    return d.toLocaleString('default', { month: 'short', year: 'numeric' })
  }

  const getDurationLabel = (starDate: Date, endDate?: Date): string => {
    const endYear = endDate ? getDateLabel(endDate) : 'Current'
    return `(${getDateLabel(starDate)} - ${endYear})`
  }

  return (
    <div className="project-banner">
      <div className="banner-container">
        <div className="header">
          <div className="logo">
            <div className="img-container">
              <img src={logo} alt="Company Logo" />
            </div>
          </div>
          <div className="header-details">
            <div className="company">
              <div className="name">
                <a href={website} target="_blank" className="text-hover">
                  { name }
                </a>
              </div>
              <div className="address">
                { address }
              </div>
            </div>
            <div className="skills-details">
              <div className="duration">{ getDurationLabel(startDate, endDate) }</div>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="skill-list">
            { skills.map((skill, index) => <div key={index} className="skill-item">{ skill }</div>)}
          </div>
          { details }
        </div>
      </div>
    </div>
  )
}
