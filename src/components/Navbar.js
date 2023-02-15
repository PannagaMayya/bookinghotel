import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

import {
  faBed,
  faPlane,
  faCar,
  faDharmachakra,
} from "@fortawesome/free-solid-svg-icons";
let navlist = [
  { name: "Stays", iconName: faBed },
  { name: "Flights", iconName: faPlane },

  { name: "Car Rentals", iconName: faCar },

  { name: "Attractions", iconName: faDharmachakra },
];
function Navbar({ isDark }) {
  const handleChange = (e) => {
    console.log(e);
    setSC(e);
  };

  const [selectedContent, setSC] = useState("Stays");
  return (
    <div className="container mb-3">
      <div className="d-none d-sm-flex gap-5 justify-content-start w-75 fonts__navbar">
        {navlist.map((e, i) => (
          <div
            key={i}
            className={selectedContent === e.name ? "current_page" : ""}
            onClick={() => {
              handleChange(e.name);
            }}
          >
            <FontAwesomeIcon icon={e.iconName} /> <span>{e.name}</span>
          </div>
        ))}
      </div>
      <div className="d-block d-sm-none">
        <select
          className="form-select w-50"
          value={selectedContent}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        >
          <option value="Stays">Stays</option>
          <option value="Flights">Flights</option>
          <option value="Car Rentals">Car Rentals</option>
          <option value="Attractions">Attractions</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
