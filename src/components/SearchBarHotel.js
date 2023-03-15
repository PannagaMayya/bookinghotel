import React, { useState } from "react";
import PersonOptions from "./PersonOptions";
import { addDays } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
function SearchBarHotel() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const incrementDecrement = (e, val) => {
    setOptions((obj) => ({ ...obj, [e]: obj[e] + val }));
  };
  return (
    <>
      <div className="d-flex flex-column text-dark">
        <h5>Search</h5>
        <label htmlFor="hotelpagedestination" className="form-label fw-normal">
          Destination
        </label>

        <input type="text" className="form-control" id="hotelpagedestination" />
        <label htmlFor="hotelpagedate" className="form-label fw-normal">
          Select Date
        </label>
        <div
          className="text-nowrap input-group rounded"
          id="hotelpagedate"
          style={{ backgroundColor: "white", position: "relative" }}
        >
          <button
            className="btn btn-outline w-100"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#date_hotel"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faCalendarDays} />
            <small> Check-in - Check-out</small>
          </button>
          <div
            id="date_hotel"
            className="dropdown-menu top-100 date__hotel__width"
            aria-labelledby="dropdownMenuLink"
          >
            <DateRange
              onChange={(item) => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
              className="date__hotel__width"
            />
          </div>
        </div>

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
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
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
    </>
  );
}

export default SearchBarHotel;
