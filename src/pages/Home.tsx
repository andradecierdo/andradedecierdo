import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProfile } from '../context/ProfileContext'
import { Profile } from '../components'

export function Home() {
  const [percentage, setPercentage] = useState(5)
  const {
    user: { firstName, lastName, photo, title },
    loaded,
    setLoaded,
  } = useProfile()
  const navigate = useNavigate()

  // TODO separate loading component and logic
  useEffect(() => {
    if (!loaded) {
        const interval = setInterval(() => {
        setPercentage((prevPercentage) => (prevPercentage >= 100 ? 4 : prevPercentage + 4));
      }, 50)

      return () => clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (!loaded && percentage >= 100) {
      setLoaded(true)
      navigate('/profile')
    }
  }, [percentage, loaded])


  const handleProfileClick = (): void => {
    if (loaded) {
      navigate('/profile')
    }
  }

  return (
    <div className="p-5">
      <Profile
        loaded={loaded}
        firstName={firstName}
        lastName={lastName}
        photo={photo}
        title={title}
        onProfileClick={handleProfileClick}
      />
      { !loaded &&
        <div className="loading">
          <div className="loading-bar" style={{width: `${percentage}%` }}/>
          <div className="loading-label color secondary">loading...</div>
        </div>
      }
    </div>
  )
}
