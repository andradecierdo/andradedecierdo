import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Avatar, SocialIcon } from '../components'
import { useProfile } from '../context/ProfileContext'
import { useNavigate } from 'react-router-dom'

export function Portfolio() {
  const { user, } = useProfile()
  const navigate = useNavigate()
  const handleAvatarClick = (): void => {
    navigate('/')
  }

  const getSchoolYearLabel = (starDate: Date, endDate?: Date): string => {
    const endYear = endDate?.getFullYear() || 'Current'
    return `(${starDate.getFullYear()} - ${endYear})`
  }

  return (
    <Container className="portfolio vh-100">
      <Row className="h-100">
        <Col className="mx-4 side-info">
          <div className="top">
            <div className="avatar-container">
              <div className="thumbnail m-auto">
                <Avatar photo={user.photo} onProfileClick={() => handleAvatarClick()}/>
              </div>
            </div>
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
            <div className="skills">
              { user.mainSkills.map((skill, index) => {
                return (
                  <div key={index} className="skills-container">
                    <div className="label">
                      <div className="name">{ skill.name}</div>
                      {/*<div className="percentage-label">{ skill.level }%</div>*/}
                    </div>
                    <div className="percentage">
                      <div className="line" style={{width: `${skill.level}%` }}/>
                    </div>
                  </div>
                )
              })}
              <div className="other-skills">
                { user.skills.map((skill, index) => {
                  return (
                    <div key={index} className="other-skill">
                      <i className="fa fa-check"/>
                      { skill.name }
                    </div>
                  )
                })}
              </div>
            </div>
            <hr/>
            <div className="education">
              { user.education.map((education, index) => {
                return (
                  <div key={index}>
                    <div className="">
                      { education.degree}
                    </div>
                    <div className="label sub text-hover">
                      <a href={education.website} target="_blank">
                        { education.school } { getSchoolYearLabel(education.startDate, education.endDate) }
                      </a>
                    </div>
                    <div className="label sub">
                      { education.address }
                    </div>
                  </div>
                )
              })}
            </div>
            <hr/>
            <div className="awards ">
              { user.awards.map((award, index) => {
                return (
                  <div key={index}>
                    <i className="fa fa-circle"/>
                    { award.title }
                  </div>
                )
              })}
            </div>
          </div>

          <div className="social">
            <SocialIcon
              link="https://github.com/andradecierdo"
              iconClass="fa fa-github" />
            <SocialIcon
              link="https://www.linkedin.com/in/andrade-chris-decierdo/"
              iconClass="fa fa-linkedin-square" />
          </div>
        </Col>
        <Col className="mx-4 main-info">Main</Col>
      </Row>
    </Container>
  )
}
