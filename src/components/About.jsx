import React from 'react';
import { FcAbout } from "react-icons/fc";
import { BsBrowserEdge } from "react-icons/bs";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { RiFootballLine } from "react-icons/ri";
import { MdInterests } from "react-icons/md";


function About() {
    return (
        <div>
            <div className='about font-bold text-[3vw] items-center flex justify-center'>
                <h1 className='hite mt-[20vh]  flex gap-3 leading-tight'>About Me <FcAbout/></h1>
            </div>
            <div className='intro px-20 mt-10 text-2xl flex justify-center'>
                <p>Hi Everyone,
                    <br />  I,m Dipanshu Harode A Self Taught Frontend Developer from Dewas, Madhya Pradesh (India). <br />
                    I have completed my 1st. Year in Bcom Computer Application from Devi Ahilya Vishwavidyalaya, Indore (M.P). <br />
                    Later I discovered that my interest is in Tech & coding
                    and I started my coding Journey.</p>
            </div>
            <div className='interest px-20 mt-20 text-2xl flex justify-center'>
                <h1 className='flex gap-3 leading-tight'>Interests <MdInterests /> apart from Coding :</h1><br />
            </div>
            <div>
                <div>
                    <div className='font-bold text-2xl items-center flex justify-center mt-5'><span className='flex gap-3 leading-tight'>Travelling <BsGlobeCentralSouthAsia /></span></div>
                    <div className='font-bold text-2xl items-center flex justify-center mt-5'><span className='flex gap-3 leading-tight'>Playing Football <RiFootballLine /></span></div>
                    <div className='font-bold text-2xl items-center flex justify-center mt-5'><span className='flex gap-3 leading-tight'>Browsering <BsBrowserEdge /></span></div>
                </div>
            </div>
            <div className='hr border-t-[1px] border-emerald-400 mt-20 py-5'></div>
        </div>
    )
}

export default About

//data-scroll data-scroll-section data-scroll-speed="-0.2"