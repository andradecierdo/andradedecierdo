import React, { createContext, ReactNode, useContext, useState } from 'react'
import { ISkill, IUserDetails } from '../models'
import { myProfile, skills as techSkills } from '../data'

type ProfileProviderProps = {
  children: ReactNode
}

type ProfileContext = {
  skills: ISkill[]
  user: IUserDetails
  loaded: boolean
  setLoaded: (value: boolean) => void
  getSkills: (skillIds: number[]) => ISkill[]
}

const ProfileContext = createContext({} as ProfileContext)

export function useProfile() {
  return useContext(ProfileContext)
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [skills] = useState<ISkill[]>(techSkills)
  const user = myProfile

  const getSkills = (skillIds: number[]): ISkill[] => {
    const skillsSet = new Set(skillIds)
    return skills.filter(o => skillsSet.has(o.id))
  }

  const value: ProfileContext = {
    user,
    skills,
    loaded,
    setLoaded,
    getSkills,
  }

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  )
}
