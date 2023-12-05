import React from 'react'

interface ISocialIconComponent {
  link: string
  iconClass: string
}

export function SocialMediaIcon({ link, iconClass }: ISocialIconComponent) {
  return (
    <a href={link} target="_blank" className="text-hover">
      <i className={iconClass}/>
    </a>
  )
}
