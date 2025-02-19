'use client'
import { ReactElement } from "react";

export function SidebarItem({ text, icon }: {
    text?: string;
    icon: ReactElement;
}) {
    return <div
        className="flex  tracking-tight text-slate-300 py-2 my-2 cursor-pointer hover:bg-blue-600/15 hover:text-black rounded  pl-4 transition-all duration-150">
        <div className="pr-2">
            {icon}
        </div>
        <div>
            {text}
        </div>
        <hr />
    </div>
}
