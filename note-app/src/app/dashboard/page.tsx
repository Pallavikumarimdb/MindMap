'use client'
import Image from "next/image";
import imge2 from "@/assets/img4.png"
import Link from 'next/link'
import { CircleDot } from "lucide-react";

export default function Page() {
  return(
    <div className="relative  min-h-screen overflow-hidden">

            <div className="opacity-35 max-w-screen overflow-hidden">
            <div className="border-slate-700 absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="border-slate-700 absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="border-slate-700 absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="border-slate-700 absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="relative h-full overflow-hidden mt-16 ml-8 item-center justify-center">
                <div className=" gap-4 text-gray-950 flex-wrap">
                    <div className='  justify-between'>
                        <Image className="animate-slidein700 m-auto mt-20 h-56 w-56" src={imge2} width={300} height={200} alt="Default Image" />
                        <div className='mt-4 animate-slidein300 text-slate-300 text-center text-3xl md:text-3xl font-semibold'>
                            <h1>Keep Track @Note</h1>
                        </div>
                        <div>
                            <div className='flex mt-10 justify-center'>
                            <Link href="/dashboard/editor" className="animate-slidein300">
                                <button  className="p-2 pt-3 pl-4 h-12 flex pr-4  bg-gray-950 text-slate-300 md:text-base md:font-medium tracking-tight rounded-full" onClick={() => {
                                    // setModalOpen(true)
                                }}>
                                    <div className=' mr-1 w-4'>
                                    <CircleDot />
                                    </div>
                                    <span className="ml-4">Go To Editor</span></button></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
