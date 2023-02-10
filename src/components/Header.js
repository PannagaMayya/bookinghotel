import React from "react";
import { useState } from "react";
import Navbar from "../pages/Navbar";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [isDark, setIsDark] = useState(true);
  const handleSwitch = () => {
    setIsDark((val) => !isDark);
  };
  return (
    <div
      className={
        isDark
          ? "container-xxl text-white p-2 darktheme z-index-n1"
          : "container-xxl text-dark p-2 lightheme z-index-n1"
      }
    >
      <div className="row justify-content-center my-2 ">
        <div className="col col-sm-6">
          <p className="fs-4 fw-bold logostyle">Hotels.com</p>
        </div>
        <div className="col col-sm-4">
          <div className="row gx-5">
            <div className="col ">
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

            <div className="col col-md-3 form-check form-switch align-items-end mt-1">
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
                {isDark ? (
                  <FontAwesomeIcon icon={faMoon} />
                ) : (
                  <FontAwesomeIcon icon={faSun} />
                )}
              </label>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <div className="mt-5 ms-sm-5 p-md-5">
        <h1>Find your next stay</h1>
        <h4>Search low prices on hotels, homes and much more...</h4>
      </div>
    </div>
  );
}

export default Header;
