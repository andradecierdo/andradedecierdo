import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ILoadingComponent {
  label: string
  increment: number
  redirection: string
  completed(): void
}

export function Loading({ label, redirection, increment, completed }: ILoadingComponent ) {
  const [percentage, setPercentage] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => (prevPercentage >= 100 ? increment : prevPercentage + increment))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (percentage >= 100) {
      completed()
      navigate(redirection)
    }
  }, [percentage])

  return (
    <div className="loading">
      <div className="loading-bar" style={{width: `${percentage}%`}}/>
      <div className="loading-label color secondary">{ label }</div>
    </div>
  )
}
