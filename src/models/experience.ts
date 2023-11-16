import { IProject } from './project'
import { ICompany } from './company'
import { IPosition } from './position'

export interface IExperience {
  id: number
  userId: number
  companyId: number
  company: ICompany
  projects: IProject[]
  position: IPosition
  startDate: Date
  endDate?: Date
}
