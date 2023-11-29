import React from 'react'

interface IOtherSkillComponent {
  name: string
}

export function OtherSkill({ name }: IOtherSkillComponent ) {
  return (
    <div className="other-skill">
      <i className="fa fa-check"/>
      { name }
    </div>
  )
}
