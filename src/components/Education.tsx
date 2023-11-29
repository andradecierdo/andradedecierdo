import React  from 'react'
import { getSchoolYearLabel } from '../utils/DateLabel'

interface IEducationComponent {
  degree: string
  website: string
  school: string
  address: string
  startDate: Date
  endDate?: Date
}

export function Education({ degree, address, startDate, school, website, endDate }: IEducationComponent ) {
  return (
    <div className="education">
      <div className="">
        { degree }
      </div>
      <div className="label sub text-hover">
        <a href={website} target="_blank">
          { school } { getSchoolYearLabel(startDate, endDate) }
        </a>
      </div>
      <div className="label sub">
        { address }
      </div>
    </div>
  )
}
