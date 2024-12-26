import { ReactElement } from "react";

export function  SidebarItem({text, icon}: {
    text: string;
    icon: ReactElement;
}) {

    
    return <div 
    className="flex text-slate-400 py-2 cursor-pointer hover:bg-gray-200 hover:text-gray-800 rounded  pl-4 transition-all duration-150">
        <div className="pr-2">
            {icon}
        </div>
        <div>
         {text}
        </div>
        <hr />
    </div>
}
