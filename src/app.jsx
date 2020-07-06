import React, { useState } from "react";
import "./app.scss";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
};

export default App;
