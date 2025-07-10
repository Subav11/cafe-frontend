import React, { useState } from "react";

export default function Game() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [message, setMessage] = useState("");
  const updateRun = () => {
    if (wicket < 10) {
      setRun(run + 1);
      setMessage("Well Done!");
    }
  };

  const updateWicket = () => {
    if (wicket < 10) {
      const newWicket = wicket + 1;
      setWicket(newWicket);
      setMessage(newWicket === 10 ? "Game Over!" : "Better Luck Next Time")
    }
  };

  return (
    <div>
      <p>
        <button onClick={updateRun}>Run</button>
      </p>
      {run}
      <p>
        <button onClick={updateWicket}>Wicket</button>
      </p>
      {wicket}
      <p>{message}</p>
    </div>
  );
}
