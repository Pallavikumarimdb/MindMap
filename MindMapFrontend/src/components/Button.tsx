import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
    className?:string
}

const variantClasses = {
    "primary": "px-4 bg-[#7f56d9]  text-slate-100 md:text-base md:font-bold tracking-tight",
    "secondary": "px-4 bg-slate-300 text-grey-950 md:text-base md:font-bold tracking-tight",
};

const defaultStyles = "pt-1 pb-1 pl-2 pr-2 h-10 rounded-lg font-light flex items-center";


export function Button({ variant, text, startIcon, onClick, fullWidth, loading}: ButtonProps) {
    return <button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles + `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45	" : ""}`} disabled={loading}>
        <div className="hidden md:block pr-1">
            {startIcon}
        </div>
        {text}
    </button>
}