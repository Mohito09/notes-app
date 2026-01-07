"use client";

export default function NoteList({ notes, onEdit, refresh }) {
  const del = async (id) => {
    await fetch("/api/notes", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    refresh();
  };

  return (
    <div className="space-y-3">
      {notes.map((note) => (
        <div key={note._id} className="border p-4">
          <h3 className="font-bold">{note.title}</h3>
          <p>{note.content}</p>
          <div className="flex gap-3 mt-2">
            <button className="text-blue-500" onClick={() => onEdit(note)}>
              Edit
            </button>
            <button className="text-red-500" onClick={() => del(note._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
