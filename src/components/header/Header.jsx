import { createContext, useEffect, useState } from 'react'
import logo from '../../assets/Logo.svg'
import Sidebar, { links } from '../sidebar/Sidebar';
import { useTranslation } from 'react-i18next'

export const dataTrasnfer = createContext()

const Header = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [trans, setTrans] = useState(false)
  const { t, i18n } = useTranslation(['header'])
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir()
    setTrans(!trans)
    localStorage.setItem('trans', JSON.stringify(trans))
  }

  return (
    <>
      <header className='pt-10 header relative'>
        <span className='absolute rounded-full w-36 h-36 bg-[#FC3314] max-lg:w-20 max-lg:h-20 -z-10 left-[32%] top-[-40px]'></span>
        <div className={`flex items-center justify-between`}>
          <img onClick={() => changeLanguage(i18n.language === 'fa_IR' ? 'en_US' : 'fa_IR')} src={logo} alt="logo" />
          <ul className='flex gap-8 font-bold text-[1.125rem]'>
            {
              links.map((link, index) => <Li text={t(link.title)} href={link.href} key={index + 1} />)
            }
          </ul>
          <button type='button' className='w-[127px] h-12 bg-[#1F1F1F] text-slate-50 font-bold'>{t("Let's Talk")}</button>
          <div div className="ham hidden flex-col gap-1 w-8" onClick={() => setIsTrue(!isTrue)}>
            <div className='h-1 rounded-md bg-black'></div>
            <div className='h-1 rounded-md bg-black'></div>
            <div className='h-1 rounded-md bg-black'></div>
          </div>
        </div>
      </header >
      <dataTrasnfer.Provider value={{ isTrue, setIsTrue }}>
        <Sidebar />
      </dataTrasnfer.Provider>
    </>
  )
}

const Li = ({ text, href }) => {
  return (
    <a className='links relative cursor-pointer py-4 myTest' href={href}>
      {text}
      <span className='underline absolute top-[73%] left-0 h-[3px] w-0 bg-[#FC3314]'></span>
    </a>
  )
}

export default Header