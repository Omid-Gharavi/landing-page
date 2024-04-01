import { useContext } from 'react'
import { dataTrasnfer } from '../header/Header'

const Sidebar = () => {
    const switchBar = useContext(dataTrasnfer)
    const { isTrue, setIsTrue } = switchBar

    return (
        <>
            <div className='hidden max-lg:block'>
                <div className={`absolute z-20 top-0 left-0 w-[260px] h-full bg-green-500 transition-all ease-in-out duration-[0.3s] ${isTrue ? 'translate-x-0' : 'translate-x-[-260px]'}`}></div>
                <div
                    className={`absolute inset-0 z-10 bg-[#00000065] transition-all ease-in-out duration-[0.3s] ${isTrue ? 'visible opacity-100' : 'invisible opacity-0'}`}
                    onClick={() => setIsTrue(!isTrue)}
                ></div>
            </div>
        </>
    )
}

export default Sidebar