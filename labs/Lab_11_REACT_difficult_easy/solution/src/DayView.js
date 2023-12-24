// DayView.js
import React from "react";
import { format } from "date-fns";

export const DayView = ({ selectedDate, selectedDayNotes, deleteNote }) => {
  return (
    <div>
      <h2>{format(selectedDate, "dd MMMM yyyy")}</h2>
      <p>Number of notes: {selectedDayNotes.length}</p>
      <ul>
        {selectedDayNotes.map((note) => (
          <li key={note.id}>
            {note.text} - {note.importance}
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
