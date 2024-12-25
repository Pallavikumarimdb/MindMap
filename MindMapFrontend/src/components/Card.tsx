import { ShareIcon } from "../assets/svg/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube" | "general";
}

export function Card({title, link, type}: CardProps) {
    return <div>
        <div className="p-4 bg-white rounded-md border-gray-200   border min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon />
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon />
                    </div>
                </div>
            </div>

            <div className="pt-4">
                
                {type === "youtube" && <iframe className="w-full" src={`https://www.youtube.com/embed/${link}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={`https://twitter.com/${link}`}></a> 
                </blockquote>}

                {type === "general" && <div>
                    {link}
                </div>}
            </div>
        </div>
    </div>
}
