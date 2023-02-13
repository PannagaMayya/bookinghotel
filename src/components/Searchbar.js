import React from "react";
import PersonOptions from "./PersonOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Searchbar.css";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import {
  faBed,
  faCalendarDays,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Searchbar() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [actualDate, setActualDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleAdult = (e) => {
    setOptions((obj) => ({ ...obj, adult: obj.adult + e }));
  };
  const handleChildren = (e) => {
    setOptions((obj) => ({ ...obj, children: obj.children + e }));
  };
  const handleRoom = (e) => {
    setOptions((obj) => ({ ...obj, room: obj.room + e }));
  };
  const setDate = () => {
    console.log(state[0].startDate, state[0].endDate);
    setActualDate({
      startDate: state[0].startDate,
      endDate: state[0].endDate,
    });
  };
  return (
    <div className="container-lg">
      <div className="z-index-4 d-flex flex-column flex-md-row justify-content-center overlap">
        <div className="input-group align-items-center searchbar__inputs">
          <FontAwesomeIcon icon={faBed} className="input-group-text" />
          <input
            type="text"
            className="form-control"
            placeholder="Where are you going?"
          ></input>
        </div>
        <div className="w-auto text-nowrap input-group searchbar__inputs">
          <button
            className="btn btn-outline w-100"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#search_date"
          >
            <FontAwesomeIcon icon={faCalendarDays} />
            <small>
              {" "}
              {actualDate.startDate
                ? actualDate.startDate.toString().split(" ", 3).join(" ") +
                  " - " +
                  actualDate.endDate.toString().split(" ", 3).join(" ")
                : "Check-in - Check-out"}
            </small>
          </button>
        </div>
        <div className="w-auto text-nowrap input-group searchbar__inputs dropdown show">
          <button
            class="btn btn-outline w-100 dropdown-toggle"
            type="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            data-bs-target="#person__option"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
            <small>
              {options.adult +
                (options.adult === 1 ? "  adult  •  " : "  adults  •  ") +
                options.children +
                (options.children === 1
                  ? "  Child   •  "
                  : "  Children   •  ") +
                options.room +
                (options.room === 1 ? "  Room" : "  Rooms")}
            </small>
          </button>
          <PersonOptions
            handleAdult={handleAdult}
            handleChildren={handleChildren}
            handleRoom={handleRoom}
          />
        </div>
        <div className="d-flex align-self-stretch align-items-center searchbar__inputs search__button">
          <span>Search</span>
        </div>
      </div>

      <div class="modal" id="search_date" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Select Date Range</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body mx-auto">
              <DateRange
                onChange={(item) => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
                className="select_date"
              />
            </div>
            <div class="modal-footer mx-auto">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={(e) => {
                  setDate();
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
