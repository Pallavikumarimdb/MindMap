
import axios from 'axios';
import { useState } from 'react';
import { Card } from './Card';
import.meta.env.BACKEND_URL;

export default function Search() {
    const [query, setQuery] = useState('');
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [results, setResults] = useState({ notes: [], links: [] });

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query) return;

        try {
            const response = await axios.get(`${process.env.BACKEND_URL}/api/v1/search`, {
                params: { q: query },
                headers: {
                    Authorization: localStorage.getItem("token"),
                }
            });
            setResults(response.data);
            setPopupVisible(true);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className=" ml-16 ">
            <form className="hidden md:block flex items-center max-w-lg mx-auto"
                onSubmit={handleSearch}
            >
                <label className="sr-only">Search</label>
                <div className="relative w-full p-2">
                    <div className="pl-4 absolute inset-y-0 start-0 flex items-center  pointer-events-none">
                        <svg className="w-4 h-4 text-slate-300 dark:text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                        </svg>
                    </div>
                    <input type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        id="voice-search" className="mr-10 bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-600 dark:border-gray-300    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Note..." required />
                    <button type="submit" className=" ml-20 absolute inset-y-0 end-0 flex items-center pe-3">
                        <svg className="w-6 h-6 text-slate-300 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </svg>
                    </button>
                </div>
            </form>
            <div className="block md:hidden w-10 ">
                <button type="submit" className="w-10">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#030712" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </div>



            {isPopupVisible && (
                <div>
                    <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex ">
                    </div>

                    <div className="z-10 fixed text-center absolute z-10 top-24 left-10 mr-10 p-4 bg-[#202020] border rounded-xl shadow-lg">
                        <button
                            onClick={closePopup}
                            className="my-2 px-2 py-1 bg-slate-200 text-black rounded hover:bg-red-700"
                        >
                            Close
                        </button>
                        <h3 className="text-slate-100 text-3xl  font-bold">Search Results</h3>
                        <div className='flex flex-col sm:flex-row flex-wrap'>
                            {results.links.map((link: any) => (
                                <div key={link._id} className='my-4 mx-2 flex flex-col sm:flex-1 sm:w-1/2 lg:w-1/4'>
                                    <Card
                                        key={link._id}
                                        type={link.type}
                                        link={link.link}
                                        title={link.title}
                                        contentId={link._id}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
