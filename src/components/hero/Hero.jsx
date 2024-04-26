import React from 'react'
import hero from '../../assets/hero.png'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const { t } = useTranslation(['header'])

    const trans = JSON.parse(localStorage.getItem('trans'))

    return (
        <div className={`mt-24 flex ${trans ? 'flex-row' : 'flex-row-reverse'} flex-wrap justify-between max-2xl:justify-center`}>
            <div className={`flex ${trans ? 'items-start' : 'items-end'} flex-col max-lg:items-center`}>
                <p className='text-[20px]'>{t('UX')}</p>
                <p className='text-[48px] font-bold max-lg:text-[2rem]'>{t('title')}<br /><span className='text-[#FC3314]'>{t('titleName')}</span>{t('end')}</p>
                <p className='max-w-[457px] max-lg:text-center'>Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.</p>
                <div className='flex max-lg:justify-center gap-5 mt-5 w-full'>
                    <button className='blackBtn' type='button'>Hire Me</button>
                    <button className='whiteBtn' type='button'>Portfolio</button>
                </div>
            </div>
            <div>
                <img src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default Hero