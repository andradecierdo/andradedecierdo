import React, { createContext, ReactNode, useContext } from 'react'
import { IUser } from '../models'
import { myProfile } from '../data/user'

type ProfileProviderProps = {
  children: ReactNode
}

type ProfileContext = {
  user: IUser
}

const ProfileContext = createContext({} as ProfileContext)

export function useProfile() {
  return useContext(ProfileContext)
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const user = myProfile

  const value: ProfileContext = {
    user
  }

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  )
}
