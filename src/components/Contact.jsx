import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";


import { motion } from "framer-motion";

function Contact() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2">
        <div className='contact font-bold text-[3vw] items-center flex justify-center '>
            <span className=' mt-[20vh] flex gap-3 leading-tight'>GET IN TOUCH <MdConnectWithoutContact /></span>
        </div>

        <div className='phone flex justify-evenly px-8 py-20'>
            <a href="tel:+919753577264"><div className='linkCon flex gap-3 leading-tight text-3xl'><FaPhoneSquareAlt /></div></a>
            <a href="https://dipanshuharode890@gmail.com"><div className='linkCon flex gap-3 leading-tight text-3xl'><MdEmail /></div></a>
            <a href="https://www.linkedin.com/in/dipanshu-harode-14805a258/"><div className='linkCon flex gap-3 leading-tight text-3xl'><FaLinkedin /></div></a>
            <a href="https://github.com/dipanshuharode890"><div className='linkCon flex gap-3 leading-tight text-3xl'><FaSquareGithub /></div></a>
            <a href="https://x.com/DipanshuHarode?s=09"><div className='linkCon flex gap-3 leading-tight text-3xl'><FaSquareXTwitter /></div></a>
        </div>

        <div className='text-[4.5vw] flex gap-10 overflow-hidden whitespace-nowrap'>
          <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease:"linear", duration:3}}>💻 By Dipanshu Harode</motion.h1>
          <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease:"linear", duration:3}}>💻 By Dipanshu Harode</motion.h1>
          <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease:"linear", duration:3}}>💻 By Dipanshu Harode</motion.h1>
        </div>

        <div className='hr border-t-[1px] border-emerald-400 mt-[7vh] py-5'></div>

    </div>
  )
}

export default Contact