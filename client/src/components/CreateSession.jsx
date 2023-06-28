import React, { useState } from "react";
import { createNewSession } from "../api/sessions";

const CreateSession = ({ user, addedSession, setAddedSession, token }) => {
  const [date, setDate] = useState("");
  const [game, setGame] = useState("");
  const [day, setDay] = useState("");
  const [duration, setDuration] = useState("");
  const [buy_in, setBuy_in] = useState("");
  const [cash_out, setCash_out] = useState("");
  const [notes, setNotes] = useState("");
  const { username } = user;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const wl = cash_out - buy_in;
    const newSession = await createNewSession(
      date,
      game,
      day,
      buy_in,
      cash_out,
      wl,
      notes,
      username,
      duration,
      token
    );
    setDate("");
    setGame("");
    setDay("");
    setDuration("");
    setBuy_in("");
    setCash_out("");
    setNotes("");
    setAddedSession(!addedSession);
    return newSession;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="submission-form-title">Add a session</h3>
        <input
          type="date"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        ></input>
        <input
          placeholder="Game"
          value={game}
          onChange={(event) => {
            setGame(event.target.value);
          }}
        ></input>
        <select
          value={day}
          onChange={(event) => {
            setDay(event.target.value);
          }}
        >
          <option>Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <input
          placeholder="Duration (hours)"
          value={duration}
          onChange={(event) => {
            setDuration(event.target.value);
          }}
        ></input>
        <input
          placeholder="Buy In"
          value={buy_in}
          onChange={(event) => {
            setBuy_in(event.target.value);
          }}
        ></input>
        <input
          placeholder="Cash Out"
          value={cash_out}
          onChange={(event) => {
            setCash_out(event.target.value);
          }}
        ></input>
        <input
          placeholder="Notes"
          value={notes}
          onChange={(event) => {
            setNotes(event.target.value);
          }}
        ></input>
        <button className="submit-session" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateSession;
