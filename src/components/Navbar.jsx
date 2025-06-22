import React from 'react'
import { TbFileCv } from "react-icons/tb";
import { NavLink } from 'react-router';


function Navbar() {
  return (
    <div className='fixed z-[999] bg-zinc-900 w-full px-20 pt-8 flex justify-between items-center'>

      <div className='logo'>
        <NavLink className='logo text-[3vw] font-serif' to="/"><h1>Dipanshu</h1></NavLink>
      </div>


      <div className='links flex gap-10'>
        
        <ul className='links flex gap-10 text-lg capitalize font-light'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li>
            <div className='ml-20 border-[1px] items-center bg-emerald-600 border-emerald-400 rounded-[1vw] px-4 py-2'>
              <button className='flex gap-3 leading-tight'><a href="https://drive.google.com/file/d/1ZteCBni7mQ02W7aJsbWNb8ec7ZHFGCjJ/view?usp=drive_link">Resume </a> <TbFileCv /></button>
            </div>
          </li>
        </ul>

      </div>
    </div>
  )
}


export default Navbar