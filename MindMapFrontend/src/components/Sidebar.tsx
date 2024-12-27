import { useState, Dispatch, SetStateAction } from "react";
import logo2 from "../assets/logo1.webp";
import Copy from "../assets/svg/Copy";
import TwitterIcon from "../assets/svg/TwitterIcon";
import { YoutubeIcon } from "../assets/svg/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { Link } from 'react-router-dom';

interface ContentType {
    NoteBook: string;
    Youtube: string;
    Twitter: string;
}

interface SidebarProps {
    ContentType: ContentType;
}

interface SidebarProps {
    ContentType: ContentType;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>; 
  }

export function Sidebar({ ContentType, isOpen, setIsOpen }: SidebarProps){

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    console.log(isOpen)

    return (
        <div
            className={`h-screen text-white bg-black border-r border-r-stone-600 fixed left-0 top-0 transition-all duration-300 ${isOpen ? 'w-72' : 'hidden'}`}
        >
            <div className="flex text-2xl m-4 mt-8 pt-4 pb-4 items-center font-semibold justify-center rounded-lg">
                <div className="pr-2 text-purple-600">
                    <img src={logo2} className="h-10 w-10 rounded-full" alt="" />
                </div>
                {isOpen && "Mind~Map"}
                <button onClick={toggleSidebar} className="w-10 ml-4 mt-3 item-center">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M15 6L9 12L15 18" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                </button>
            </div>
            <div className="border border-stone-600 pt-8 pl-0 m-4 mt-8 pt-4 pb-4 rounded-lg text-slate-400">
                <Link to="/dashboard/notebook">
                    <SidebarItem text={ContentType.NoteBook} icon={<Copy />} />
                </Link>
                <Link to="/dashboard/youtubetag">
                    <SidebarItem text={ContentType.Youtube} icon={<YoutubeIcon />} />
                </Link>
                <Link to="/dashboard/twittertag">
                    <SidebarItem text={ContentType.Twitter} icon={<TwitterIcon />} />
                </Link>
            </div>

            {/* Mobile Button to toggle sidebar */}
            <button
                className="absolute top-4 right-4 md:hidden text-white"
                onClick={toggleSidebar}
            >
                {isOpen ? 'Close' : 'Open'} Sidebar
            </button>
        </div>
    );
}
