import { IExperience } from './experience'
import { IAward } from './award'
import { ICertificate } from './certificate'
import { IReference } from './reference'
import { IEducation } from './education'
import {ISkill} from "./skill";

export interface IUser {
  id: number
  firstName: string
  lastName: string
  title: string
  phone: string
  email: string
  address: string
  city: string
  country: string
  overview: string
  photo: string // path to photo
  resume?: string // path to resume
}

export interface IUserSkill {
  id: number
  // userId: number
  skillId: number
  startDate: Date
  endDate?: Date
}

export interface IUserDetails extends IUser {
  experiences: IExperience[]
  awards: IAward[]
  certificates: ICertificate[]
  references: IReference[]
  // skills: IUserSkill[]
  mainSkills: ISkill[]
  skills: ISkill[]
  education: IEducation[]
}
