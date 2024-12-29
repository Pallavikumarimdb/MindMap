
import imge2 from "../assets/img4.png"
import { Link } from "react-router-dom";

export default function DashboardHome() {
    return (
        <div className="relative bg-gray-700 min-h-screen overflow-hidden">

            <div className="opacity-35 max-w-screen overflow-hidden">
            <div className="border-slate-700 absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="border-slate-700 absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="border-slate-700 absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="border-slate-700 absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>


            <div className="relative z-10 h-full overflow-hidden mt-16 ml-8 item-center justify-center">
                <div className=" gap-4 text-gray-950 flex-wrap">
                    <div className='  justify-between'>
                        <img className="animate-slidein700 m-auto mt-20 h-56 w-56" src={imge2} alt="Default Image" />
                        <div className='mt-4 animate-slidein300 text-slate-300 text-center text-3xl md:text-3xl font-semibold'>
                            <h1>Keep Track @Note</h1>
                        </div>
                        <div>
                            <div className='flex mt-10 justify-center'>
                            <Link to="/dashboard/notebook/" className="animate-slidein300">
                                <button  className="p-2 pl-4 flex pr-4 bg-gray-950 text-slate-300 md:text-base md:font-medium tracking-tight rounded-md" onClick={() => {
                                    // setModalOpen(true)
                                }}>
                                    <div className='mt-1 mr-1 w-4 '>
                                        
                                        <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" 
                                        //@ts-ignore
                                        xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#cbd5e1" d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path> <path fill="#cbd5e1" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path> </g></svg>
                                    </div>
                                    Go To Editor</button></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


{/* <div className="h-full overflow-hidden mt-16 ml-8 item-center justify-center">
<div className=" gap-4 text-gray-950 flex-wrap">
    <div className=' ml-36 flex justify-between'>
        <img className="animate-slidein500 md:pl-54 h-72 w-72 ml-10 mb-28 mt-28 animate-slowspin " src={imge1} alt="Default Image" />
        <div className="animate-slidein700 hidden md:block mt-[13%]">
            <img src={curve} width={322} height={82} alt="Curve 1" />
            <div className='mt-20 animate-slidein300 text-center text-3xl md:text-4xl font-bold'>
                <h1>Get Started with @Note</h1>
            </div>
        </div>
        <img className="animate-slidein700 hidden md:block mr-[25%] mt-40 h-56 w-56" src={imge2} alt="Default Image" />
    </div>
</div>
</div> */}