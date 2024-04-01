import { useContext } from 'react'
import { dataTrasnfer } from '../header/Header'

const Sidebar = () => {
    const switchBar = useContext(dataTrasnfer)
    const { isTrue, setIsTrue } = switchBar

    return (
        <>
            <div className={`absolute z-20 top-0 left-0 w-[260px] h-full bg-green-500 transition-all ease-in-out duration-[0.3s] ${isTrue ? 'translate-x-[-260px]' : 'translate-x-0'}`}></div>
            <div
                className={`absolute inset-0 z-10 bg-[#00000065] transition-all ease-in-out duration-[0.3s] ${isTrue ? 'invisible opacity-0' : 'visible opacity-100'}`}
                onClick={() => setIsTrue(!isTrue)}
            ></div>
        </>
    )
}

export default Sidebar