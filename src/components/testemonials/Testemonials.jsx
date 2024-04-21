import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
import profile from '../../assets/profile.svg'
import rightArrow from '../../assets/rightArrow.svg'
import leftArrow from '../../assets/leftArrow.svg'
import 'swiper/css'
import 'swiper/css/navigation'

const Testemonials = () => {
    const lists = [
        {
            title: 'Testemonials',
            text: "Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
            img: profile,
            txtName: 'John Smith / CEO of XYZ Company',
        },
        {
            title: 'Testemonials',
            text: "Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
            img: profile,
            txtName: 'John Smith / CEO of XYZ Company',
        },
        {
            title: 'Testemonials',
            text: "Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
            img: profile,
            txtName: 'John Smith / CEO of XYZ Company',
        },
    ]

    return (
        <div className='relative mt-[90px] min-h-[414px] overflow-hidden bg-[#FFD4D0]'>
            <span className='absolute left-[50%] bottom-[353px] translate-x-[-50%] block w-[122px] h-[122px] rounded-full bg-[#FC3314]'></span>
            <div className='mt-[90px] relative'>
                <span className='max-lg:hidden absolute top-[50%] translate-y-[-50%] left-[137px] cursor-pointer' id='left'>
                    <img src={leftArrow} alt="left-arrow" />
                </span>
                <span className='max-lg:hidden absolute top-[50%] translate-y-[-50%] right-[137px] cursor-pointer' id='right'>
                    <img src={rightArrow} alt="right-arrow" />
                </span>
                <Swiper
                    className='max-w-[1000px] overflow-hidden'
                    slidesPerView={1}
                    navigation={{ nextEl: '#right', prevEl: '#left' }}
                    modules={[Navigation]}
                >
                    {
                        lists.map((list, index) =>
                            <SwiperSlide>
                                <Container title={list.title} text={list.text} img={list.img} txtName={list.txtName} key={index + 1} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    )
}

const Container = ({ title, text, img, txtName }) => {
    return (
        <div className='flex gap-8 flex-col items-center justify-center'>
            <p className='font-bold text-[36px]'>{title}</p>
            <p className='max-w-[760px] text-center'>{text}</p>
            <div className='flex items-center gap-4'>
                <div><img src={img} alt="Profile" /></div>
                <p>{txtName}</p>
            </div>
        </div>
    )
}

export default Testemonials