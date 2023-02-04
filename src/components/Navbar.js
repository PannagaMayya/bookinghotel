import React from "react";
import { useState } from "react";
import "./NavBar.css";
function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const handleSwitch = () => {
    console.log(isDark);
    setIsDark(!isDark);
  };
  return (
    <div
      className={
        isDark
          ? "container-xxl text-white p-2 darktheme"
          : "container-xxl text-dark p-2 lightheme"
      }
    >
      <div className="row justify-content-center">
        <div className="col col-sm-6">
          <p className="fs-4 fw-bold logostyle">Hotels.com</p>
        </div>
        <div className="col col-sm-4 align-items-end">
          <div className="row">
            <div className="col">
              <button
                className={isDark ? "btn btn-light m-1" : "btn btn-dark m-1"}
              >
                SignIn
              </button>
              <button
                className={isDark ? "btn btn-light m-1" : "btn btn-dark m-1"}
              >
                Register
              </button>
            </div>

            <div className="col form-check form-switch align-items-end mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={handleSwitch}
                checked={isDark}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
