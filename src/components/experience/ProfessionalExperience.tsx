import React from 'react'
import { IExperience } from '../../models'
import { CompanyBanner } from '../company/CompanyBanner'
import { ProjectBanner } from '../company/ProjectBanner'

interface IProfessionalExperience {
  experience: IExperience
}

export function ProfessionalExperience({ experience }: IProfessionalExperience) {
  const { company, projects, position, startDate, endDate } = experience

  return (
    <div className="professional-experience">
      <CompanyBanner
        name={company.name}
        address={company.address}
        details={company.details}
        logo={company.logo}
        startDate={startDate}
        endDate={endDate}
        title={position.name}
        website={company.website} />
        <div className="projects-container">
          { projects.map((project, index) => {
            const { name, address, description, skills, startDate, endDate, responsibilities, website, logo } = project
            return (
              <div key={index}>
                <ProjectBanner
                  name={name}
                  address={address}
                  details={description}
                  logo={logo}
                  startDate={startDate}
                  endDate={endDate}
                  skills={skills.map(o => o.name)}
                  website={website} />
              </div>
            )
          })}
        </div>
    </div>
  )
}
