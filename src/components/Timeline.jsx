import React from 'react'
import { MdOutlineTimeline } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { MdSupervisorAccount } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";


function Timeline() {
    return (
        // <div data-scroll data-scroll-section data-scroll-speed="-0.2">
        <div>
            <div className='exp font-bold text-[3vw] items-center flex justify-center'>
                <h1 className='flex gap-3 leading-tight'>MY TIMELINE <MdOutlineTimeline /></h1>
            </div>
            <div className='exper px-20 mt-10 text-3xl'>
                <span className='flex gap-3 leading-tight'>Computer Operator <FaComputer /></span>
                <div className='epxerence px-20 mt-2 text-[1.3rem]'>
                    <p>As a Computer Operator at Rajat Jewelers in Dewas, I managed billing operations using Acme Infinity Software, handled customer transactions, and supported sales activities for one year.</p>
                </div>
            </div> 
            <div className='exper px-20 mt-10 text-3xl'>
                <span className='flex gap-3 leading-tight'>Assistent Supervisor <MdSupervisorAccount /></span>
                <div className='epxerence px-20 mt-2 text-[1.3rem]'>
                    <p>As an Assistant Supervisor at Friends Enterprises in Dewas for two years, I collaborated closely with the supervisor in the manufacturing of vehicle parts (gears). My responsibilities included counting raw components, managing parts inventory and their storage locations, performing product marking, and conducting quality checks on final products before dispatch.</p>
                </div>
            </div>
            <div className='exper px-20 mt-10 text-3xl'>
                <span className='flex gap-3 leading-tight'>Executive <GrUserManager /></span>
                <div className='epxerence px-20 mt-2 text-[1.3rem]'>
                    <p>As an Executive at the Flipkart Warehouse (Return Center) in Indore for two years, I was responsible for processing customer product returns. My duties included thoroughly inspecting product conditions, entering acceptable items into the system, applying necessary tags, and ensuring their correct placement on designated racks. I also efficiently segregated and managed defective or unacceptable products in a dedicated area.</p>
                </div>
            </div>
            <div className='hr border-t-[1px] border-emerald-400 mt-20 py-5'></div>
        </div>
    )
}

export default Timeline