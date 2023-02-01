import React from "react";
import { useState } from "react";
function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const handleSwitch = () => {
    console.log(isDark);
    setIsDark(!isDark);
  };
  return (
    <div
      className={
        isDark
          ? "container-fluid justify-content-center align-items-center bg-dark text-white p-2"
          : "container-fluid justify-content-center align-items-center bg-light text-dark p-2"
      }
    >
      <div className="row">
        <div className="col-sm-4">Logo And Heading</div>
        <div className="col-sm-6 d-flex justify-content-end">
          <button className="btn btn-primary m-1">Login</button>
          <button className="btn btn-primary m-1">Register</button>
        </div>
        <div className="col-sm-2 form-check form-switch d-flex justify-content-end mt-1">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={handleSwitch}
            checked={isDark}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
