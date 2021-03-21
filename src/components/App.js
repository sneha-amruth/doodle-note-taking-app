import Header from "./Header";
import Notes from "./Notes";

import InputNotes from "./InputNotes";
import { useState } from "react";

export default function App() {
  const [notesArr, setNotesArr] = useState([]);

  function addNote(newNote) {
    setNotesArr((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotesArr((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <InputNotes onAdd={addNote} />
      <div className="saved-notes-container">
        {notesArr.map((item, index) => (
          <Notes
            id={index}
            key={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}
