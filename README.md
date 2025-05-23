﻿# CustomNotesApp


Custom Note Service is a simple and interactive application to add, view, and manage notes with the ability to switch between light and dark themes.

---

## Features

- Add notes with a simple form.
- View a list of saved notes.
- Toggle between light and dark themes for better user experience.

---

## Project Structure

```
custom-note-service/
├── public/               # Static assets
├── src/                  # Source files
│   ├── components/       # Reusable components like AddNote, NotesList, etc.
│   ├── main.jsx          # Entry point for the application
│   ├── App.jsx           # Main application logic
├── index.html            # Main HTML file
├── vite.config.js        # Vite configuration
├── package.json          # Project dependencies and scripts
├── README.md             # Documentation
└── index.css             # Styles for the application
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ramkrishna0102/CustomNoteService.git
   cd CustomNoteService
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

### Building for Production

To build the application for production:
```bash
npm run build
```

The production-ready files will be available in the `dist/` folder.

---

## Usage

### Adding a Note
- Navigate to the "Add Note" section.
- Enter your note in the provided field and click "Add Note".

### Viewing Notes
- Navigate to the "View Notes" section to see a list of all saved notes.

### Switching Themes
- Use the "Theme Toggle" button in the header to switch between light and dark themes.

---
