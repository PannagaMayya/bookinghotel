import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Searchbar.css";

import {
  faBed,
  faCalendarDays,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Searchbar() {
  return (
    <div className="z-index-5 d-flex flex-column flex-md-row justify-content-center mx-sm-5 overlap">
      <div className="d-flex flex-grow-1 align-items-center searchbar__inputs">
        <FontAwesomeIcon icon={faBed} />
        <span>
          <input type="text" placeholder="Where are you going?"></input>
        </span>
      </div>
      <div className="d-flex flex-grow-0 align-items-center searchbar__inputs">
        <FontAwesomeIcon icon={faCalendarDays} />
        <span>Check in Date - Check-out-date</span>
      </div>
      <div className="d-flex flex-grow-0 align-items-center searchbar__inputs">
        <FontAwesomeIcon icon={faUser} />
        <span>2 adults 0 Children 1 Room</span>
      </div>
      <div className="d-flex align-items-center searchbar__inputs search__button">
        <span>Search</span>
      </div>
    </div>
  );
}

export default Searchbar;
