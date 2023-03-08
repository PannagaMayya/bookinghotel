import React, { useState } from "react";
import PersonOptions from "./PersonOptions";
function SearchBarHotel() {
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const incrementDecrement = (e, val) => {
    setOptions((obj) => ({ ...obj, [e]: obj[e] + val }));
  };
  return (
    <div className="d-flex flex-column text-dark">
      <h5>Search</h5>
      <label htmlFor="hotelpagedestination" className="form-label fw-normal">
        Destination
      </label>
      <input type="text" className="form-control" id="hotelpagedestination" />
      <label htmlFor="hotelpagedate" className="form-label fw-normal">
        Check-in/Check-out date
      </label>
      <input type="text" className="form-control" id="hotelpagedate" />

      <label htmlFor="searchOptions" className="form-label fw-normal">
        Select Options
      </label>
      <button
        className="btn"
        type="button"
        id="searchOptions"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSearchOption"
        aria-expanded="false"
        style={{ backgroundColor: "white" }}
      >
        <small>
          {options.adult +
            (options.adult === 1 ? "  Adult  •  " : "  Adults  •  ") +
            options.children +
            (options.children === 1 ? "  Child   •  " : "  Children   •  ") +
            options.room +
            (options.room === 1 ? "  Room" : "  Rooms")}
        </small>
      </button>
      <div
        className="collapse"
        id="collapseSearchOption"
        style={{ backgroundColor: "white", marginTop: "3px" }}
      >
        <PersonOptions
          incrementDecrement={incrementDecrement}
          options={{
            adult: options.adult,
            children: options.children,
            room: options.room,
          }}
          isHotelPage={true}
        />
      </div>
      <button className="searchHotel_button">Search</button>
    </div>
  );
}

export default SearchBarHotel;
