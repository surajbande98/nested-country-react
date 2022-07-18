import React, { useEffect, useRef, useState } from "react";
import { DataService } from "./data.service";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const countryRef = useRef("");

  const getCountries = () => {
    setCountries(DataService.getCountries());
  };

  useEffect(() => {
    getCountries();
  }, []);

  const onCountrySelect = (e) => {
    setCities([]);

    if (e.target.value) {
      setStates(DataService.getStatesByCountry(e.target.value));
    }
  };

  const onStateSelect = (e) => {

    if (e.target.value) {
      setCities(
        DataService.getCitiesByState(countryRef.current.value, e.target.value)
      );
    }
  };

  return (
    <div className="App">
      <select ref={countryRef} onChange={onCountrySelect}>
        <option value="">Select Country</option>

        {countries &&
          countries.length &&
          countries.map((country, index) => (
            <option value={country.shortName} key={country.shortName}>
              {country.name}
            </option>
          ))}
      </select>
      <br />

      <select onChange={onStateSelect}>
        <option value="">Select State</option>

        {states &&
          states.length &&
          states.map((state) => (
            <option value={state} key={state}>
              {state}
            </option>
          ))}
      </select>

      <br />

      <select>
        <option>Select city</option>
        {states &&
          cities.length &&
          cities.map((state) => (
            <option value={state} key={state}>
              {state}
            </option>
          ))}
      </select>
    </div>
  );
}
