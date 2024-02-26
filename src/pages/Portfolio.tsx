import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Avatar, Award, Education, OtherSkill, ProfileFooter, Skill } from '../components'
import { useProfile } from '../context/ProfileContext'
import { useNavigate } from 'react-router-dom'
import { MainProfile } from './MainProfile'

export function Portfolio() {
  const { user, getSkills } = useProfile()
  const navigate = useNavigate()
  const handleAvatarClick = (): void => {
    navigate('/')
  }

  return (
    <Container className="portfolio">
      <Row className="h-100">
        <div className="side-info column">
          <div className="top">
            <div className="avatar-container">
              <div className="thumbnail m-auto">
                <Avatar photo={user.photo} onProfileClick={() => handleAvatarClick()}/>
              </div>
            </div>
            <div className="name">{ user.firstName } { user.lastName }</div>
            <hr/>
            <div className="contact">
              <div>
                <i className="fa fa-phone" />
                { user.phone }
              </div>
              <div>
                <i className="fa fa-address-book"/>
                { user.city }, { user.country }
              </div>
              <div>
                <i className="fa fa-envelope"/>
                { user.email }
              </div>
            </div>
          </div>
          <div className="scroll-component side">
            <div className="skills-container">
              { getSkills(user.mainSkills).map((skill, index) => {
                return <Skill key={index} name={skill.name} level={skill.level} />
              })}
              <div className="other-skills">
                { getSkills(user.skills).map((skill, index) => {
                  return <OtherSkill key={index} name={skill.name} />
                })}
              </div>
            </div>
            <hr/>
            <div className="education-container">
              { user.education.map((education, index) => {
                return (
                  <Education
                    key={index}
                    startDate={education.startDate}
                    website={education.website}
                    address={education.address}
                    degree={education.degree}
                    school={education.school}
                    endDate={education.endDate}
                  />
                )
              })}
            </div>
            <hr/>
            <div className="awards">
              { user.awards.map((award, index) => {
                return <Award key={index} name={award.title}/>
              })}
            </div>
          </div>
          <ProfileFooter
            cvFilePath={user.resume.path}
            cvFileName={user.resume.fileName}
            socialMedia={user.socialMedia}
          />
        </div>
        <div className="main-info column">
          <MainProfile />
        </div>
      </Row>
    </Container>
  )
}
