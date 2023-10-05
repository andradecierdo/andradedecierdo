import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProfileProvider } from './context/ProfileContext'
import { Home, Portfolio } from './pages'
import './App.scss'

function App() {
  return (
    <div className="portfolio-app bg dark">
      <ProfileProvider>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/portfolio' Component={Portfolio} />
        </Routes>
      </ProfileProvider>
    </div>
  )
}

export default App
