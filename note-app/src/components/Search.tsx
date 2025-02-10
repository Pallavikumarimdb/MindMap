'use client'
import axios from 'axios';
import { useState } from 'react';
import { Card } from './Card';
import { Palette, SearchCheck } from 'lucide-react';

export default function Search() {
    const [query, setQuery] = useState('');
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [results, setResults] = useState({ notes: [], links: [] });

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query) return;

        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/search`, {
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
                    <Palette className='text-slate-500' />
                    </div>
                    <input type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        id="voice-search" className="mr-10 bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-600 dark:border-gray-300    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Note..." required />
                    <button type="submit" className=" ml-20 absolute inset-y-0 end-0 flex items-center pe-3">
                    <SearchCheck className='text-slate-300' />
                    </button>
                </div>
            </form>
            <div className="block md:hidden w-10 ">
                <button type="submit" className="w-10">
                <SearchCheck className='text-slate-300' />
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
