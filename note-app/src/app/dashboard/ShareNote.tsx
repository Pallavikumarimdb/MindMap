'use client'
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/Button";
import { X } from "lucide-react";

//@ts-ignore
export default function ShareNote({ open1, onClose1 }) {
    const [shareLink, setShareLink] = useState("");
    
    const handleShare = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            console.error("No authorization token found");
            return;
          }
      
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/brain/share`,
            { share: true },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
      
          const shareLink = typeof window !== "undefined" ? window.location.origin : "";
          setShareLink(`${shareLink}/brain/${response.data.hash}`);
        } catch (error) {
          console.error("Failed to generate share link:", error);
        }
      };


    return (
        <div>
            {open1 &&

                <div>
                    <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex ">
                    </div>
                    <div className="z-10 w-screen h-screen fixed top-0 left-0 flex p-10 ml-[30%] mt-[10%]">
                        <div className="flex flex-col ">
                            <span className="  bg-gray-700 opacity-100 p-6 px-10 rounded-2xl fixed">

                                <div className="flex justify-end">
                                    <div onClick={onClose1} className="cursor-pointer w-6 mb-4">
                                    <X />
                                    </div>
                                </div>

                                <div className="flex  justify-center">
                                    <div className="text-center rounded-xl border p-8">
                                        <h1 className="text-2xl mb-10 font-bold text-slate-200">Share Your Brain</h1>
                                        <div className="mt-10">
                                            <Button onClick={handleShare} loading={false} variant="primary" text="Generate Link" fullWidth={true} />
                                        </div>

                                        {shareLink && (
                                            <div className=" mt-10 py-4">
                                                <p className="flex bg-gray-500 text-blue-900 rounded-2xl  py-2">
                                                    <button
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(shareLink);
                                                            alert("Link copied to clipboard!");
                                                        }}
                                                        className="flex w-8 mr-2 cursor-pointer"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.24 2H11.3458C9.58159 1.99999 8.18418 1.99997 7.09054 2.1476C5.96501 2.29953 5.05402 2.61964 4.33559 3.34096C3.61717 4.06227 3.29833 4.97692 3.14701 6.10697C2.99997 7.205 2.99999 8.60802 3 10.3793V16.2169C3 17.725 3.91995 19.0174 5.22717 19.5592C5.15989 18.6498 5.15994 17.3737 5.16 16.312L5.16 11.3976L5.16 11.3024C5.15993 10.0207 5.15986 8.91644 5.27828 8.03211C5.40519 7.08438 5.69139 6.17592 6.4253 5.43906C7.15921 4.70219 8.06404 4.41485 9.00798 4.28743C9.88877 4.16854 10.9887 4.1686 12.2652 4.16867L12.36 4.16868H15.24L15.3348 4.16867C16.6113 4.1686 17.7088 4.16854 18.5896 4.28743C18.0627 2.94779 16.7616 2 15.24 2Z" fill="#cbd5e1"></path> <path d="M6.6001 11.3974C6.6001 8.67119 6.6001 7.3081 7.44363 6.46118C8.28716 5.61426 9.64481 5.61426 12.3601 5.61426H15.2401C17.9554 5.61426 19.313 5.61426 20.1566 6.46118C21.0001 7.3081 21.0001 8.6712 21.0001 11.3974V16.2167C21.0001 18.9429 21.0001 20.306 20.1566 21.1529C19.313 21.9998 17.9554 21.9998 15.2401 21.9998H12.3601C9.64481 21.9998 8.28716 21.9998 7.44363 21.1529C6.6001 20.306 6.6001 18.9429 6.6001 16.2167V11.3974Z" fill="#cbd5e1"></path> </g></svg></button>
                                                    <p className="pr-4 mt-1 text-blue-500">{shareLink}</p>
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            }

        </div>

    );
}
