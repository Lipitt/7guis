import { useState } from "react";
import Window from "../window/Window";
import "./FlightBooker.css";

const flightTypes = {
  oneWayFlight: "One-way flight",
  returnFlight: "Return flight"
};

const FlightBooker = () => {
  const [flightType, setFlightType] = useState(flightTypes.oneWayFlight);
  const [fromDate, setFromDate] = useState("2025-12-21");
  const [toDate, setToDate] = useState("21-12-2025");

  const handleSubmit = () => {
    if (flightType === flightTypes.oneWayFlight) {
      alert(`You have booked a ${flightType} for ${fromDate}`);
    } else {
      alert(`You have booked a ${flightType} from ${fromDate} to ${toDate}`);
    }
  };

  const isReturnFlightBeforeOneWay = () => {
    const oneWayFlightDate = new Date(fromDate, "");
    const returnFlightDate = new Date(toDate);

    console.log(returnFlightDate);
    console.log(oneWayFlightDate);

    if (returnFlightDate < oneWayFlightDate) {
      console.log("bonanza!");
    } else {
      console.log("fail!");
    }
  };

  const handleFromDateChange = date => {
    setFromDate(date);
    validateDate(date);
  };

  const validateDate = date => {
    if (date.length < 9) {
      return;
    }

    if (date.length > 9) {
      //handle error
    }

    const nonNumberRegex = /[^0-9]/g;
    const dateArray = date.split(nonNumberRegex);
    console.log(dateArray);
  };

  return (
    <Window title="Flight Booker">
      <div className="flight-booker">
        <select
          value={flightType}
          onChange={e => setFlightType(e.target.value)}
        >
          <option value={flightTypes.oneWayFlight}>
            {flightTypes.oneWayFlight}
          </option>
          <option value={flightTypes.returnFlight}>
            {flightTypes.returnFlight}
          </option>
        </select>
        <input
          type="text"
          //onChange={e => setFromDate(e.target.value)}
          onChange={e => handleFromDateChange(e.target.value)}
          value={fromDate}
        />
        <input
          type="text"
          onChange={e => setToDate(e.target.value)}
          value={toDate}
          disabled={flightType === flightTypes.oneWayFlight}
        />
        <button onClick={isReturnFlightBeforeOneWay}>Book</button>
      </div>
    </Window>
  );
};

export default FlightBooker;
