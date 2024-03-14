import { Link } from "react-router-dom"
import Search from "./Search"
import { IoApps, IoLocationOutline } from "react-icons/io5"
import { IoIosSearch, IoMdMore } from "react-icons/io"
import { MdOutlineDescription, MdOutlineImage, MdOutlineLocalOffer } from "react-icons/md";

const headerOptions = [
    { icon: IoIosSearch, url: 'All' },
    { icon: MdOutlineDescription, url: 'News' },
    { icon: MdOutlineImage, url: 'Images' },
    { icon: MdOutlineLocalOffer, url: 'Shopping' },
    { icon: IoLocationOutline, url: 'Maps' },
    { icon: IoMdMore, url: 'More' },
];

const ResultPageHeader = () => {
    return (
        <div className="px-5 sticky top-0 z-10 bg-white pb-3 border border-gray-200">
            <div className="py-5 sm:py-0 sm:flex items-center justify-between space-x-5">
                <div className="flex flex-col sm:flex-row sm:items-center">
                    {/* logo */}
                    <div className="mx-auto sm:mr-8">
                        <img className="h-11 sm:mt-6" src="https://ppc.co/wp-content/uploads/2021/01/Google.png" alt="Logo" />
                    </div>

                    {/* searchbar */}
                    <Search hideButtons />
                </div>

                <div className="sm:mt-5 flex items-center space-x-4 relative">
                    <IoApps className="hidden sm:block" size={22} color='gray' />

                    {/* avatar */}
                    <span className="absolute h-10 w-10 right-2 top-[-125px] rounded-full overflow-hidden bg-gray-100">
                        <svg className="sm:hidden h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </span>

                    <span className="hidden sm:inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </span>
                </div>
            </div>

            <div className="sm:mt-5 flex space-x-5 overflow-x-scroll sm:overflow-x-hidden relative">
                {
                    headerOptions.map((option, index) => (
                        <>
                            <div key={index} className='flex space-x-1 items-center text-gray-600'>
                                <option.icon size={20} />
                                <Link to={'#'}>{option.url}</Link>
                            </div>
                        </>
                    ))
                }

                <div className="text-gray-600">
                    <Link to={'#'}>Tools</Link>
                </div>
            </div>
        </div>
    )
}

export default ResultPageHeader
