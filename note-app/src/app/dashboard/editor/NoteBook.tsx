'use client'
import MyEditor from "./Editor";

export default function NoteBook() {


    return (
        <div>
            <div className=" mt-6">
                <div className="flex gap-4 flex-wrap">
                        <div className="mt-6 min-w-full ">
                        <MyEditor/>
                        </div>
                </div>
            </div>
        </div>
    )
}
