import { Link } from "react-router-dom"
import SearchInput from "./SearchInput"
import { IoApps } from "react-icons/io5"
import { useState } from "react";
import { menu } from "../utils/Constants"

const SearchResultHeader = () => {

    const [selectedMenu, setSelectedMenu] = useState("All");

    const clickHandler = (menuItem) => {
        setSelectedMenu(menuItem.name);
    };

    return (
        <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center grow">
                    <Link to="/">
                        <img
                            className="hidden md:block w-[92px] mr-10"
                            src={'/logo.webp'}
                            alt="Logo"
                        />
                    </Link>
                    <SearchInput />
                </div>
                <div className="hidden md:block">
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
                </div>
            </div>

            <div className="flex ml-[-12px] mt-3">
                {menu.map((menuItem, index) => (
                    <span
                        key={index}
                        className={`flex items-center p-3 cursor-pointer relative ${selectedMenu === menuItem.name ? "text-[#1a73e8]" : "text-[#5f6368]"}`}
                        onClick={() => clickHandler(menuItem)}
                    >
                        <span className="hidden md:block mr-2">
                            {menuItem.icon}
                        </span>
                        <span className="text-sm">{menuItem.name}</span>
                        {selectedMenu === menuItem.name && (
                            <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]" />
                        )}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default SearchResultHeader
