"use client";
import { useEffect, useState } from "react";
import NoteForm from "@/components/NoteForm";
import NoteList from "@/components/NoteList";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  const loadNotes = async () => {
    const res = await fetch("/api/notes");
    setNotes(await res.json());
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Notes App</h1>
      <NoteForm
        editNote={editNote}
        cancelEdit={() => setEditNote(null)}
        onSuccess={() => {
          setEditNote(null);
          loadNotes();
        }}
      />
      <NoteList notes={notes} onEdit={setEditNote} refresh={loadNotes} />
    </main>
  );
}
