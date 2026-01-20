import { useState } from "react";
import Window from "../window/Window";
import "./FlightBooker.css";
import { validateDate } from "./utils";

const flightTypes = {
  oneWayFlight: "One-way flight",
  returnFlight: "Return flight"
};

const FlightBooker = () => {
  const [flightType, setFlightType] = useState(flightTypes.oneWayFlight);
  const [fromDate, setFromDate] = useState("21-12-2025");
  const [toDate, setToDate] = useState("21-12-2025");
  const [fromDateError, setFromDateError] = useState(false);
  const [toDateError, setToDateError] = useState(false);

  const handleSubmit = () => {
    if (flightType === flightTypes.oneWayFlight) {
      alert(`You have booked a ${flightType} for ${fromDate}`);
    } else {
      alert(`You have booked a ${flightType} from ${fromDate} to ${toDate}`);
    }
  };

  const handleFlightTypeChange = value => {
    setFlightType(value);
  };

  const toISODate = input => {
    const [day, month, year] = input.match(/\d+/g) || [];
    if (!day || !month || !year) return null;

    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const isReturnFlightBeforeOneWay = (fromDate, toDate) => {
    const oneWayFlightDate = new Date(toISODate(fromDate));
    const returnFlightDate = new Date(toISODate(toDate));

    return returnFlightDate < oneWayFlightDate;
  };

  const handleFromDateChange = date => {
    setFromDate(date);
    setFromDateError(validateDate(date));
  };

  const handleToDateChange = date => {
    setToDate(date);
    setToDateError(validateDate(date));
  };

  const isSubmitButtonDisabled = (
    fromDateError,
    toDateError,
    fromDate,
    toDate,
    flightType
  ) => {
    if (fromDateError || toDateError) {
      return true;
    }

    return flightType === flightTypes.returnFlight
      ? isReturnFlightBeforeOneWay(fromDate, toDate)
      : false;
  };

  return (
    <Window title="Flight Booker">
      <div className="flight-booker">
        <select
          value={flightType}
          onChange={e => handleFlightTypeChange(e.target.value)}
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
          onChange={e => handleFromDateChange(e.target.value)}
          value={fromDate}
          style={{ backgroundColor: `${fromDateError ? "orange" : "white"}` }}
        />
        <input
          type="text"
          onChange={e => handleToDateChange(e.target.value)}
          value={toDate}
          disabled={flightType === flightTypes.oneWayFlight}
          style={{ backgroundColor: `${toDateError ? "orange" : "white"}` }}
        />
        <button
          disabled={isSubmitButtonDisabled(
            fromDateError,
            toDateError,
            fromDate,
            toDate,
            flightType
          )}
          onClick={handleSubmit}
        >
          Book
        </button>
      </div>
    </Window>
  );
};

export default FlightBooker;
