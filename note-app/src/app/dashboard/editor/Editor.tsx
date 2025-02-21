"use client"; 

import dynamic from "next/dynamic";
// import { Editor } from "novel-lightweight";
import { useEffect, useState } from "react";
import { defaultValue } from "./DefaultEdit";
import axios from "axios";
import { RefreshCw } from "lucide-react";
import type { JSONContent } from "@tiptap/react";


const Editor = dynamic(() => import("novel").then((mod) => mod.Editor), {
  ssr: false,
});

export default function MyEditor() {

  const [content, setContent] = useState<JSONContent | string>(() => {
    if (typeof window !== "undefined") {
      const storedContent = localStorage.getItem("novel__content");
      return storedContent ? JSON.parse(storedContent) : JSON.parse(JSON.stringify(defaultValue));
    }
    return {};
  });


  const [noteName, setNoteName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem("novel__content");
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  let saveTimeout: NodeJS.Timeout | null = null;


  const saveToLocalStorage = (updatedContent: JSONContent) => {
    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      localStorage.setItem("novel__content", JSON.stringify(updatedContent));
    }, 500);
  };




  const saveNote = async () => {
    if (!noteName.trim()) {
      setError("Note name is required.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      //@ts-ignore
      const content = await JSON.parse(localStorage.getItem("novel__content"));
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/notes`,
        { name: noteName, content },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setPopupMessage("Note successfully saved! 🎉");
      setShowPopup(true);
    } catch (err) {
      console.error("Error saving note:", err);
      setPopupMessage("Failed to save note. Please try again. 😔");
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="ml-[4%] mr-[4%] flex min-h-screen bg-gray-700 text-slate-300 flex-col rounded-2xl items-center justify-between">
      <div className="flex flex-col p-6 pt-0 min-w-full">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold">👩‍💻 Edit Your Note Here</h1>
        </div>
        <p className="text-slate-600 pt-0">Click to Start & Press '/' for commands</p>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <input
            placeholder="Name Your Note...."
            type="text"
            value={noteName}
            onChange={(e) => setNoteName(e.target.value)}
            className="w-full sm:w-[40%] px-4 py-2 border rounded bg-gray-700 shadow-inner shadow-slate-300"
          />
          <button
            onClick={saveNote}
            disabled={loading}
            className={`w-full sm:w-auto ml-0 sm:ml-1 font-bold px-4 py-2 h-11 border rounded-full ${loading ? "bg-[#7f56d9]" : "bg-gray-300  text-gray-950 hover:bg-blue-600"
              }`}
          >
            {loading ? (
              <span className="flex items-center">
                <RefreshCw />
                Saving...
              </span>
            ) : (
              "Save Note"
            )}
          </button>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        <Editor
          className="shadow-inner shadow-slate-300 min-h-[400px] text-slate-300 p-4 pt-0 bg-gray-700 rounded-md"
          defaultValue={content}
          disableLocalStorage={true} 
          onUpdate={(editor) => {
            if (editor) {
              const jsonContent = editor.getJSON();
              setContent(jsonContent);
              saveToLocalStorage(jsonContent);
            }
          }}
        />
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-700 rounded-lg p-6 w-96 text-center shadow-lg">
            <p className="text-lg font-semibold">{popupMessage}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

