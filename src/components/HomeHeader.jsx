import { IoApps } from "react-icons/io5"

const HomeHeader = () => {
    return (
        <header className="h-20 flex justify-between md:justify-end items-center gap-4 px-5">
            <div className="flex gap-4">
                <span className="text-black/[0.87] text-lg line-height hover:underline cursor-pointer">
                    Gmail
                </span>
                <span className="text-black/[0.87] text-lg line-height hover:underline cursor-pointer">
                    Images
                </span>
            </div>

            <div className="flex gap-2">
                <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                    <IoApps size={22} color='gray' />
                </span>

                <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </span>
            </div>
        </header>
    )
}

export default HomeHeader
