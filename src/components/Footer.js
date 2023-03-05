import React from "react";
import { darkModeContext } from "../StateProvider";
import { useContext } from "react";
import FooterList from "./FooterList";
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
        <h6 className="fw-light">
          Sign up and we'll send the best deals to you
        </h6>

        <div className="d-flex justify-content-center m-4 w-75">
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
      <div className="d-flex justify-content-around h-100 text-white text-decoration-underline border border-light footer_secondary">
        <p className="h6 fw-normal">Mobile version</p>
        <p className="h6 fw-normal">Your Account</p>
        <p className="h6 fw-normal">Make changes online</p>
        <p className="h6 fw-normal">Customer Service</p>
        <p className="h6 fw-normal">Become an affiliate</p>
      </div>
      <FooterList isDark={obj.isDark} />
    </>
  );
}

export default Footer;
