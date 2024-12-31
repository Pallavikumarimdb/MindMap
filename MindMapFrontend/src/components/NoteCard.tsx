import { useState, useEffect } from "react";
import { Editor } from "novel";
import axios from "axios";

import { BACKEND_URL } from "../config";

interface Note {
  name: string;
  createdAt: string;
  _id: string;
  content: string; 
}

interface NoteCardProps {
  note: Note;
  onDelete: (noteId: string) => void;
}

export function NoteCard({ note, onDelete }: NoteCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState(note.content); 

  //RE for extracting date from db data
  const regex = /^\d{4}-\d{2}-\d{2}/;

  function expandedCard(){
    setExpanded(!expanded)
  }

  async function deleteContent(noteId: string) {
    try {
      await axios.delete(`${BACKEND_URL}/api/v1/notes/${noteId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log("Note deleted successfully:", noteId);
      onDelete(noteId);
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  }

  return (
    <div className="">
      <button onClick={expandedCard} className="card cursor-pointer transition-all  duration-300 hover:-translate-y-1 rounded-xl p-4 justify-between md:items-center">
        <div className="bg-gray-600 text-slate-300 card-content p-2 rounded-xl  pl-4 pr-4">
          <div className="flex flex-col items-center">
            <div   className="flex justify-between w-full mt-4 ">
              <div className=" mr-10 text-3xl font-semibold"><h1>{note.name}</h1></div>
              <button
                onClick={() => deleteContent(note._id)}
                className="mt-2 w-8 text-white py-1 px-1 rounded hover:bg-red-600"
              >
                <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M724.3 198H296.1l54.1-146.6h320z" fill="#FAFCFB"></path><path d="M724.3 216.5H296.1c-6.1 0-11.7-3-15.2-7.9-3.5-5-4.3-11.3-2.2-17L332.8 45c2.7-7.3 9.6-12.1 17.4-12.1h320c7.7 0 14.7 4.8 17.4 12.1l54.1 146.6c2.1 5.7 1.3 12-2.2 17-3.5 4.9-9.2 7.9-15.2 7.9z m-401.6-37h375.1L657.3 69.9H363.1l-40.4 109.6z" fill="#0F0F0F"></path><path d="M664.3 981.6H339.7c-54.2 0-98.5-43.3-99.6-97.5L223.7 235h572.9l-32.8 651.4c-2.3 53.2-46.1 95.2-99.5 95.2z" fill="#9DC6AF"></path><path d="M664.3 995H339.7c-29.7 0-57.8-11.4-79-32.2-21.2-20.8-33.3-48.6-34-78.3L210 221.6h600.7L777.2 887c-2.6 60.5-52.2 108-112.9 108zM237.4 248.3l16 635.5c0.5 22.7 9.7 44 25.9 59.8 16.2 15.9 37.7 24.6 60.4 24.6h324.6c46.3 0 84.2-36.2 86.2-82.5l32.1-637.4H237.4z" fill="#191919"></path><path d="M827.1 239.5H193.3c-22.2 0-40.4-18.2-40.4-40.4v-2.2c0-22.2 18.2-40.4 40.4-40.4h633.8c22.2 0 40.4 18.2 40.4 40.4v2.2c0 22.2-18.2 40.4-40.4 40.4z" fill="#D39E33"></path><path d="M826 252.9H194.4c-30.3 0-54.9-24.6-54.9-54.9 0-30.3 24.6-54.9 54.9-54.9H826c30.3 0 54.9 24.6 54.9 54.9s-24.7 54.9-54.9 54.9z m-631.6-83.1c-15.5 0-28.2 12.6-28.2 28.2s12.6 28.2 28.2 28.2H826c15.5 0 28.2-12.6 28.2-28.2 0-15.5-12.6-28.2-28.2-28.2H194.4z" fill="#111111"></path><path d="M354.6 430.3v369.6" fill="#FAFCFB"></path><path d="M354.6 813.3c-7.4 0-13.4-6-13.4-13.4V430.3c0-7.4 6-13.4 13.4-13.4s13.4 6 13.4 13.4v369.6c-0.1 7.4-6 13.4-13.4 13.4z" fill="#0F0F0F"></path><path d="M458.3 430.3v369.6" fill="#FAFCFB"></path><path d="M458.3 813.3c-7.4 0-13.4-6-13.4-13.4V430.3c0-7.4 6-13.4 13.4-13.4s13.4 6 13.4 13.4v369.6c0 7.4-6 13.4-13.4 13.4z" fill="#0F0F0F"></path><path d="M562.1 430.3v369.6" fill="#FAFCFB"></path><path d="M562.1 813.3c-7.4 0-13.4-6-13.4-13.4V430.3c0-7.4 6-13.4 13.4-13.4s13.4 6 13.4 13.4v369.6c-0.1 7.4-6.1 13.4-13.4 13.4z" fill="#0F0F0F"></path><path d="M665.8 430.3v369.6" fill="#FAFCFB"></path><path d="M665.8 813.3c-7.4 0-13.4-6-13.4-13.4V430.3c0-7.4 6-13.4 13.4-13.4s13.4 6 13.4 13.4v369.6c0 7.4-6 13.4-13.4 13.4z" fill="#0F0F0F"></path></g></svg>
              </button>
            </div>
          </div>
          <div className="text-left text-xs mr-8 mt-4 text-slate-500"><h1>{(note.createdAt).match(regex)}</h1></div>
        </div>
      </button>
      {expanded && (
              <div className="">
                <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center" />
                <div className="w-screen h-screen fixed top-0 left-0 flex ml-[30%]">
                  <div className="flex flex-col justify-center">
                    <span className="bg-gray-600 text-slate-300 opacity-100  rounded fixed">
                    <button
                onClick={expandedCard}
                className="ml-4 bg-slate-300 mt-4 text-gray-700 py-1 px-2 rounded hover:text-blue-600"
              >
                Less
              </button>
                      <Editor
                        defaultValue={content}
                        className="novel-editor bg-gray-600 text-slate-300  mt-0 pt-0"
                        disableLocalStorage={true}
                        //@ts-ignore
                        onChange={(newContent) => setContent(newContent)}
                      />
                    </span>
                  </div>
                </div>
              </div>
            )}
    </div>
  );
}

