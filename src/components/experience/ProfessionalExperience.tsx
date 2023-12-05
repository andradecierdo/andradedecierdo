import React from 'react'
import { IExperience } from '../../models'
import { CompanyBanner } from '../company/CompanyBanner'
import { ProjectBanner } from '../company/ProjectBanner'
import { useProfile } from '../../context/ProfileContext'

interface IProfessionalExperience {
  experience: IExperience
}

export function ProfessionalExperience({ experience }: IProfessionalExperience) {
  const { company, projects, position, startDate, endDate } = experience
  const { getSkills } = useProfile()

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
        skills={getSkills(company.skills || []).map(o => o.name)}
        responsibilities={company.responsibilities}
        website={company.website} />

      { !!projects?.length &&
        <div className="project-label-container">
          <div className="ribbon-label">
            Projects / Clients
          </div>
        </div>
      }
      { !!projects?.length &&
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
                  responsibilities={responsibilities}
                  skills={getSkills(skills).map(o => o.name)}
                  website={website} />
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}
