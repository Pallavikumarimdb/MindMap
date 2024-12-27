import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantClasses = {
    "primary": "bg-blue-400 text-slate-300 md:text-base md:font-medium tracking-tight",
    "secondary": "bg-gray-950 text-slate-300 md:text-base md:font-medium tracking-tight",
};

const defaultStyles = "px-2 py-1 rounded-md font-light flex items-center";


export function Button({variant, text, startIcon, onClick, fullWidth, loading}: ButtonProps) {
    return <button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles + `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45	" : ""}`} disabled={loading}>
        <div className="hidden md:block pr-1">
            {startIcon}
        </div>
        {text}
    </button>
}