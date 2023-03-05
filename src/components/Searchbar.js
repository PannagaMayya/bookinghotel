import React, { useContext } from "react";
import PersonOptions from "./PersonOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { darkModeContext } from "../StateProvider";
import {
  faBed,
  faCalendarDays,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Searchbar() {
  const navigate = useNavigate();
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
  const incrementDecrement = (e, val) => {
    setOptions((obj) => ({ ...obj, [e]: obj[e] + val }));
  };

  const setDate = () => {
    console.log(state[0].startDate, state[0].endDate);
    setActualDate({
      startDate: state[0].startDate,
      endDate: state[0].endDate,
    });
  };
  const obj = useContext(darkModeContext);
  return (
    <div
      className={obj.isDark ? "bg-dark" : "bg-light"}
      style={{ zIndex: "1060", position: "relative" }}
    >
      <div className="container-lg">
        <div className="z-index-5 d-flex flex-column flex-md-row justify-content-center overlap">
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
          <div className="w-auto text-nowrap input-group searchbar__inputs dropdown">
            <button
              className="btn btn-outline w-100"
              type="button"
              id="dropdownMenuLink"
              data-bs-toggle="collapse"
              data-bs-target="#person__option"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
              <small>
                {options.adult +
                  (options.adult === 1 ? "  Adult  •  " : "  Adults  •  ") +
                  options.children +
                  (options.children === 1
                    ? "  Child   •  "
                    : "  Children   •  ") +
                  options.room +
                  (options.room === 1 ? "  Room" : "  Rooms")}
              </small>
            </button>
            <PersonOptions
              incrementDecrement={incrementDecrement}
              options={options}
              isHotelPage={false}
            />
          </div>
          <div
            className="d-flex align-self-stretch align-items-center searchbar__inputs search__button"
            onClick={() => navigate("/hotels")}
          >
            <span>Search</span>
          </div>
        </div>

        <div className="modal" id="search_date" tabIndex="-1">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Select Date Range</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body mx-auto">
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
              <div className="modal-footer mx-auto">
                <button
                  type="button"
                  className="btn btn-primary"
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
    </div>
  );
}

export default Searchbar;
