import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  const removevalue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="container">
        <h1>chai aur react</h1>
        <h2>Counter value:{counter}</h2>

        <button onClick={addValue}>Add value {counter}</button>

        <br />
        <button onClick={removevalue}>Remove value {counter}</button>
        <p>footer: {counter}</p>
      </div>
    </>
  );
}

export default App;
