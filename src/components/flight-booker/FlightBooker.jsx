import { useState } from "react";
import Window from "../window/Window";
import "./FlightBooker.css";

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
  const [disableSubmit, setDisableSubmit] = useState(false);

  const handleSubmit = () => {
    if (flightType === flightTypes.oneWayFlight) {
      alert(`You have booked a ${flightType} for ${fromDate}`);
    } else {
      alert(`You have booked a ${flightType} from ${fromDate} to ${toDate}`);
    }
  };

  const handleFlightTypeChange = value => {
    setFlightType(value);
    if (value === flightTypes.returnFlight) {
      isReturnFlightBeforeOneWay();
    }
  };

  const isReturnFlightBeforeOneWay = () => {
    const oneWayFlightDate = new Date(fromDate, "");
    const returnFlightDate = new Date(toDate);

    console.log(returnFlightDate);
    console.log(oneWayFlightDate);

    if (returnFlightDate < oneWayFlightDate) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  };

  const handleFromDateChange = date => {
    setFromDate(date);

    if (validateDate(date)) {
      setFromDateError(false);
      setDisableSubmit(false);
    } else {
      setFromDateError(true);
      setDisableSubmit(true);
    }
  };

  const handleToDateChange = date => {
    setToDate(date);

    if (validateDate(date)) {
      setToDateError(false);
      setDisableSubmit(false);
    } else {
      setToDateError(true);
      setDisableSubmit(true);
    }
  };

  const validateDate = date => {
    const dateValidatorRegex = /^\d{2}\D\d{2}\D\d{4}$/;
    if (date.length !== 10) {
      return false;
    } else if (dateValidatorRegex.test(date)) {
      return true;
    } else {
      return false;
    }
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
        <button disabled={disableSubmit} onClick={handleSubmit}>
          Book
        </button>
      </div>
    </Window>
  );
};

export default FlightBooker;
