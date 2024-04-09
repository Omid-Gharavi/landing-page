
const About = () => {
    const items = [
        {
            num: '502',
            title: 'Projects Done',
        },
        {
            num: '10+',
            title: 'Years of Experience',
        },
        {
            num: '273+',
            title: 'Clients Served',
        },
    ]

    return (
        <div className="relative overflow-hidden pb-[80px] bg-[#1F1F1F] min-h-[445px] flex flex-col pt-16 items-center max-lg:px-4" id="About">
            <span className="absolute w-56 h-56 bg-[#FC3314] rounded-full left-[50%] top-[397px] translate-x-[-50%] max-lg:hidden"></span>
            <div className="text-white text-center">
                <p className="font-bold text-[36px]">About Me</p>
                <p className="max-w-[810px] mt-6">I'm Sara Jones, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let's collaborate and shape the future of design together.</p>
            </div>
            <div className="mt-8 flex max-lg:flex-col max-lg:gap-7 justify-between items-center w-full max-w-[1064px]">
                {
                    items.map((item, index) => <Items num={item.num} title={item.title} key={index + 1} />)
                }
            </div>
        </div>
    )
}

const Items = ({ num, title }) => {
    return (
        <div className="flex flex-col items-center">
            <span className="text-[#FFD4D0] text-[64px] font-bold">{num}</span>
            <span className="text-white font-bold text-[18px]">{title}</span>
        </div>
    )
}

export default About