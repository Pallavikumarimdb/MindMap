import React from 'react'
// import imge from "../assets/home3.jpeg"
// import imge1 from "../assets/home4.jpeg"
import imge1 from "../assets/img1.png"
import imge2 from "../assets/img4.png"
import curve from "../assets/curve-2.svg"

export default function DashboardHome() {
    return (
        <div>
            <div className="h-full overflow-hidden mt-16 ml-10 item-center justify-center">
                <div className=" gap-4 text-white flex-wrap">
                    <div className='animate-slidein300 text-center text-5xl md:text-7xl '>
                        <h1>Welcome to the @Note</h1>
                    </div>
                    <div className=' flex justify-between'>
                        <img className="animate-slidein500 md:pl-54 h-96 w-96 mb-28 mt-20" src={imge1} alt="Default Image" />
                        <div className="animate-slidein700 hidden md:block ml-10 mt-[25%]">
                            <img src={curve} width={522} height={182} alt="Curve 1" />
                        </div>
                        <img className="animate-slidein700 hidden md:block mt-40 " src={imge2} alt="Default Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
