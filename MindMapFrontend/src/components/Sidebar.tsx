import { useState } from "react";
import logo2 from "../assets/logo1.webp" ;
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

export function Sidebar( { ContentType}: SidebarProps ) {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    
    return (
        <div className="h-screen text-white bg-black border-r border-r-stone-600 w-72 fixed left-0 top-0">
        <div className="border border-stone-600 flex text-2xl m-4 mt-8 pt-4 pb-4  items-center font-semibold justify-center  rounded-lg">
            <div className="pr-2 text-purple-600 ">
                <img src={logo2} className="h-10 w-10 rounded-full" alt="" />
            </div>
            Mind~Map

        </div>
        <div className="border border-stone-600 pt-8 pl-0 m-4 mt-8 pt-4 pb-4 rounded-lg text-slate-400">
            <Link to="/dashboard/notebook">
            <SidebarItem text={ContentType.NoteBook} icon={<Copy />} />
            </Link>
            <Link to="/dashboard/youtubetag">
            <SidebarItem text={ContentType.Youtube} icon={<YoutubeIcon/>} />
            </Link>
            <Link to="/dashboard/twittertag">
            <SidebarItem text={ContentType.Twitter} icon={<TwitterIcon/>} />
            </Link>
        </div>

        <button 
        className="absolute top-4 right-4 md:hidden text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>

      
    </div>
    )
}