export enum SkillType {
  frontend,
  backend,
  database,
  devOps,
}

export interface ISkill {
  id: number
  name: string
  level: number
  description?: string
  types: SkillType[]
}
