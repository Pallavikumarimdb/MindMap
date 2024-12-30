import { Editor } from "novel";
import { useState, useEffect } from "react";
import { defaultValue } from "./DefaultEdit";

export default function MyEditor() {
  // Initialize content state from localStorage or use defaultValue
  const [content, setContent] = useState(() => {
    const savedContent = localStorage.getItem("editorContent");
    return savedContent ? JSON.parse(savedContent) : defaultValue;
  });

  // Save content to localStorage whenever it changes
  useEffect(() => {
    if (content) {
      localStorage.setItem("editorContent", JSON.stringify(content));
    }
  }, [content]);

  return (
    <main className="ml-[4%] mr-[4%] flex min-h-screen bg-gray-700 text-slate-300 flex-col rounded-2xl items-center justify-between">
      <div className="flex flex-col p-6 pt-0 min-w-full">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold">👩‍💻 Add Your Note Here</h1>
        </div>
        <p className="text-slate-600 pt-0">Click to Start & Press '/' for commands</p>
        <Editor
          className="shadow-inner shadow-slate-300 mt-10 min-h-[400px] text-slate-300 p-4 pt-0 bg-gray-700 rounded-md"
          defaultValue={content} // Set default value
          //@ts-ignore
          onChange={(newContent) => setContent(newContent)} // Handle changes
        />
      </div>
    </main>
  );
}























// // import Editor from "../components/editor/advanced-editor";
// // import { JSONContent } from "novel";
// import { useState, useEffect } from "react";


// export default function MainEditPage() {

//   const savedValue = typeof window !== 'undefined' ? localStorage.getItem('editorContent') : null;
//   const [value, setValue] = useState<JSONContent>(savedValue ? JSON.parse(savedValue) : {
//     type: 'doc',
//     content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Start typing...' }] }]
//   });

//   useEffect(() => {
//     if (value) {
//       localStorage.setItem('editorContent', JSON.stringify(value));
//     }
//   }, [value]);

//   console.log(value);

//   return (
//     <main className="ml-[4%] mr-[4%] flex  min-h-screen bg-gray-700 text-slate-300 flex-col rounded-2xl items-center justify-between">
//   <div className="flex flex-col p-6 pt-0 min-w-full">
//     <div className="flex justify-between">
//       <h1 className="text-4xl font-semibold">Add Your Note Here</h1>
//     </div>
//     <p className="text-slate-600 pt-0">Click to Start & Press '/' for commands</p>
//     <Editor initialValue={value} onChange={setValue} />
//   </div>
// </main>

//   );
// }
