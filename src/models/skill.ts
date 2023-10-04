export enum SkillType {
  frontend,
  backend,
  database,
  devOps,
}

export interface ISkill {
  id: number
  name: string
  description?: string
  types: SkillType[]
}
