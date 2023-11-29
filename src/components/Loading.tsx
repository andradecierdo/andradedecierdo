import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProfile } from '../context/ProfileContext'

interface ILoadingComponent {
  label: string
  redirection: string
}

export function Loading({ label, redirection }: ILoadingComponent ) {
  const [percentage, setPercentage] = useState(5)
  const { loaded, setLoaded } = useProfile()
  const navigate = useNavigate()

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
      navigate(redirection)
    }
  }, [percentage, loaded])

  return (
    <div className="loading">
      <div className="loading-bar" style={{width: `${percentage}%`}}/>
      <div className="loading-label color secondary">{ label }</div>
    </div>
  )
}
