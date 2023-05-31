import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { darkModeContext } from "../StateProvider";

function ErrorPage() {
  const obj = useContext(darkModeContext);
  return (
    <div
      className={
        obj.isDark
          ? "bg-darkC min-vh-100 text-center p-5"
          : "bg-light min-vh-100 text-center p-5"
      }
    >
      <h1 className="text-danger">404 - Not Found</h1>
      <p className="text-danger fs-6">Could not Identify the link:(</p>
      <Link to="/">Home</Link> | <Link to="/hotels">Hotel</Link>
    </div>
  );
}

export default ErrorPage;
