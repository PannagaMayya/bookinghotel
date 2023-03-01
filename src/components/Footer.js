import React from "react";
import { darkModeContext } from "../StateProvider";
import { useContext } from "react";
import "./Footer.css";
function Footer() {
  const obj = useContext(darkModeContext);
  return (
    <>
      <div
        className={
          obj.isDark
            ? "text-white darktheme d-flex flex-column align-items-center p-5"
            : "text-dark lightheme d-flex flex-column align-items-center p-5"
        }
      >
        <h4>Save time, save money!</h4>
        <h6>Sign up and we'll send the best deals to you</h6>

        <div className="d-flex justify-content-center m-4 w-50">
          <input
            type="email"
            className="w-50 p-2"
            placeholder="Your email Address"
          />
          <input
            type="submit"
            value="Subscribe"
            className=" footer_subscribe"
          />
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Footer;
