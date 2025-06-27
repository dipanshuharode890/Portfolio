import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            
            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180)
        })
    })

    return (
        <div id='dataScroll' data-scroll data-scroll-section data-scroll-speed="1.5" className='eyes w-full h-[35vh] overflow-hidden mt-[7vh] mb-[7vh] items-center'>
            <div className='relative w-full h-[35vh]'>
                <div className='absolute flex gap-20 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>

                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-[3vw] h-[3vw] rounded-full bg-zinc-100 m-[1vw]'></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-[3vw] h-[3vw] rounded-full bg-zinc-100 m-[1vw]'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        
            
        </div>
    )
}

export default Eyes