import React from 'react'
import { getDurationLabel } from '../../utils/DateLabel'

interface ICompanyBanner {
  name: string
  address: string
  details: string
  logo: string
  title: string
  startDate: Date
  responsibilities?: string[]
  skills?: string[]
  endDate?: Date
  website?: string
}

export function CompanyBanner({ name, address, details, logo, title, startDate, endDate, website, skills, responsibilities }: ICompanyBanner) {
  return (
    <div className="company-banner">
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
            <div className="position">
              <div className="title">{ title }</div>
              <div className="duration">{ getDurationLabel(startDate, endDate) }</div>
            </div>
          </div>
        </div>
        <div className="company-details">
          { skills?.length &&
            <div className="skill-list">
              { skills.map((skill, index) => <div key={index} className="skill-item">{ skill }</div>)}
            </div>
          }
          { details }
        </div>
        { responsibilities?.length &&
          <div className="responsibilities">
            <ul>
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="item">{responsibility}</li>
              ))}
            </ul>
          </div>
        }
      </div>
    </div>
  )
}
