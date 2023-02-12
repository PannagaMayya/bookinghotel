import React from "react";
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
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [actualDate, setActualDate] = useState({
    startDate: null,
    endDate: null,
  });
  const setDate = () => {
    console.log(state[0].startDate, state[0].endDate);
    setActualDate({
      startDate: state[0].startDate,
      endDate: state[0].endDate,
    });
  };
  return (
    <>
      <div className="z-index-4 d-flex flex-column flex-md-row justify-content-center mx-sm-5 overlap">
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
            class="btn btn-outline"
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
        <div className="w-auto text-nowrap input-group searchbar__inputs">
          <button
            class="btn btn-outline"
            type="button"
            id="search_user_details"
          >
            <FontAwesomeIcon icon={faUser} />
            <small> 2 adults 0 Children 1 Room</small>
          </button>
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
    </>
  );
}

export default Searchbar;
