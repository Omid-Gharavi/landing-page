import React from 'react'
import hero from '../../assets/hero.svg'

const Hero = () => {
    return (
        <div className='mt-8 flex flex-wrap justify-between items-center'>
            <div className=''>
                <p className='text-[20px]'>UX Designer</p>
                <p className='text-[48px] font-bold'>Hi There, I’m<br /><span className='text-[#FC3314]'>Sarah Jones</span></p>
                <p className='min-w-full w-[457px]'>Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.</p>
            </div>
            <div>
                <img src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default Hero