import { IPosition } from './position'
import { ISkill } from './skill'

export interface IProject {
  id: number
  name: string
  description: string
  startDate: Date
  endDate: Date
  position: IPosition
  skills: ISkill[]
  responsibilities: string[]
  website: string
  logo: string
  address: string
}
