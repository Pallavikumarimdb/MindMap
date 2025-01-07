import { Link } from 'react-router-dom'
import lap from "../assets/newww.png"
import page1 from "../assets/page1.png"
import page2 from "../assets/page2.png"
import page3 from "../assets/page3.png"
import page4 from "../assets/page4.png"
import page5 from "../assets/page5.png"

export default function Home() {
    return (
        <div className='bg-gray-900 min-h-screen'>
            <div className='pl-8 pr-8 flex justify-between'>
                <div className="animate-slidein300 items-center mt-6">
                    <div className='flex'>
                        <div className="w-12 ml-4">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"><path fill="#cbd5e1" d="M209.5 18.66c-7.4-.02-14.8 1.93-19.2 6.96-3.1 3.59-4.8 8.46 0 19.19 5.2 8.08 9.3 19.06 12.9 33.12l-17.9 4.66c-6.1-23.73-13.8-33-18.5-35.1-2.4-1.04-4.7-1.14-8.3 0-3.7 1.11-8.4 3.68-13.5 7.47-7.9 5.8-12.6 13.22-12.4 19.25 3.7 12.42 13.1 18.6 25 24.19l-8 16.8c-4.6-2.1-8.7-4.4-12.4-6.8-13.3-7.3-23.1-10.38-28-9.97-2.6.22-4.1.85-6 2.77-2 2-4.4 5.7-6.5 11.6-3.5 9.9-4 17.7-1.5 21.8 2 3.2 7.2 6.9 20.1 8.2 3.3.1 6.7.2 10.4.4v.1h1.1l.2 18.7c-3.8 0-7.3-.1-10.6-.4-11.1-.1-17.7.8-20.2 2.1-1.6.8-2.1 1.3-2.9 3-.9 1.8-1.8 5.1-2.4 10-.6 4.5-.2 7.6.7 9.8.9 2.1 2.1 3.6 5.3 5.3 6.5 3.5 21.7 5.8 47.3 3.7l1.5 18.6c-17.2 1.5-30.7 1.5-41.5-.5 4.7 15.1 14.5 21.9 25.7 21.9h94c10.6 0 19.8-7.7 23.4-22.1l8.1-32.1 9.9 31.6c4.7 14.8 14.2 22.6 23.5 22.6H383c11.2 0 21.1-6.9 25.7-22-10.9 2.1-24.6 2.1-42.4.6l1.6-18.6c25.6 2.1 40.7-.2 47.2-3.7 3.2-1.7 4.4-3.2 5.3-5.3 1.4-6.3 2.1-19.3-4.5-22.8-2.5-1.2-9.1-2.2-20.2-2.1-3.3.3-6.8.4-10.6.4l.2-18.7h1v-.1c3.8-.2 7.2-.3 10.4-.4 12.9-1.3 18.2-5 20.2-8.2 2.5-4.1 2-11.9-1.6-21.8-2.3-6.2-6-13.77-12.4-14.37-17.1 2.07-29.1 9.67-40.4 16.77l-8-16.8c4.4-1.98 7.7-4.22 11.7-6.56 10.2-6.88 13-13.02 13.3-17.63.2-6.03-4.6-13.45-12.4-19.25-5.2-3.79-9.8-6.35-13.5-7.47-3.6-1.11-6-1.01-8.3 0-1.7.72-3.7 2.34-5.8 5.09-5.7 9.01-10.4 21.31-12.7 30l-18.1-4.66c4.1-15.76 8.8-27.65 15-35.93 3.3-8.79 1.7-13.12-1.1-16.38-9.4-7.73-28.3-9.73-38.7-1.99-4.5 3.34-8.1 8.5-10.9 15-5.5 12.97-7.1 30.87-7.1 43.99v.1l-.2 30.79v.1h-18.6v-.1l-.2-30.83v-.1c0-13.12-1.6-31.02-7.2-44.03-2.7-6.5-6.3-11.66-10.8-15-4.5-2.86-12-4.86-19.4-4.88zm47.2 217.94c-7.9 10.7-19.4 17.6-32.8 17.6h-42.8c2 4.3 5.4 8.2 10 11.8 11.8 9 32.1 15 53.6 16.4l-.6.6c-7.9 8.5-33.2 6.5-48 .9-35-12.8-67.9-21.9-101.28-11.1-43.77 17.3-74.86 66.9-65.53 113.1 10.36 51.3 66.85 124.2 121.11 99.8 61.3-27.6 11.4-114.5-25.3-132.1 8.5 23.2 39.8 79.9 11.4 91.9-34.2 14.4-81.56-43.6-69.48-86.9 20.71-57.4 66.08-49.5 99.38-37.5 60.3 21.7 31.2 169.9 95.2 167.1 38.9-1.7 85.4-60.7 48.7-106.3 3.9 28.6-20.4 75.5-42.9 63.4-33.8-18.1 12.2-84.5 43.7-106.6 24.4-17.1 70.6-28.1 89.5-3.7 29.8 38.6-53.2 74.2-27.7 118.3 22.5 39 75.7 47.4 117.6-10.8-29.1 17.4-68.6 25.8-79.6 1.6-14.1-31.1 62.7-35.3 69.1-76 5.8-36.7-18.3-73.9-49.6-93.9-39.9-25.6-109.3 30.9-160.3 7.7 19.7-2.1 37.9-8.1 48.6-16.7 4.2-3.4 7.3-7 9.3-11h-39.2c-12.9 0-24.2-7-32.1-17.6z"></path></g></svg>
                        </div>
                        <span className=" mt-5 text-xl  font-bold text-slate-300">@Note</span>
                    </div>
                </div>
                <div className='mt-8 mr-10 '>
                    <Link to="/dashboard" className="animate-slidein300">
                        <button className=" flex font-bold bg-slate-300 text-gray-950  md:font-medium tracking-tight rounded-md" onClick={() => {
                        }}>
                            <span className='p-3 pl-4 font-extrabold'>Join Now</span>
                        </button>
                    </Link>
                </div>
            </div>



            <div>
                <div className='flex mt-[100px] text-slate-100 justify-center'>
                    <div className='text-6xl w-[50%] text-center'>
                        <h1 className='animate-slidein300 font-bold md:text-[8vh]'>Your Ideas, Documents, & Plans Unified. Welcome to <span className='underline underline-offset-1'>@Note</span></h1>
                        <div className='flex justify-center'><p className='animate-slidein300 w-[80%] text-2xl font-medium mt-5'>All-in-one (better, faster work Note Keeping) that tracks your links, projects, notes, and everything in between.</p></div>
                    </div>
                </div>
                <div className='flex mt-[50px] text-slate-300 justify-center'>
                    <Link to="/dashboard/" className="animate-slidein300">
                        <button className="p-3 pl-6 flex pr-6 bg-gray-950 text-slate-300 font-bold   tracking-tight rounded-md" onClick={() => {
                        }}>
                            <div className=' mr-2 w-6 '>
                                <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    //@ts-ignore
                                    xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#cbd5e1" d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path> <path fill="#cbd5e1" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path> </g></svg>
                            </div>
                            Go To Note</button></Link>
                </div>
                <div className='flex justify-center '>
                    <img className="animate-slidein300 p-10" src={lap} alt="" />
                </div>

                <div className='px-36 pt-6 pb-20 bg-gray-900 '>
                    <div className='py-10 pb-20 text-slate-200 flex font-semibold justify-center text-8xl'>
                        <h1>Dashboard</h1>
                    </div>
                <div className=' mb-16 flex flex-row gap-6'>
                    <div className='w-[50%]'>
                    <img className="shadow-xl shadow-cyan-500/50 rounded-xl animate-slidein300 " src={page1} alt="" />
                    </div>
                    <div className='w-[50%]'>
                    <img className=" rounded-xl animate-slidein300 " src={page2} alt="" />
                    </div>
                </div>

                <div className=' flex flex-row gap-6'>
                    <div className='w-[50%]'>
                    <img className=" rounded-xl animate-slidein300 " src={page3} alt="" />
                    </div>
                    <div className='w-[50%]'>
                    <img className=" shadow-xl shadow-cyan-500/50 rounded-xl animate-slidein300 " src={page4} alt="" />
                    </div>
                </div>

                <div className='flex justify-center mt-16  mb-24 '>
                    <img className="shadow-xl shadow-cyan-500/50 rounded-xl animate-slidein300 " src={page5} alt="" />
                </div>
                </div>



                <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-4">© {new Date().getFullYear()} @Note. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Pallavikumarimdb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.165c-3.338.727-4.033-1.415-4.033-1.415-.547-1.388-1.333-1.758-1.333-1.758-1.089-.745.084-.729.084-.729 1.205.086 1.837 1.236 1.837 1.236 1.07 1.834 2.807 1.304 3.492.996.107-.775.418-1.305.762-1.605-2.665-.3-5.467-1.337-5.467-5.943 0-1.312.467-2.384 1.236-3.225-.123-.303-.535-1.521.118-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.8a11.45 11.45 0 013.292.442c2.292-1.552 3.3-1.23 3.3-1.23.653 1.655.241 2.873.118 3.176.769.841 1.236 1.913 1.236 3.225 0 4.615-2.807 5.64-5.479 5.933.43.372.824 1.103.824 2.222v3.293c0 .32.192.694.801.576C20.565 21.798 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://x.com/pallavimdb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.557a9.798 9.798 0 01-2.828.775 4.939 4.939 0 002.165-2.724 9.868 9.868 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.691 7.897 4.067 5.905 1.64 2.904a4.822 4.822 0 00-.664 2.475c0 1.708.869 3.213 2.188 4.096a4.902 4.902 0 01-2.228-.616v.062a4.918 4.918 0 003.946 4.827 4.964 4.964 0 01-2.224.084 4.936 4.936 0 004.604 3.417A9.867 9.867 0 010 19.54a13.905 13.905 0 007.548 2.209c9.056 0 14.009-7.498 14.009-13.987 0-.213-.005-.426-.014-.637A9.936 9.936 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/pallavisprofile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            aria-label="LinkedIn"
          >
<svg fill="#9ca3af" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
//@ts-ignore
xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path> </g></svg>
          </a>
        </div>
      </div>
    </footer>
            </div>
        </div>
    )
}
