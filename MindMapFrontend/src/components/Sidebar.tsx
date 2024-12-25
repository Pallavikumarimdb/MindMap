import logo2 from "../assets/logo1.webp" ;
import Copy from "../assets/svg/Copy";
import TwitterIcon from "../assets/svg/TwitterIcon";
import { YoutubeIcon } from "../assets/svg/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

//@ts-ignore
export function Sidebar( {setcontText, ContentType1 }) {
    return (
        <div className="h-screen text-white bg-black border-r border-r-stone-600 w-72 fixed left-0 top-0">
        <div className="border border-stone-600 flex text-2xl m-4 mt-8 pt-4 pb-4  items-center font-semibold justify-center  rounded-lg">
            <div className="pr-2 text-purple-600 ">
                <img src={logo2} className="h-10 w-10 rounded-full" alt="" />
            </div>
            Mind~Map

        </div>
        <div className="border border-stone-600 pt-8 pl-4 m-4 mt-8 pt-4 pb-4  rounded-lg text-slate-400">
            <SidebarItem text={ContentType1.General} icon={<Copy />} 
            //@ts-ignore
            setcontText={setcontText}/>
            <SidebarItem text={ContentType1.Youtube} icon={<YoutubeIcon/>} 
            //@ts-ignore
            setcontText={setcontText}
            />
            <SidebarItem text={ContentType1.Twitter} icon={<TwitterIcon/>} 
            //@ts-ignore
            setcontText={setcontText}
            />
            
            
        </div>
    </div>
    )
}