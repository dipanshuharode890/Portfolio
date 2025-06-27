import React from 'react'

function LandingPage() {
    return (
        // <div data-scroll data-scroll-section data-scroll-speed="-0.4" className='pt-1 w-full h-screen '>
        <div className='pt-1 w-full'>
            <div className='tarif bg-zinc-900 flex justify-between mt-[10vw]'>
                <div className='tarif text-[2.5vw] font-semibold uppercase leading-relaxed px-10 w-1/2'>
                    <h1>Frontend Developer 🖥</h1>
                    <h1>A Creative Problem Solver</h1>
                    <h1>Code with Creativity</h1>
                    <h1 className='led text-[2vw]'>Crafting Seamless User Interfaces</h1>
                    <h1>Technical Writer</h1>
                </div>
                <p className='tariff w-1/2 text-[1.5vw] px-9'>I am a passionate and creative Frontend Developer specializing in building highly intuitive and visually engaging web applications. My focus is on crafting clean, reusable, and optimized code that ensures exceptional user experiences and robust performance. With proven problem-solving abilities, I thrive in collaborative team environments and am adept at delivering high-quality solutions for challenging projects, continually embracing new technologies.</p>
            </div>
            <div className='hr border-t-[1px] border-emerald-400 mt-20 py-5'></div>
        </div>
    )
}

export default LandingPage