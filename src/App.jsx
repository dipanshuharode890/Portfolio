import { Route, Routes } from 'react-router'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Eyes from './components/Eyes'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import LocomotiveScroll from 'locomotive-scroll';
import Home from './components/Home'
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
        <div className='bg-zinc-900 h-screen w-full text-white'>

          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/timeline' element={<Timeline/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        
         <SpeedInsights />
        </div>
    </>  
  )
}

export default App


// SHA256:XDAxgBEBGbi9Xt2Ls55FaO8tk7zwpTRUtyRyYHAjrho dipanshuharode890@gmail.com