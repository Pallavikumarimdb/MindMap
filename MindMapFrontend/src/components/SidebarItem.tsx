import { ReactElement } from "react";

export function  SidebarItem({text, icon, setcontText }: {
    text: string;
    icon: ReactElement;
    setcontText:any;
}) {

    const handleClick = (text: string) => {
        //@ts-ignore
        setcontText(text);
      };
    
    return <div 
    onClick={() => handleClick(text)}
    className="flex text-slate-400 py-2 cursor-pointer hover:bg-gray-200 hover:text-gray-800 rounded max-w-48 pl-4 transition-all duration-150">
        <div className="pr-2">
            {icon}
        </div>
        <div>
         {text}
        </div>
        <hr />
    </div>
}
