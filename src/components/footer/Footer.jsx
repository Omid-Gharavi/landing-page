import footerLogo from '../../assets/footerLogo.svg'
import { links } from '../sidebar/Sidebar'
import socialLinks from '../../assets/socialLinks.svg'

const Link = ({ href, title }) => {
    return (
        <a className='text-white font-bold text-[20px] transition-all duration-[0.3s] ease-in-out hover:text-[#FC3314]' href={href}>{title}</a>
    )
}

const Footer = () => {
    return (
        <div className="bg-[#1F1F1F] py-20 flex flex-col gap-16 items-center">
            <div className='flex max-2xl:flex-col justify-center items-center gap-[120px]'>
                <div className='flex gap-8'>
                    {
                        links.map((list, index) => {
                            return (
                                index <= 1 && <Link href={list.href} title={list.title} />
                            )
                        })
                    }
                </div>
                <div>
                    <img src={footerLogo} alt="logo" />
                </div>
                <div className='flex gap-8'>
                    {
                        links.map((list, index) => {
                            return (
                                index > 1 && <Link href={list.href} title={list.title} />
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex flex-col gap-8 items-center'>
                <p className='text-purple-50 select-none'>Follow me on social media:</p>
                <div>
                    <img src={socialLinks} alt="Social-Links" />
                </div>
            </div>
        </div>
    )
}

export default Footer