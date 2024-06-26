import React from 'react'
import hero from '../../assets/hero.png'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const { t } = useTranslation(['header'])

    const trans = JSON.parse(localStorage.getItem('trans'))

    return (
        <div className={`mt-24 flex flex-wrap justify-between max-2xl:justify-center`}>
            <div className={`flex flex-col max-lg:items-center`}>
                <p className='text-[20px]'>{t('UX')}</p>
                <p className={`text-[48px] font-bold max-lg:text-[2rem] ${!trans && 'max-2xl:text-center'}`}>{t('title')}<br /><span className='text-[#FC3314]'>{t('titleName')}</span>{t('end')}</p>
                <p className='max-w-[457px] max-lg:text-center'>{t('description')}</p>
                <div className='flex max-lg:justify-center gap-5 mt-5 w-full'>
                    <button className='blackBtn' type='button'>{t('Let\'s Talk')}</button>
                    <button button className='whiteBtn' type='button' > {t('Portfolio')}</button>
                </div>
            </div>
            <div>
                <img src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default Hero