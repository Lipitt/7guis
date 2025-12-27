import "./App.css";
import Counter from "./components/counter/Counter";
import TemperatureConverter from "./components/converter/TemperatureConverter";
import FlightBooker from "./components/flight-booker/FlightBooker";

function App() {
  return (
    <div className="main-container">
      <Counter />
      <TemperatureConverter />
      <FlightBooker />
    </div>
  );
}

export default App;
