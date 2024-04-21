
import diamond from '../../assets/diamond.svg'
import loop from '../../assets/loop.svg'
import search from '../../assets/search.svg'
import task from '../../assets/task.svg'

const Services = () => {
    const items = [
        {
            img: diamond,
            title: 'Design',
            txt: 'I specialize in web development and design, creating visually appealing, user-friendly digital experiences.',
        },
        {
            img: loop,
            title: 'Branding',
            txt: "I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.",
        },
        {
            img: search,
            title: 'UX Research',
            txt: '"I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.',
        },
        {
            img: task,
            title: 'Usability Testing',
            txt: 'I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.',
        },
    ]

    return (
        <div className="bg-white py-16 flex flex-col justify-center items-center max-lg:px-4" id='Services'>
            <p className="text-center font-bold text-[36px]">Services</p>
            <p className="text-center mt-6 max-w-[810px]">Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</p>
            <div className="flex flex-wrap max-lg:justify-center mt-8 gap-12">
                {
                    items.map((item, index) => <Item img={item.img} title={item.title} txt={item.txt} key={index + 1} />)
                }
            </div>
        </div>
    )
}

const Item = ({ img, title, txt }) => {
    return (
        <div className='flex flex-col gap-6'>
            <div>
                <img src={img} alt="image" />
            </div>
            <p className='font-bold text-[18px]'>{title}</p>
            <p className='text-[14px] max-w-[242px]'>{txt}</p>
        </div>
    )
}

export default Services