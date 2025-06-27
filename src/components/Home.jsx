import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import About from './About'
import Timeline from './Timeline'
import Skills from './Skills'
import Eyes from './Eyes'
import Projects from './Projects'
import Contact from './Contact'

function Home() {
  return (
    <div>
        <Navbar/>
        <LandingPage/>
        <About/>
        <Timeline/>
        <Skills/>
        <Eyes/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home