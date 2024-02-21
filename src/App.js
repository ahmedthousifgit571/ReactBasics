import "./App.css";
import { useState } from "react";
import Counter from "./counter";

function App() {
  const [state, setState] = useState(false);
  return (
    <div>
      <h1 onClick={() => setState(!state)}>Show / hide</h1>
      {state ? <Counter /> : null}
    </div>
  );
}

export default App;
