import { IPosition } from './position'

export interface IProject {
  id: number
  companyId: number
  name: string
  description: string
  startDate: Date
  endDate: Date
  position: IPosition
  skills: number[]
  responsibilities: string[]
  website: string
  logo: string
  address: string
}
