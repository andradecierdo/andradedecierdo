export enum EducationLevel {
  elementary,
  secondary,
  tertiary,
}

export interface IEducation {
  id: number
  // userId: number
  degree: string
  school: string
  level: EducationLevel
  address: string
  startDate: Date
  endDate?: Date
  website: string
}
