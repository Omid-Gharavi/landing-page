import footerLogo from '../../assets/footerLogo.svg'
import { links } from '../sidebar/Sidebar'

const Footer = () => {
    return (
        <div className="bg-[#1F1F1F] py-20 flex flex-col gap-16 items-center">
            <div className='flex max-2xl:flex-col justify-center items-center gap-[120px]'>
                <div className='flex gap-8'>
                    {
                        links.map((list, index) => {
                            return (
                                index <= 1 && <a className='text-white font-bold text-[20px]' href={list.href}>{list.title}</a>
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
                                index > 1 && <a className='text-white font-bold text-[20px]' href={list.href}>{list.title}</a>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <p>Follow me on social media:</p>
            </div>
        </div>
    )
}

export default Footer