import React from 'react'
import { SiCodeproject } from "react-icons/si";


function Projects() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1">
            <div className=' project font-bold text-[3vw] items-center flex justify-center '>
                <span className='myproject mt-[25vh] flex gap-3 leading-tight'>Projects <SiCodeproject /></span>
            </div>
            <div className='projects prj flex justify-evenly gap-20 mt-10'>
                <div className='tml projects rounded-xl border border-emerald-500 w-[45vw] h-[auto] p-[2vw]'>
                    <div className='text-3xl  items-center'><h1>My Portfolio </h1></div>
                    <div className='p-3'><p>HTML, CSS, React JS, Tailwind Css, React-Router-Dom, Framer Motion, Locomotive Scroll</p></div>
                    <div className='px-3'><a href="https://dipanshuportfolio.vercel.app/">Link : dipanshuportfolio</a></div>
                    <div className='p-3'><span> Details :This portfolio website is built with HTML, CSS, React JS for a dynamic UI, and styled efficiently with Tailwind CSS. React-Router-Dom handles seamless navigation, while Framer Motion provides smooth, engaging animations. Locomotive Scroll delivers an enhanced, performant scrolling experience, creating a modern and visually appealing presentation of my work.  (add one creative thing in this project rotate eye on mouse move)</span></div>
                </div>

                <div className='tml projects rounded-xl border border-emerald-500 w-[45vw] h-[auto] p-[2vw]'>
                    <div className='text-3xl  items-center'><h1>Employee Task Management System</h1></div>
                    <div className='p-3'><p>HTML, CSS, React JS, Tailwind Css, Context, LocalStorage</p></div>
                    <div className='px-3'><a href="https://employee-task-management-system-chi.vercel.app/">Link : employee-task-management-system</a></div>
                    <div className='p-3'><span>Details :"This Employee Task Management System offers separate Admin and Employee logins. Admins can assign tasks and track their status (Complete, Pending, Failed). Employees view their dashboard with task counts (Active, Complete, New, Failed) and full task details. This streamlines workflow by centralizing task assignments and provides clear oversight for both management and staff.</span></div>
                </div>
            </div>

            <div className='projects prj flex justify-evenly gap-20 mt-10'>
                <div className='tml projects rounded-xl border border-emerald-500 w-[45vw] h-[auto] p-[2vw]'>
                    <div className='text-3xl  items-center'><h1>Country Project</h1></div>
                    <div className='p-3'><p>HTML, CSS, React JS, Axios, React-Router-Dom, </p></div>
                    <div className='px-3'><a href="https://country-project-kqq6.vercel.app/">Link : country-project</a></div>
                    <div className='p-3'><span>Details : This project is a dynamic web application built with HTML, CSS, and React JS that provides detailed information about countries. It leverages Axios to efficiently fetch data from a public API, displaying details such as flags, population, area, region, capital, currencies, languages, timezones, and neighboring countries. React-Router-Dom is used for seamless navigation, allowing users to explore different country profiles via unique URLs and potentially filter or search through the country list. This creates an interactive and informative user experience for exploring global data.</span></div>
                </div>

                <div className='tml projects rounded-xl border border-emerald-500 w-[45vw] h-[55vh] p-[2vw]'>
                    <div className='text-3xl  items-center'><h1>Image Slider</h1></div>
                    <div className='p-3'><p>HTML, CSS, React JS</p></div>
                    <div className='px-3'><a href="https://image-slider-seven-kappa.vercel.app/">Link : image-slider</a></div>
                    <div className='p-3'><span>Details : It's small project simple image slider make with react js </span></div>
                </div>
            </div>

            <div className='projects prj flex justify-evenly gap-20 mt-10'>
                <div className='tml projects rounded-xl border border-emerald-500 w-[45vw] h-[55vh] p-[2vw]'>
                    <div className='text-3xl  items-center'><h1>Stone Paper Scissors Game</h1></div>
                    <div className='p-3'><p>HTML, CSS, JavaScript </p></div>
                    <div className='px-3'><a href="https://lively-biscuit-4152c0.netlify.app/">Link : stone-paper-game</a></div>
                    <div className='p-3'><span>Details : Interesting Game of Stone Paper Scissors, creat from HTML, CSS, JavaScript, and it is responsive also.</span></div>
                </div>

                <div className='tml projects rounded-xl border border-emerald-500 w-[45vw] h-[55vh] p-[2vw]'>
                    <div className='text-3xl  items-center'><h1>Tic Tac Toe Game</h1></div>
                    <div className='p-3'><p>HTML, CSS, JavaScript</p></div>
                    <div className='px-3'><a href="https://lustrous-dieffenbachia-10652e.netlify.app/">Link : tic-toe-game</a></div>
                    <div className='p-3'><span>Details : Interesting Game of Tic-Tac-Toe  creat from HTML, CSS, JavaScript, and it is responsive also.</span></div>
                </div>
            </div>

            <div className='hr border-t-[1px] border-emerald-400 mt-20 py-5'></div>
        </div>
    )
}

export default Projects