import React, { useState } from "react";
import { format } from "date-fns";

export const AddNote = ({ selectedDate, addNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteImportance, setNoteImportance] = useState("");

  const handleAddNote = () => {
    const note = {
      id: new Date().getTime(),
      date: format(selectedDate, "yyyy-MM-dd"),
      text: noteText,
      importance: noteImportance,
    };
    addNote(note);
    setNoteText("");
    setNoteImportance("");
  };

  return (
    <div>
      <h3>Add Note</h3>
      <input
        type="text"
        placeholder="Note text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Note importance"
        value={noteImportance}
        onChange={(e) => setNoteImportance(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};