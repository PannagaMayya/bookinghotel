import React from "react";
import { useContext } from "react";
import Navbar from "./Navbar";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { darkModeContext } from "../StateProvider";
import { Link } from "react-router-dom";
function Header({ heading }) {
  const obj = useContext(darkModeContext);

  return (
    <div
      className={obj.isDark ? "text-white darktheme" : "text-dark lightheme "}
    >
      <div className="container-xxl p-2">
        <div className="row justify-content-center my-2 ">
          <Link
            to="/"
            className={
              obj.isDark ? "col col-sm-6 text-white" : "col col-sm-6 text-dark"
            }
            style={{ textDecoration: "none" }}
          >
            <div>
              <p className="fs-4 fw-bold logostyle">Hotels.com</p>
            </div>
          </Link>
          <div className="col col-sm-4">
            <div className="row gx-5">
              <div className="col ">
                <button
                  className={
                    obj.isDark ? "btn btn-light m-1" : "btn btn-dark m-1"
                  }
                >
                  SignIn
                </button>
                <button
                  className={
                    obj.isDark ? "btn btn-light m-1" : "btn btn-dark m-1"
                  }
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
                  onChange={obj.handleDarkMode}
                  checked={obj.isDark}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {obj.isDark ? (
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

        {heading && (
          <div className="mt-4 ms-sm-5 p-md-5">
            <h1>Find your next stay</h1>
            <h4>Search low prices on hotels, homes and much more...</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
