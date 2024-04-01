import { createContext, useEffect, useState } from 'react'
import logo from '../../assets/Logo.svg'
import Sidebar from '../sidebar/Sidebar';

export const dataTrasnfer = createContext()

const Header = () => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <>
      <header className='pt-10 header relative'>
        <span className='absolute rounded-full w-36 h-36 bg-[#FC3314] max-lg:w-20 max-lg:h-20 -z-10 left-[32%] top-[-40px]'></span>
        <div className='flex items-center justify-between'>
          <img src={logo} alt="logo" />
          <ul className='flex gap-8 font-bold text-[1.125rem]'>
            <li className='cursor-pointer py-4'>About</li>
            <li className='cursor-pointer py-4'>Services</li>
            <li className='cursor-pointer py-4'>Portfolio</li>
            <li className='cursor-pointer py-4'>Blog</li>
          </ul>
          <button type='button' className='w-[127px] h-12 bg-[#1F1F1F] text-slate-50 font-bold'>Let's Talk</button>
          <div className="ham hidden flex-col gap-1 w-8" onClick={() => setIsTrue(!isTrue)}>
            <div className='h-1 rounded-md bg-black'></div>
            <div className='h-1 rounded-md bg-black'></div>
            <div className='h-1 rounded-md bg-black'></div>
          </div>
        </div>
      </header>
      <dataTrasnfer.Provider value={{ isTrue, setIsTrue }}>
        <Sidebar />
      </dataTrasnfer.Provider>
    </>
  )
}

export default Header