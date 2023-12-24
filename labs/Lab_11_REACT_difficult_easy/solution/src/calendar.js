import React, { useState } from "react";
import { MonthView } from "./MonthView";
import { DayView } from "./DayView";
import { AddNote } from "./AddNote";
import { format } from "date-fns";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState([]);
  const [selectedDayNotes, setSelectedDayNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const getNotesForDay = (date) => {
    const dayNotes = notes.filter(
      (note) => format(new Date(note.date), "yyyy-MM-dd") === date
    );
    setSelectedDayNotes(dayNotes);
  };

  return (
    <div>
      <h1>{format(selectedDate, "MMMM yyyy")}</h1>
      <MonthView
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        getNotesForDay={getNotesForDay}
      />
      <DayView
        selectedDate={selectedDate}
        selectedDayNotes={selectedDayNotes}
        deleteNote={deleteNote}
      />
      <AddNote selectedDate={selectedDate} addNote={addNote} />
    </div>
  );
};

export default Calendar;