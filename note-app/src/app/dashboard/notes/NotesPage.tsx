'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NoteCard } from '@/components/NoteCard';

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
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/notes`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });

  
        setNotes(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      }
    };
  
    fetchNotes();
  }, []);


  if (!Array.isArray(notes)) {
    return <div>No Notes Available...</div>;
  }

  const handleDelete = (noteId: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
  };
  

  return (
    <div className='mt-16 ml-14 flex flex-wrap gap-4 '    >
      {notes.map((note) => (
        //@ts-ignore
        <NoteCard key={note._id} note={note} onDelete={handleDelete} />
      ))}
    </div>
  );
}

