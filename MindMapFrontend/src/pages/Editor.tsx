import { Editor } from "novel";
import { useState } from "react";
import { defaultValue } from "./DefaultEdit";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function MyEditor() {
  const [content, setContent] = useState(() => {

    const savedContent = localStorage.getItem("novel__content");
    return savedContent ? JSON.parse(savedContent) : defaultValue;
  });

  // Save content to localStorage whenever it changes
  // useEffect(() => {
  //     localStorage.setItem("editorContent", JSON.stringify(content));
  // }, [content]);

  const [noteName, setNoteName] = useState(""); // State for the note name
  const [error, setError] = useState(""); // State to handle errors

  const saveNote = async () => {
    
    if (!noteName.trim()) {
      console.log("New note created:");
      setError("Note name is required.");
      return;
    }

    setError(""); // Clear any previous error
    try {
      //@ts-ignore
      const content = await  JSON.parse(localStorage.getItem("novel__content"));
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/notes`,
        { name: noteName, content },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log("New note created:", response.data);
    } catch (err) {
      console.error("Error saving note:", err);
    }
  };

  return (
    <main className="ml-[4%] mr-[4%] flex min-h-screen bg-gray-700 text-slate-300 flex-col rounded-2xl items-center justify-between">
      <div className="flex flex-col p-6 pt-0 min-w-full">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold">👩‍💻 Edit Your Note Here</h1>
        </div>
        <p className="text-slate-600 pt-0">Click to Start & Press '/' for commands</p>
        <div className="mt-10 flex">
        <input
          placeholder="Name Your Note"
          type="text"
          value={noteName} 
          onChange={(e) => setNoteName(e.target.value)}
          className="w-[30%] px-4 py-2 border rounded bg-gray-700 shadow-inner shadow-slate-300"
        />
        <button
          onClick={saveNote}
          className="ml-1 font-bold bg-blue-500 px-2 h-11 border rounded bg-gray-700 shadow-inner bg-slate-300 text-gray-950 shadow-slate-300 hover:bg-blue-600"
        >
          Save Note
        </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <Editor
          className="shadow-inner shadow-slate-300 min-h-[400px] text-slate-300 p-4 pt-0 bg-gray-700 rounded-md"
          defaultValue={content}
          //@ts-ignore
          onChange={(newContent) => setContent(newContent)}
        />
      </div>
    </main>
  );
}
