import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./calendercss.css";
import "react-calendar/dist/Calendar.css";

function Event() {
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState("");
  const [events, setEvents] = useState([]);
  console.log(event);

  const DateClick = (date) => {
    setDate(date);
  };

  const listEvent = () => {
    if (event.trim() === "") {
      alert("your input is empty");
    } else {
      const newEvent = {
        name: event,
        date: date.toDateString(),
      };

      setEvents([...events, newEvent]);
      setEvent("");
    }
  };

  const Delete = (index) => {
    setEvents((events) => events.filter((_, i) => i !== index));
  };



  // Function to mark the added date
  const tileClassName = ({ date }) => {
    const eventForDate = events.find((event) => event.date === date.toDateString());
    return eventForDate ? "added-date" : null;
  };
  return (
    <div>
      <h1 className="head">calender</h1>
      <div className="calender">
        <div className="clenderOg">
          <Calendar  onChange={DateClick} value={date} minDate={new Date()}  />
        </div>
        <div className="input">
          <p>{date.toDateString()}</p>
          <input
            type="text"
            placeholder="event name"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
          />
          <button onClick={listEvent}>submit</button>
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                {`${event.name} - ${event.date}`}{" "}
                <button onClick={() => Delete(index)}>delete</button>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Event;
