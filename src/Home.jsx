import { Link } from 'react-router-dom'
import Search from './components/Search'
import { IoApps } from "react-icons/io5";
import Footer from './components/Footer';

const Home = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-between sm:justify-end items-center py-4 px-5 space-x-4">
                <div className='space-x-4'>
                    <Link to="/" className='hover:underline text-lg'>Gmail</Link>
                    <Link to="/" className='hover:underline text-lg'>Images</Link>
                </div>

                <div className='flex items-center justify-center space-x-4'>
                    <IoApps size={22} color='gray' />

                    <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </span>
                </div>
            </div>

            <div className="flex flex-col items-center mt-24 justify-center">
                <div>
                    <img className="h-[80px] sm:h-[89px] w-[250px] sm:w-[273px]" src="https://ppc.co/wp-content/uploads/2021/01/Google.png" alt="google Logo" />
                </div>

                <Search />
            </div>

            <Footer />
        </div>
    )
}

export default Home
