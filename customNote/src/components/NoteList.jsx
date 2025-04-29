import React, { useEffect, useState } from "react";
import { getNotes, deleteNote } from "../utils/storage";
import NoteCard from "./NoteCard";
import AddNote from "./AddNote";

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [editingNoteId, setEditingNoteId] = useState(null);

  useEffect(() => {
    try {
      const storedNotes = getNotes();
      setNotes(storedNotes);
    } catch {
      alert("Failed to load notes.");
    }
  }, []);

  const handleDelete = (id) => {
    deleteNote(id);
    setNotes(getNotes());
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  if (editingNoteId) {
    return (
      <AddNote
        noteId={editingNoteId}
        onCancel={() => setEditingNoteId(null)}
      />
    );
  }

  return (
    <div className="notes-list-container">
      <h2>View Notes</h2>
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredNotes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        <ul>
          {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={handleDelete}
              onEdit={() => setEditingNoteId(note.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotesList;