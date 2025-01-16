
export default function ComingSoon() {
    return (
        <div>
            <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-20">Coming Soon</h1>
                <form className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="rounded-full w-[40vh] px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 bg-white"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}
