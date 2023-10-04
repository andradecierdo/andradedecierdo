import { IProject } from './project'
import { ICompany } from './company'
import { IPosition } from './position'

export interface IExperience {
  id: number
  userId: number
  companyId: string
  company: ICompany
  projects: IProject[]
  positions: IPosition[]
  startDate: Date
  endDate?: Date
}
