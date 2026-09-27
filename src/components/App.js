import Header from "./Header";
import Notes from "./Notes";

import InputNotes from "./InputNotes";
import { useEffect, useState } from "react";

const STORAGE_KEY = "doodle-notes";

export default function App() {
  const [notesArr, setNotesArr] = useState(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notesArr));
  }, [notesArr]);

  function addNote(newNote) {
    setNotesArr((prevNotes) => {
      return [...prevNotes, { ...newNote, id: crypto.randomUUID() }];
    });
  }
  function deleteNote(id) {
    setNotesArr((prevNotes) => {
      return prevNotes.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="App">
      <Header />
      <InputNotes onAdd={addNote} />
      {notesArr.length === 0 ? (
        <p className="empty-state">No notes yet — start doodling!</p>
      ) : (
        <div className="saved-notes-container">
          {notesArr.map((item) => (
            <Notes
              id={item.id}
              key={item.id}
              title={item.title}
              content={item.content}
              onDelete={deleteNote}
            />
          ))}
        </div>
      )}
    </div>
  );
}
