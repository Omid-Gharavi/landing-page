
const Skills = () => {
    const lists = [
        {
            title: 'Interaction Design',
            amount: '60',
        },
        {
            title: 'Usability Testing',
            amount: '70',
        },
        {
            title: 'User Research',
            amount: '45',
        },
        {
            title: 'Figma',
            amount: '95',
        },
        {
            title: 'Prototyping',
            amount: '80',
        },
        {
            title: 'Information Architecture',
            amount: '50',
        },
    ]

    return (
        <div className="mt-[90px] flex items-center flex-col max-lg:px-2">
            <p className="font-bold text-[36px]">Core Design Skills</p>
            <p className="mt-6 max-w-[810px] text-center">I excel in essential design skills, creating visually stunning and functional digital experiences. From UI design to UX research, my passion is to craft effective and memorable digital solutions.</p>
            <div className="mt-16 flex flex-wrap justify-center gap-[120px] max-lg:gap-2 w-full max-w-[1064px]">
                <div className="flex flex-col gap-2 w-full max-w-[420px]">
                    {
                        lists.map((list, index) => index <= 2 && <Skill title={list.title} amount={list.amount} key={index + 1} />)
                    }
                </div>
                <div className="flex flex-col gap-2 w-full max-w-[420px]">
                    {
                        lists.map((list, index) => index > 2 && <Skill title={list.title} amount={list.amount} key={index + 1} />)
                    }
                </div>
            </div>
        </div>
    )
}

const Skill = ({ title, amount }) => {
    return (
        <div>
            <span className="font-bold">{title}</span>
            <div className="mt-2 flex items-center gap-4">
                <div className="w-full max-w-[420px] h-[5px] bg-[#E1E1E1]">
                    <div className={`bg-[#1F1F1F] w-[${amount}%] h-full`}></div>
                </div>
                <span className="font-bold">{amount}%</span>
            </div>
        </div >
    )
}

export default Skills