import React from 'react'

interface ISocialIconComponent {
  link: string
  iconClass: string
}

export function SocialIcon({ link, iconClass }: ISocialIconComponent) {
  return (
    <a href={link} target="_blank" className="text-hover">
      <i className={iconClass}/>
    </a>
  )
}
