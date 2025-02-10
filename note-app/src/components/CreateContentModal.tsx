'use client'
import { useRef, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { X } from "lucide-react";

enum ContentType {
    General= "general",
    Youtube = "youtube",
    Twitter = "twitter"
}

//@ts-ignore
export function CreateContentModal({open, onClose}) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);
    const link1 = linkRef.current?.value;

    //@ts-ignore
    async  function extractYouTubeVideoID(link2) {

        if (type === "twitter") {
            const match = link2.match(/(?:https?:\/\/)?(?:www\.)?x\.com\/(.*?\/status\/\d+)/);
            if (match) {
                return (match[1]);
            }
        }

        
        if (type === "youtube" || "general") {
        return linkRef.current?.value;
    }
      }



    async function addContent() {
        const title = titleRef.current?.value;
        const linkTwit = linkRef.current?.value;
        const link = title==="youtube" || "twitter" ? await extractYouTubeVideoID(link1) : linkTwit;
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })

        onClose();

    }


    return <div>
        {open && 
            <div> 
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex ">
            </div>
            <div className="z-10 w-screen h-screen fixed top-0 left-0 flex p-10 ml-[30%] mt-[10%]">
                <div className="flex flex-col ">
                    <span className="rounded-2xl bg-gray-700 opacity-100 p-6 px-10 rounded fixed">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer w-6 mb-4">
                            <X />
                            </div>
                        </div>
                        <div className="px-8">
                            <Input reference={titleRef} placeholder={"Enter Title of Link"} />
                            <Input reference={linkRef} placeholder={"Enter Favourite Link"} />
                        </div>
                        <div>
                            <div className="mt-4 flex mt-6 gap-1 justify-center pb-2">
                                <button className="rounded-2xl bg-purple-300 text-purple-600 px-2 "  onClick={() => {
                                    setType(ContentType.Youtube)
                                }}>#Youtube</button>
                                <button className="rounded-2xl bg-purple-300 text-purple-600 px-2 gap-2"  onClick={() => {
                                    setType(ContentType.Twitter)
                                }}>#Twitter</button>
                                <button className="rounded-2xl bg-purple-300 text-purple-600 px-2 gap-2"  onClick={() => {
                                    setType(ContentType.General)
                                }}>#General</button>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <Button onClick={addContent} variant="primary" className="bg-slate-300"text="Submit" />
                        </div>
                    </span>
                </div>     
            </div>
            
        </div>}
    </div>

}
