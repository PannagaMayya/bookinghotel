import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import {
  faBed,
  faPlane,
  faCar,
  faDharmachakra,
} from "@fortawesome/free-solid-svg-icons";
function Home({ isDark }) {
  const handleChange = (e) => {
    setSC(e.target.value);
  };

  const [selectedContent, setSC] = useState("Stays");
  return (
    <div className="container">
      <div className="d-none d-sm-flex justify-content-center w-75 fonts__home">
        <div>
          <FontAwesomeIcon icon={faBed} /> <span>Stays</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPlane} /> <span>Flights</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCar} /> <span>Car Rentals</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faDharmachakra} /> <span>Attractions</span>
        </div>
      </div>
      <div className="d-block d-sm-none">
        <select
          class="form-select w-50"
          value={selectedContent}
          onChange={handleChange}
        >
          <option value="Stays">Stays</option>
          <option value="Flights">Flights</option>
          <option value="CarRentals">Car Rentals</option>
          <option value="Attractions">Attractions</option>
        </select>
      </div>
    </div>
  );
}

export default Home;
