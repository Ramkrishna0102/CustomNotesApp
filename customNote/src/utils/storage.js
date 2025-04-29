const NOTES_KEY = "custom_notes";

export function saveNote(note) {
  const existingNotes = getNotes();
  note.id = Date.now(); // Unique ID
  const updatedNotes = [...existingNotes, note];
  localStorage.setItem(NOTES_KEY, JSON.stringify(updatedNotes));
}

export function getNotes() {
  const notes = localStorage.getItem(NOTES_KEY);
  return notes ? JSON.parse(notes) : [];
}

export function getNoteById(id) {
  const notes = getNotes();
  return notes.find((note) => note.id === id);
}

export function updateNote(id, updatedNote) {
  const notes = getNotes();
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex > -1) {
    notes[noteIndex] = { ...notes[noteIndex], ...updatedNote };
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }
}

export function deleteNote(id) {
  const notes = getNotes();
  const updatedNotes = notes.filter((note) => note.id !== id);
  localStorage.setItem(NOTES_KEY, JSON.stringify(updatedNotes));
}
// Why localStorage + key naming: localStorage is simple and persistent across sessions; key ensures namespacing.