import React, { useState } from "react";
import '../styles/NoteCard.css'
function NoteCard({ note, onDelete, onEdit }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`note-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      {flipped ? (
        <div className="note-card-back">
          <p>{note.content}</p>
          <div className="tags">
            {note.tags.map((tag, index) => (
              <span key={index} className="tag">
                #{tag}
              </span>
            ))}
          </div>
          <button onClick={(e) => { e.stopPropagation(); onEdit(); }}>Edit</button>
          <button onClick={(e) => { e.stopPropagation(); onDelete(note.id); }}>Delete</button>
        </div>
      ) : (
        <div className="note-card-front">
          <h3>{note.title}</h3>
          <p>{note.content.substring(0, 50)}...</p>
        </div>
      )}
    </div>
  );
}

export default NoteCard;