import React from 'react'
import image from "./assets/image.png"
const LandingPage = () => {
    return (
        <div className='bg-[#00a218] flex  flex-row justify-center w-full'>
            <div className='w-[430px h-[1102px] relative'>
                <div className="w-[399px] h-[600px]">
                    <img className=' w-[300px] ' src={image} alt='Landing' />
                </div>
                <p className="absolute w-[327px] h-16 top-[575px] left-[52px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#ffffff] text-xl text-center tracking-[0] leading-8">
                    An unlimited membership designed uniquely for you.
                </p>
            </div>

            landingPage
        </div>
    )
}

export default LandingPage