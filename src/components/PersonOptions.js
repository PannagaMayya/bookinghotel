import React from "react";

function PersonOptions({ handleAdult, handleChildren, handleRoom }) {
  let contents = [
    { name: "Adults", min: 1, handleChange: handleAdult },
    { name: "Children", min: 1, handleChange: handleChildren },
    { name: "Rooms", min: 1, handleChange: handleRoom },
  ];
  return (
    <div
      id="person__option"
      className="dropdown-menu w-100"
      aria-labelledby="dropdownMenuLink"
      style={{ display: "block !important" }}
    >
      {contents.map((el, i) => (
        <div
          key={i}
          className="d-flex justify-content-between align-items-center m-2"
        >
          <div>{el.name}</div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                el.handleChange(-1);
              }}
            >
              -
            </button>
            <div className="mx-3">{el.min}</div>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                el.handleChange(1);
              }}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PersonOptions;
