import { useContext } from 'react'
import { dataTrasnfer } from '../header/Header'
import logo from '../../assets/Logo.svg';
import { useTranslation } from 'react-i18next';

export const links = [
    {
        title: 'About',
        href: '#About'
    },
    {
        title: 'Services',
        href: '#Services'
    },
    {
        title: 'Portfolio',
        href: '#Portfolio'
    },
    {
        title: 'Blog',
        href: '#Blog'
    },
]

const Sidebar = () => {
    const switchBar = useContext(dataTrasnfer)
    const { isTrue, setIsTrue } = switchBar
    const { t } = useTranslation(['header'])
    const trans = JSON.parse(localStorage.getItem('trans'))

    return (
        <>
            <div className={`max-lg:block hidden fixed z-20 top-0 ${trans ? 'left-0' : 'right-0'} w-[260px] h-full bg-slate-50 transition-all ease-in-out duration-[0.3s] ${isTrue ? 'translate-x-0 opacity-100' : `${trans ? 'translate-x-[-260px] opacity-0' : 'translate-x-[260px] opacity-0'}`}`}>
                <div className='px-4 pt-10'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={`h-[.1rem] bg-[#323232] transition-all ease-in-out duration-[1s] ${isTrue ? 'w-full' : 'w-[0%]'}`}></div>
                    <ul className='mt-5 flex flex-col gap-4 font-semibold text-[1.125rem]'>
                        {
                            links.map((link, index) => <Li txt={t(link.title)} href={link.href} trans={trans} key={index + 1} />)
                        }
                    </ul>
                </div>
            </div >
            <div
                className={`max-lg:block hidden fixed inset-0 z-10 bg-[#00000065] transition-all ease-in-out duration-[0.3s] ${isTrue ? 'visible opacity-100' : 'invisible opacity-0'}`}
                onClick={() => setIsTrue(!isTrue)}
            ></div>
        </>
    )
}

const Li = ({ txt, href, trans }) => {
    return (
        <a className={`bg-[#FFD4D0] px-2 py-1 relative`} href={href}>{txt}<span className={`absolute top-0 bottom-0 w-4 bg-[#FC3314] ${trans ? 'right-0' : 'left-0'}`}></span></a>
    );
};

export default Sidebar