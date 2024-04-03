import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";

export const menu = [
    { name: "All", icon: <GoSearch /> },
    { name: "Images", icon: <BsImage size={14} /> },
    { name: "News", icon: <BiNews /> },
    { name: "Videos", icon: <RiVideoLine /> },
    { name: "Shopping", icon: <SlTag size={14} /> },
];

export const quickLinks = [
    "About",
    "Advertising",
    "Business",
    "How Search works",
];
export const settingMenu = ["Privacy", "Terms", "Settings"];
