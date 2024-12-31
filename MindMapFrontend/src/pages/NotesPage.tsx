import { useEffect, useState } from 'react';
import axios from 'axios';
import { NoteCard } from '../components/NoteCard';
import { BACKEND_URL } from "../config";


interface Note {
    _id: string;
    title: string;
    content: string;
  }

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/notes`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
  
        console.log("Fetched Notes:", response.data);
  
        // Assuming response.data is an array
        //@ts-ignore
        response.data.forEach(note => {
          console.log("Note Name:", note.name);
        });
  
        setNotes(response.data); // Store the notes
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      }
    };
  
    fetchNotes();
  }, []);

  const handleDelete = (noteId: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
  };
  

  return (
    <div className='mt-16 flex flex-wrap gap-4 '    >
      {notes.map((note) => (
        //@ts-ignore
        <NoteCard key={note._id} note={note} onDelete={handleDelete} />
      ))}
    </div>
  );
}

