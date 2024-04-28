
import { useTranslation } from 'react-i18next'
import diamond from '../../assets/diamond.svg'
import loop from '../../assets/loop.svg'
import search from '../../assets/search.svg'
import task from '../../assets/task.svg'

const Services = () => {
    const { t } = useTranslation(['header'])

    const items = [
        {
            img: diamond,
            title: 'Design',
            txt: 'DesignDes',
        },
        {
            img: loop,
            title: 'Branding',
            txt: "BrandingDes",
        },
        {
            img: search,
            title: 'UX-Research',
            txt: 'uxResearchDes',
        },
        {
            img: task,
            title: 'Usability-Testing',
            txt: 'usabilityTestingDes',
        },
    ]

    return (
        <div className="bg-white py-16 flex flex-col justify-center items-center max-lg:px-4" id='Services'>
            <p className="text-center font-bold text-[36px]">{t('Services')}</p>
            <p className="text-center mt-6 max-w-[810px]">{t('ServiceDescription')}</p>
            <div className="flex flex-wrap max-lg:justify-center mt-8 gap-12">
                {
                    items.map((item, index) => <Item img={item.img} title={t(`${item.title}`)} txt={t(`${item.txt}`)} key={index + 1} />)
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