import readMore from '../../assets/readMore.svg'
import blog1 from '../../assets/blog1.svg'
import blog2 from '../../assets/blog2.svg'
import blog3 from '../../assets/blog3.svg'

const Blog = () => {
    const lists = [
        {
            img: blog1,
            date: 'August 15, 2023 / UX',
            title: 'Typography Tips for Design Success',
            text: 'Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs.',
        },
        {
            img: blog2,
            date: 'August 15, 2023 / UX',
            title: 'Color Psychology in UX',
            text: 'Explore how color choices impact user emotions and decision-making in UX design.',
        },
        {
            img: blog3,
            date: 'August 15, 2023 / UX',
            title: 'Boosting UX with Microinteractions',
            text: 'Discover the power of microinteractions in enhancing user experience and engagement.',
        },
    ]

    return (
        <div className="py-[90px] max-lg:px-2 bg-[#F7F7F7]" id='Blog'>
            <div className="flex flex-col items-center text-center">
                <p className="font-bold text-[36px]">Design Insights and Inspiration</p>
                <p className="mt-4 max-w-[800px]">Discover industry insights, expert tips, and design inspiration. Stay updated with the latest trends in web design and user experience.</p>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-[92px]">
                {
                    lists.map((list, index) =>
                        <Cards img={list.img} date={list.date} title={list.title} text={list.text} key={index + 1} />
                    )
                }
            </div>
        </div>
    )
}

const Cards = ({ img, date, title, text }) => {
    return (
        <div className='w-[336px] bg-[#FFFFFF]'>
            <div><img src={img} alt="Blog" /></div>
            <div className='pt-8 px-4 pb-4 flex flex-col h-[266px]'>
                <div className="flex flex-col gap-2 select-none">
                    <p className='text-[12px]'>{date}</p>
                    <p className='font-bold'>{title}</p>
                    <p className='text-[14px]'>{text}</p>
                </div>
                <div className='flex items-center gap-[13px] cursor-pointer w-max mt-auto'>
                    <p className='font-bold text-[12px] select-none'>Read More</p>
                    <img src={readMore} alt="Read-More" />
                </div>
            </div>
        </div>
    )
}

export default Blog