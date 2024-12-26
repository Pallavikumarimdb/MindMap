import React from 'react'

export default function DashboardHome() {
    return (
        <div>
            <div className="mt-16 ml-10">
                <div className="flex  gap-4 text-white flex-wrap">
                    <div className='text-[5rem]'>
                    <h1>Welcome to the Dashboard</h1>
                    </div>
                    <p>Here is some default content that will be shown when you visit /dashboard.</p>
                    <img src="/path/to/default-image.jpg" alt="Default Image" />
                </div>
            </div>
        </div>
    )
}
