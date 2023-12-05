import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProfile } from '../context/ProfileContext'
import { Loading, Profile } from '../components'

export function Home() {
  const {
    user: {
      firstName,
      lastName,
      photo,
      title,
    },
    loaded,
    setLoaded,
  } = useProfile()

  const navigate = useNavigate()

  const handleProfileClick = (): void => {
    if (loaded) {
      navigate('/profile')
    }
  }

  const handleLoadingComplete = (): void => {
    setLoaded(true)
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
      <Loading
        increment={4}
        completed={handleLoadingComplete}
        label={'loading...'}
        redirection={'/profile'} /> }
    </div>
  )
}
