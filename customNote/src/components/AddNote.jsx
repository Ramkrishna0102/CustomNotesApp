import React, { useState } from "react";
import { saveNote } from "../utils/storage";

function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      saveNote({ title, content, tags: tags.split(",").map((tag) => tag.trim()) });
      setTitle("");
      setContent("");
      setTags("");
      alert("Note saved successfully!");
    } catch (error) {
        console.log(error)
      alert("Failed to save note.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="add-note-container">
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Save Note"}
        </button>
      </form>
    </div>
  );
}

export default AddNote;