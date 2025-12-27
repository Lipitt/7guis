import { useState } from "react";
import Window from "../window/Window";
import "./TemperatureConverter.css";

const TemperatureConverter = () => {
  const [celsiusValue, setCelsiusValue] = useState(null);
  const [fahrenheitValue, setFahrenheitValue] = useState(null);

  const handleCelsiusValueChange = e => {
    setCelsiusValue(e.target.value);

    if (e.target.value) {
      setFahrenheitValue(e.target.value * 1.8 + 32);
    } else {
      setFahrenheitValue(0);
    }
  };

  const handleFahrenheitValueChange = e => {
    setFahrenheitValue(e.target.value);

    if (e.target.value) {
      setCelsiusValue((e.target.value - 32) / 1.8);
    } else {
      setCelsiusValue(0);
    }
  };

  return (
    <Window title="Temperature Converter">
      <div className="temperature-container">
        <input
          type="number"
          onChange={e => handleCelsiusValueChange(e)}
          value={celsiusValue}
        />
        <p>Celsius</p>
        <span>=</span>
        <input
          type="number"
          value={fahrenheitValue}
          onChange={e => handleFahrenheitValueChange(e)}
        />

        <p>Fahrenheit</p>
      </div>
    </Window>
  );
};

export default TemperatureConverter;
