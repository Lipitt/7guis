import { useState } from "react";

import "./Counter.css";
import Window from "../window/Window";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Window title="Counter">
      <div className="container">
        <input className="textbox" type="text" value={count} readOnly />
        <div className="add-sub-buttons">
          <input type="button" value="-" onClick={() => handleSubtract()} />
          <input type="button" value="+" onClick={() => setCount(count + 1)} />
        </div>
        <input type="button" value="Reset" onClick={() => setCount(0)} />
      </div>
    </Window>
  );
};

export default Counter;
