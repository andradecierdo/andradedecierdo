import React, { createContext, ReactNode, useContext, useState } from 'react'
import { IUserDetails } from '../models'
import { myProfile } from '../data/user'

type ProfileProviderProps = {
  children: ReactNode
}

type ProfileContext = {
  user: IUserDetails
  loaded: boolean
  setLoaded: (value: boolean) => void
}

const ProfileContext = createContext({} as ProfileContext)

export function useProfile() {
  return useContext(ProfileContext)
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [loaded, setLoaded] = useState(false)
  const user = myProfile

  const value: ProfileContext = {
    user,
    loaded,
    setLoaded,
  }

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  )
}
