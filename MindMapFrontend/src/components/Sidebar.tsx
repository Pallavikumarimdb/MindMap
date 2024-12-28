import { Dispatch, SetStateAction } from "react";
import logo2 from "../assets/logo1.webp";
import Copy from "../assets/svg/Copy";
import TwitterIcon from "../assets/svg/TwitterIcon";
import { YoutubeIcon } from "../assets/svg/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { Link } from "react-router-dom";

interface ContentType {
    NoteBook: string;
    Youtube: string;
    Twitter: string;
    Dashboard:string;
}

interface SidebarProps {
    ContentType: ContentType;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function Sidebar({ ContentType, isOpen, setIsOpen }: SidebarProps) {
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
        className={`z-10 fixed top-0 left-0 h-full overflow-hidden bg-gray-950 text-white border-r border-stone-600 transition-all ease-in-out duration-700`}
        style={{
          width: isOpen ? '14rem' : '3.9rem',
        }}
        >
            <div className="flex pr-2 mb-10">            {/* Toggle Button */}
            <div className="pt-8 flex justify-end pl-3 pr-2">
                <button
                    onClick={toggleSidebar}
                    className="w-10 h-10 flex "
                >
                    <svg
                    className="mb-0 "
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M4 7L7 7M20 7L11 7"
                                stroke="#bfc9d5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            ></path>
                            <path
                                d="M20 17H17M4 17L13 17"
                                stroke="#bfc9d5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            ></path>
                            <path
                                d="M4 12H7L20 12"
                                stroke="#804ad8"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            ></path>
                        </g>
                    </svg>
                </button>
            </div>


            
            {/* Logo Section */}
            <div className="flex items-center justify-between mt-4">
                {/* <img
                    src={logo2}
                    className={`h-10 w-10 rounded-full transition-opacity ${
                        isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    alt="Logo"
                /> */}
                {isOpen &&
                <div className="w-14">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"><path fill="#804ad8" d="M209.5 18.66c-7.4-.02-14.8 1.93-19.2 6.96-3.1 3.59-4.8 8.46 0 19.19 5.2 8.08 9.3 19.06 12.9 33.12l-17.9 4.66c-6.1-23.73-13.8-33-18.5-35.1-2.4-1.04-4.7-1.14-8.3 0-3.7 1.11-8.4 3.68-13.5 7.47-7.9 5.8-12.6 13.22-12.4 19.25 3.7 12.42 13.1 18.6 25 24.19l-8 16.8c-4.6-2.1-8.7-4.4-12.4-6.8-13.3-7.3-23.1-10.38-28-9.97-2.6.22-4.1.85-6 2.77-2 2-4.4 5.7-6.5 11.6-3.5 9.9-4 17.7-1.5 21.8 2 3.2 7.2 6.9 20.1 8.2 3.3.1 6.7.2 10.4.4v.1h1.1l.2 18.7c-3.8 0-7.3-.1-10.6-.4-11.1-.1-17.7.8-20.2 2.1-1.6.8-2.1 1.3-2.9 3-.9 1.8-1.8 5.1-2.4 10-.6 4.5-.2 7.6.7 9.8.9 2.1 2.1 3.6 5.3 5.3 6.5 3.5 21.7 5.8 47.3 3.7l1.5 18.6c-17.2 1.5-30.7 1.5-41.5-.5 4.7 15.1 14.5 21.9 25.7 21.9h94c10.6 0 19.8-7.7 23.4-22.1l8.1-32.1 9.9 31.6c4.7 14.8 14.2 22.6 23.5 22.6H383c11.2 0 21.1-6.9 25.7-22-10.9 2.1-24.6 2.1-42.4.6l1.6-18.6c25.6 2.1 40.7-.2 47.2-3.7 3.2-1.7 4.4-3.2 5.3-5.3 1.4-6.3 2.1-19.3-4.5-22.8-2.5-1.2-9.1-2.2-20.2-2.1-3.3.3-6.8.4-10.6.4l.2-18.7h1v-.1c3.8-.2 7.2-.3 10.4-.4 12.9-1.3 18.2-5 20.2-8.2 2.5-4.1 2-11.9-1.6-21.8-2.3-6.2-6-13.77-12.4-14.37-17.1 2.07-29.1 9.67-40.4 16.77l-8-16.8c4.4-1.98 7.7-4.22 11.7-6.56 10.2-6.88 13-13.02 13.3-17.63.2-6.03-4.6-13.45-12.4-19.25-5.2-3.79-9.8-6.35-13.5-7.47-3.6-1.11-6-1.01-8.3 0-1.7.72-3.7 2.34-5.8 5.09-5.7 9.01-10.4 21.31-12.7 30l-18.1-4.66c4.1-15.76 8.8-27.65 15-35.93 3.3-8.79 1.7-13.12-1.1-16.38-9.4-7.73-28.3-9.73-38.7-1.99-4.5 3.34-8.1 8.5-10.9 15-5.5 12.97-7.1 30.87-7.1 43.99v.1l-.2 30.79v.1h-18.6v-.1l-.2-30.83v-.1c0-13.12-1.6-31.02-7.2-44.03-2.7-6.5-6.3-11.66-10.8-15-4.5-2.86-12-4.86-19.4-4.88zm47.2 217.94c-7.9 10.7-19.4 17.6-32.8 17.6h-42.8c2 4.3 5.4 8.2 10 11.8 11.8 9 32.1 15 53.6 16.4l-.6.6c-7.9 8.5-33.2 6.5-48 .9-35-12.8-67.9-21.9-101.28-11.1-43.77 17.3-74.86 66.9-65.53 113.1 10.36 51.3 66.85 124.2 121.11 99.8 61.3-27.6 11.4-114.5-25.3-132.1 8.5 23.2 39.8 79.9 11.4 91.9-34.2 14.4-81.56-43.6-69.48-86.9 20.71-57.4 66.08-49.5 99.38-37.5 60.3 21.7 31.2 169.9 95.2 167.1 38.9-1.7 85.4-60.7 48.7-106.3 3.9 28.6-20.4 75.5-42.9 63.4-33.8-18.1 12.2-84.5 43.7-106.6 24.4-17.1 70.6-28.1 89.5-3.7 29.8 38.6-53.2 74.2-27.7 118.3 22.5 39 75.7 47.4 117.6-10.8-29.1 17.4-68.6 25.8-79.6 1.6-14.1-31.1 62.7-35.3 69.1-76 5.8-36.7-18.3-73.9-49.6-93.9-39.9-25.6-109.3 30.9-160.3 7.7 19.7-2.1 37.9-8.1 48.6-16.7 4.2-3.4 7.3-7 9.3-11h-39.2c-12.9 0-24.2-7-32.1-17.6z"></path></g></svg>
            </div>
                }
                {isOpen && <span className=" mt-5 text-2xl font-semibold text-slate-300">@Note</span>}
            </div>
            </div>

            {/* Navigation Items */}
            <div className="mt-20 space-y-4">
               <Link to="/dashboard/" className="animate-slidein300">
                    <SidebarItem
                        text={isOpen ? ContentType.Dashboard : ""}
                        icon={<div className="w-6 mt-1"><svg viewBox="0 0 24 24" id="meteor-icon-kit__regular-dashboard" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3V6C2 6.55228 2.44772 7 3 7H6C6.55228 7 7 6.55228 7 6V3C7 2.44772 6.55228 2 6 2H3ZM3 0H6C7.65685 0 9 1.34315 9 3V6C9 7.65685 7.65685 9 6 9H3C1.34315 9 0 7.65685 0 6V3C0 1.34315 1.34315 0 3 0ZM14 16H21C22.6569 16 24 17.3431 24 19V21C24 22.6569 22.6569 24 21 24H14C12.3431 24 11 22.6569 11 21V19C11 17.3431 12.3431 16 14 16ZM14 18C13.4477 18 13 18.4477 13 19V21C13 21.5523 13.4477 22 14 22H21C21.5523 22 22 21.5523 22 21V19C22 18.4477 21.5523 18 21 18H14ZM3 11H6C7.65685 11 9 12.3431 9 14V21C9 22.6569 7.65685 24 6 24H3C1.34315 24 0 22.6569 0 21V14C0 12.3431 1.34315 11 3 11ZM3 13C2.44772 13 2 13.4477 2 14V21C2 21.5523 2.44772 22 3 22H6C6.55228 22 7 21.5523 7 21V14C7 13.4477 6.55228 13 6 13H3ZM21 0C22.6569 0 24 1.34315 24 3V11C24 12.6569 22.6569 14 21 14H14C12.3431 14 11 12.6569 11 11V3C11 1.34315 12.3431 0 14 0H21ZM13 3V11C13 11.5523 13.4477 12 14 12H21C21.5523 12 22 11.5523 22 11V3C22 2.44772 21.5523 2 21 2H14C13.4477 2 13 2.44772 13 3Z" fill="#bfc9d5"></path></g></svg></div>}
                    />
                </Link>
                <Link to="/dashboard/notebook" className="animate-slidein500">
                    <SidebarItem
                        text={isOpen ? ContentType.NoteBook : ""}
                        icon={<Copy />}
                    />
                </Link>
                <Link to="/dashboard/youtubetag" className="animate-slidein700">
                    <SidebarItem
                        text={isOpen ? ContentType.Youtube : ""}
                        icon={<YoutubeIcon />}
                    />
                </Link>
                <Link to="/dashboard/twittertag" className="animate-slidein900">
                    <SidebarItem
                        text={isOpen ? ContentType.Twitter : ""}
                        icon={<TwitterIcon />}
                    />
                </Link>
            </div>
        </div>
    );
}
