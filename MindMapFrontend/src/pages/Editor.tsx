import Editor from "../components/editor/advanced-editor";
import { JSONContent } from "novel";
import { useState, useEffect } from "react";


export default function MainEditPage() {

  const savedValue = typeof window !== 'undefined' ? localStorage.getItem('editorContent') : null;
  const [value, setValue] = useState<JSONContent>(savedValue ? JSON.parse(savedValue) : {
    type: 'doc',
    content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Start typing...' }] }]
  });

  useEffect(() => {
    if (value) {
      localStorage.setItem('editorContent', JSON.stringify(value));
    }
  }, [value]);

  console.log(value);  

  return (
    <main className="ml-[4%] mr-[4%] flex pt-6 min-h-screen bg-gray-700 text-slate-300 flex-col rounded-2xl items-center justify-between">
  <div className="flex flex-col p-6 min-w-full  gap-6 ">
    <div className="flex justify-between">
      <h1 className="text-4xl font-semibold">Add Your Note Here</h1>
    </div>
    <p className="text-slate-600">Click to Start & Press '/' for commands</p>
    <Editor initialValue={value} onChange={setValue} />
  </div>
</main>

  );
}
