import React, { useState } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NoteCard";
import ThemeToggle from "./components/ThemeToggle";

import "./index.css"; // For styling

function App() {
  const [view, setView] = useState("add");

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="app-header">
        <h1>Custom Note Service</h1>
        <ThemeToggle />
      </header>

      {/* Navigation Section */}
      <nav className="navigation">
        <button
          className={view === "add" ? "active" : ""}
          onClick={() => setView("add")}
        >
          Add Note
        </button>
        <button
          className={view === "view" ? "active" : ""}
          onClick={() => setView("view")}
        >
          View Notes
        </button>
        {/* // Why this nav approach for simplicity */}
      </nav>

      {/* Main Content Section */}
      <main className="content">
        {view === "add" ? <AddNote /> : <NotesList />}
      </main>
    </div>
  );
}

export default App;