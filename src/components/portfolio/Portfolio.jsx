
import portfolio from '../../assets/portfolio.svg'

const Portfolio = () => {
    const lists = [
        {
            img: portfolio,
            title: 'Educational Platform',
            category: ['Web Design', 'Usability Testing']
        },
        {
            img: portfolio,
            title: 'Travel App Design',
            category: ['UX Research', 'App Design']
        },
        {
            img: portfolio,
            title: 'Personal Page',
            category: ['Web Design']
        },
        {
            img: portfolio,
            title: 'Furniture Mobile App',
            category: ['App Design']
        },
        {
            img: portfolio,
            title: 'Coffee House Landing Page',
            category: ['UX Research', 'Web Design']
        },
        {
            img: portfolio,
            title: 'Home Services Page',
            category: ['Web Design', 'Marketing']
        },
    ]

    return (
        <div className='relative min-h-[940px]' id='Portfolio'>
            <div className='absolute w-full min-h-[318px] -z-30 bg-[#FFD4D0]'></div>
            <div className='px-2'>
                <div className='pt-[50px] flex flex-col items-center justify-center text-center'>
                    <p className='font-bold text-[36px]'>My Portfolio</p>
                    <p className='mt-6 max-w-[810px]'>Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</p>
                </div>
                <div className='mt-[42px] flex flex-wrap justify-center gap-16 max-lg:px-2'>
                    {
                        lists.map((list, index) => <Cards img={list.img} title={list.title} categories={list.category} key={index + 1} />)
                    }
                </div>
            </div>
        </div>
    )
}

const Cards = ({ img, title, categories }) => {
    return (
        <div className='max-w-[354px]'>
            <div>
                <img src={img} alt="portfolio" />
            </div>
            <p className='mt-8 font-bold text-[20px]'>{title}</p>
            <div className='flex justify-between items-center'>
                <p className='mt-4 text-[14px]'>
                    {
                        categories.map((item, index) => {
                            return `${index === 0 ? item : ` / ${item}`}`
                        })
                    }
                </p>
                <div className='w-[37.67px] h-[37.67px] bg-[#FC3314] rounded-full'></div>
            </div>
        </div>
    )
}

export default Portfolio