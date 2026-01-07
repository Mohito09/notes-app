"use client";
import { useEffect, useState } from "react";

export default function NoteForm({ onSuccess, editNote, cancelEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
    }
  }, [editNote]);

  const submit = async () => {
    if (editNote) {
      await fetch("/api/notes", {
        method: "PUT",
        body: JSON.stringify({
          id: editNote._id,
          title,
          content,
        }),
      });
    } else {
      await fetch("/api/notes", {
        method: "POST",
        body: JSON.stringify({ title, content }),
      });
    }

    setTitle("");
    setContent("");
    onSuccess();
  };

  return (
    <div className="p-4 border rounded mb-4">
      <input
        className="border p-2 w-full mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2" onClick={submit}>
          {editNote ? "Update" : "Add"}
        </button>
        {editNote && (
          <button className="bg-gray-300 px-4 py-2" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
