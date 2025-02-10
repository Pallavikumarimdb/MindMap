'use client'
import { useState } from "react";
import { Editor } from "novel";
import axios from "axios";
import { Trash2 } from "lucide-react";

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

  function expandedCard() {
    setExpanded(!expanded)
  }

  async function deleteContent(noteId: string) {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/notes/${noteId}`, {
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
      <div
        onClick={expandedCard}
        role="button"
        tabIndex={0}
        className="card cursor-pointer transition-all duration-300 hover:-translate-y-1 rounded-xl p-4 justify-between md:items-center"
      >
        <div className="border border-gray-200 bg-gray-600 text-slate-300 card-content p-2 rounded-xl pl-4 pr-4">
          <div className="flex flex-col items-center">
            <div className="flex justify-between w-full mt-4">
              <div className="mr-10 text-3xl font-semibold">
                <h1>{note.name}</h1>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents triggering `expandedCard`
                  deleteContent(note._id);
                }}
                className="mt-2 w-8 text-white py-1 px-1 rounded hover:bg-red-600"
              >
                <Trash2 />
              </button>
            </div>
          </div>
          <div className="text-left text-xs mr-8 mt-4 text-slate-500">
            <h1>{note.createdAt.match(regex)}</h1>
          </div>
        </div>
      </div>

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

