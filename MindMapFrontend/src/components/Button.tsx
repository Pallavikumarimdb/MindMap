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
    "primary": "h-12 bg-gray-600 text-slate-300 md:text-base md:font-medium tracking-tight",
    "secondary": "h-12 bg-slate-300 text-grey-950 md:text-base md:font-bold tracking-tight",
};

const defaultStyles = "pt-1 pb-1 pl-2 pr-2 h-10 rounded-md font-light flex items-center";


export function Button({className, variant, text, startIcon, onClick, fullWidth, loading}: ButtonProps) {
    return <button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles + `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45	" : ""}`} disabled={loading}>
        <div className="hidden md:block pr-1">
            {startIcon}
        </div>
        {text}
    </button>
}