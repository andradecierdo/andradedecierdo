import { ISkill } from './skill'

export interface ICompany {
  id: number
  name: string
  address: string
  details: string
  logo: string
  website?: string
  email?: string
  phone?: string
  skills?: ISkill[]
  responsibilities?: string[]
}
