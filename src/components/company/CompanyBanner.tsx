import React from 'react'

interface ICompanyBanner {
  name: string
  address: string
  details: string
  logo: string
  title: string
  startDate: Date
  endDate?: Date
  website?: string
}

export function CompanyBanner({ name, address, details, logo, title, startDate, endDate, website }: ICompanyBanner) {
  // TODO common, add to utility
  const getDateLabel = (d: Date): string => {
    return d.toLocaleString('default', { month: 'short', year: 'numeric' })
  }

  const getDurationLabel = (starDate: Date, endDate?: Date): string => {
    const endYear = endDate ? getDateLabel(endDate) : 'Current'
    return `(${getDateLabel(starDate)} - ${endYear})`
  }

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
          { details }
        </div>
      </div>
    </div>
  )
}
