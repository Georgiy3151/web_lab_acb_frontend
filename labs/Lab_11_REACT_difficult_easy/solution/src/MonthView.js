import React from "react";
import { addDays, startOfMonth, endOfMonth, format, isSameMonth } from "date-fns";

const WeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const MonthView = ({ selectedDate, setSelectedDate, getNotesForDay }) => {
  const startOfSelectedMonth = startOfMonth(selectedDate);
  const endOfSelectedMonth = endOfMonth(selectedDate);
  const startDate = startOfMonth(startOfSelectedMonth);
  const endDate = endOfMonth(endOfSelectedMonth);

  const days = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    days.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  const handleDayClick = (date) => {
    setSelectedDate(date);
    getNotesForDay(format(date, "yyyy-MM-dd"));
  };

  return (
    <div>
      <button onClick={() => setSelectedDate(addDays(selectedDate, -1))}>Previous Month</button>
      <button onClick={() => setSelectedDate(addDays(selectedDate, 1))}>Next Month</button>
      <p>{format(selectedDate, "MMMM yyyy")}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
        {WeekDays.map((day) => (
          <div
            key={day}
            style={{
              textAlign: "center",
              padding: "10px",
              background: "#f0f0f0",
              borderBottom: "1px solid #ccc",
            }}
          >
            {day}
          </div>
        ))}
        {days.map((date) => (
          <div
            key={date.toISOString()}
            style={{
              textAlign: "center",
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #ccc",
              borderRight: isSameMonth(date, selectedDate) ? "1px solid #ccc" : "1px solid #eee",
              background: isSameMonth(date, selectedDate) ? "#f0f0f0" : "inherit",
            }}
            onClick={() => handleDayClick(date)}
          >
            {format(date, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};