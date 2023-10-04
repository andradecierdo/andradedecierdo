import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import { ProfileProvider } from './context/ProfileContext'
import { Home } from './pages/Home'

function App() {
  return (
    <div className="App bg-dark">
      <ProfileProvider>
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
      </ProfileProvider>
    </div>
  )
}

export default App
