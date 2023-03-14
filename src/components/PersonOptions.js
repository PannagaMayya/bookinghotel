import React from "react";

function PersonOptions({ incrementDecrement, options, isHotelPage }) {
  let contents = [
    { name: "adult", val: options.adult },
    { name: "children", val: options.children },
    { name: "room", val: options.room },
  ];
  return (
    <div
      id="person__option"
      className={!isHotelPage ? "dropdown-menu w-100 top-100" : ""}
      style={{ left: "0" }}
      aria-labelledby="dropdownMenuLink"
    >
      {contents.map((el, i) => (
        <div
          key={i}
          className="d-flex justify-content-between align-items-center m-2"
        >
          <div>{el.name.charAt(0).toUpperCase() + el.name.slice(1)}</div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                incrementDecrement(el.name, -1);
              }}
              disabled={el.name === "children" ? el.val <= 0 : el.val <= 1}
            >
              -
            </button>
            <div className="mx-3">{el.val}</div>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                incrementDecrement(el.name, 1);
              }}
              disabled={el.val >= 9}
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
