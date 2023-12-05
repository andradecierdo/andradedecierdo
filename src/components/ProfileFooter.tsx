import React from 'react'
import { SocialMediaIcon } from './SocialMediaIcon'

interface IProfileFooterSocialMedia {
  link: string
  iconClass: string
}

interface IProfileFooterComponent {
  cvFilePath: string
  cvFileName: string
  socialMedia: IProfileFooterSocialMedia[]
}

export function ProfileFooter({ cvFileName, cvFilePath, socialMedia }: IProfileFooterComponent ) {
  return (
    <div className="profile-footer">
      <button className="cv label sub">
        <a
          href={cvFilePath}
          target="_blank"
          download={cvFileName}
          rel="noreferrer">
          <strong>
            Download CV <i className="fa fa-download"/>
          </strong>
        </a>
      </button>
      <div>
        { socialMedia.map(({ link, iconClass }, index) => {
          return <SocialMediaIcon key={index} link={link} iconClass={iconClass} />
        })}
      </div>
    </div>
  )
}
