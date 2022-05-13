import React from "react";
import { useState } from "react";
import Joke from "./Joke";
import Rediit from "./Rediit";

function FetchData(props) {
  const [reditVisibile, setReditVisibile] = useState(false);
  const [joke, setJoke] = useState(null);
  function redit() {
    setReditVisibile((prevValue) => !prevValue);
  }
  return (
    <div>
      React Fetch Data
      <div className="buttons">
        <button onClick={redit}>Toggle Redit</button>
        <button onClick={() => setJoke((prevState) => !prevState)}>
          Toggle Joe
        </button>
      </div>
      <div className="main-content">
        {reditVisibile && <Rediit></Rediit>}
        {joke && <Joke />}
      </div>
    </div>
  );
}

export default FetchData;
