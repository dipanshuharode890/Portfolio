import React from 'react'
import { SiHyperskill } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAxios } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { BiLogoNetlify } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";


function Skills() {
    return (
        <div>
            <div className=' skil font-bold text-[3vw] items-center flex justify-center'>
                <span className='hite mt-[20vh] flex gap-3 leading-tight'>Skills <SiHyperskill /></span>
            </div>
            <div className='skill flex justify-evenly py-10'>
                <div className='skills w-[20vw] h-[10vh] border border-emerald-400 px-20 py-10 font-semibold text-3xl items-center flex justify-center '>
                    <span className='flex gap-3 leading-tight'>HTML <FaHtml5 /></span>
                </div>
                <div className='skills w-[20vw] h-[10vh] border border-emerald-400 px-20 py-10 font-semibold text-3xl items-center flex justify-center'>
                    <span className='flex gap-3 leading-tight'>CSS <FaCss3Alt/></span>
                </div>
                <div className='skills w-[20vw] h-[10vh] border border-emerald-400 px-20 py-10 font-semibold text-3xl items-center flex justify-center'>
                    <span className='flex gap-3 leading-tight'>JavaScript <IoLogoJavascript /></span>
                </div>
            </div>
            <div className='skill flex justify-evenly py-10'>
                <div className='skills w-[20vw] h-[10vh] border border-emerald-400 px-20 py-10 font-semibold text-3xl items-center flex justify-center'>
                    <span className='flex gap-3 leading-tight'>React <FaReact /></span>
                </div>
                <div className='skills w-[20vw] h-[10vh] border border-emerald-400 px-20 py-10 font-semibold text-3xl items-center flex justify-center'>
                    <span className='flex gap-3 leading-tight'>Redux <SiRedux /></span>
                </div>
                <div className='skills w-[20vw] h-[10vh] border border-emerald-400 px-20 py-10 font-semibold text-3xl items-center flex justify-center'>
                    <span className='flex gap-3 leading-tight'>TailwindCss <RiTailwindCssFill /></span>
                </div>
            </div>
            <div className='skill flex justify-evenly py-10'>
                <div className='skills w-[20vw] h-[10vh] border border-emerald-400 px-20 py-10 font-semibold text-3xl items-center flex justify-center'>
                    <span className='flex gap-3 leading-tight'>FireBase <IoLogoFirebase /></span>
                </div>
                <div className='skills w-[20vw] h-[10vh] border border-emerald-400 px-20 py-10 font-semibold text-3xl items-center flex justify-center'>
                    <span className='flex gap-3 leading-tight'>Axios <SiAxios /></span>
                </div>
                <div className='skills w-[20vw] h-[10vh] border border-emerald-400 px-20 py-10 font-semibold text-3xl items-center flex justify-center'>
                    <span className='flex gap-3 leading-tight'>Vite <SiVite/></span>
                </div>
            </div>

            <div className='skill flex justify-evenly py-10'>
                <div className='skills w-[20vw] h-[10vh] border border-emerald-400 px-20 
                py-10 font-semibold text-3xl items-center flex justify-center'>
                    <span className='flex gap-3 leading-tight'>Bootstrap <FaBootstrap /></span>
                </div>
                <div className='skills w-[20vw] h-[10vh] border border-emerald-400 px-20 
                py-10 font-semibold text-3xl items-center flex justify-center'>
                    <span className='flex gap-3 leading-tight'>Netlify <BiLogoNetlify /></span>
                </div>
                <div className='skills w-[20vw] h-[10vh] border border-emerald-400 px-20 
                py-10 font-semibold text-3xl items-center flex justify-center'>
                    <span className='flex gap-3 leading-tight'>Github <FaGithub /></span>
                </div>
            </div>
            <div className='hr border-t-[1px] border-emerald-400 mt-20 py-5'></div>
        </div>
    )
}

export default Skills