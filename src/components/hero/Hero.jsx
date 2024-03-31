import React from 'react'
import hero from '../../assets/hero.svg'

const Hero = () => {
    return (
        <div className='mt-8 flex flex-wrap justify-between max-lg:justify-center items-center'>
            <div className='flex flex-col max-lg:items-center'>
                <p className='text-[20px]'>UX Designer</p>
                <p className='text-[48px] font-bold max-lg:text-[2rem]'>Hi There, I’m<br /><span className='text-[#FC3314]'>Sarah Jones</span></p>
                <p className='max-w-[457px] max-lg:text-center'>Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.</p>
            </div>
            <div>
                <img src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default Hero