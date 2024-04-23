import tele from '../../assets/telephon.svg'
import message from '../../assets/message.svg'
import location from '../../assets/location.svg'
import X from '../../assets/X.svg'
import instagram from '../../assets/instagram.svg'
import dribble from '../../assets/dribble.svg'
import facebook from '../../assets/Facebook.svg'
import { useRef } from 'react'

const Contact = () => {
    const inputRef = useRef()

    return (
        <div className="py-[124px] max-2xl:px-3 bg-[#FFD4D0] gap-[60px] flex flex-wrap justify-center">
            <div className="max-w-[566px]">
                <p className="font-bold text-[36px]">Get in Touch</p>
                <p className="mt-4">Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.</p>
                <div className='mt-16 flex flex-col gap-8'>
                    {
                        [
                            { img: tele, text: '+1205 5872 321' },
                            { img: message, text: 'contact@sarajonesdesign.com' },
                            { img: location, text: '1234 Design Street,Creativeville, Webland,Imaginary State, 98765' },
                        ].map((list, index) =>
                            <div className='flex items-center gap-4' key={index + 1}>
                                <div>
                                    <img src={list.img} alt="icon" />
                                </div>
                                <p>{list.text}</p>
                            </div>
                        )
                    }
                </div>
                <div className='mt-[60px]'>
                    <div className='flex gap-6'>
                        {
                            [X, instagram, dribble, facebook].map((list, index) =>
                                <div className='socialMedia' key={index + 1}><img src={list} alt='icon' className='icon' /></div>
                            )
                        }
                    </div>
                </div>
            </div>
            <form
                className='max-w-[566px] w-full grid gap-6 grid-cols-[repeat(1, minmax(0, 1fr))] grid-rows-[49px_49px_49px_168px]'
            >
                {
                    [
                        {
                            text: 'First name',
                            type: 'text',
                        },
                        {
                            text: 'Email',
                            type: 'email',
                        },
                        {
                            text: 'Phone number',
                            type: 'tel',
                            num: true,
                        },
                    ].map((list, index) =>
                        <input
                            ref={inputRef}
                            className='inputForm'
                            type={list.type}
                            placeholder={list.text}
                            onKeyPress={(e) => {
                                if (list.num) {
                                    const keyCode = e.keyCode || e.which;
                                    if (!((keyCode >= 48 && keyCode <= 57) || keyCode === 43)) {
                                        e.preventDefault();
                                    }
                                }
                            }}
                        />
                    )
                }
                < textarea id='myTextarea' className='py-[13px] px-4 resize-none' placeholder='Your message' />
                <button
                    type='button'
                    className='bg-[#1F1F1F] mt-2 text-white font-bold w-[223px] h-[48px]'
                    onClick={() => {
                        const myInput = inputRef.current.value
                        const pattern = /^\+?(\d{2})? ?(\d{3})? ?(\d{3})? ?(\d{4})?$/g
                        if (pattern.test(myInput)) {
                            console.log("True")
                        } else {
                            console.log("False")
                        }
                    }}
                >Send Message</button>
            </form>
        </div>
    )
}

export default Contact