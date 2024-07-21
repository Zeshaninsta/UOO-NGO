import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './Pages/Home'
import About from './Pages/About'
import Vision from './Pages/Vision'
import Backgrounds from './components/Background'
import ParticlesBackground from './components/ParticleBackground'

const App = () => {
  return (
    <div className='min-h-screen'>
        <Navigation />
        <Home />
        <About />
        <Vision />
        {/* <Backgrounds /> */}
    </div>
  )
}

export default App