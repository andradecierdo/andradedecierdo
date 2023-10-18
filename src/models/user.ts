import { IAward, ICertificate, IEducation, IExperience, IReference, IResume, ISkill } from './'

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
  resume: IResume
  bannerPhoto: string
  bannerCover: string
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
