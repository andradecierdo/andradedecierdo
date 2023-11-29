import React from 'react'

interface ISkillComponent {
  name: string
  level: number
}

export function Skill({ name, level }: ISkillComponent ) {
  return (
    <div className="skills">
      <div className="label">
        <div className="name">{ name }</div>
      </div>
      <div className="percentage">
        <div className="line" style={{width: `${level}%` }}/>
      </div>
    </div>
  )
}
