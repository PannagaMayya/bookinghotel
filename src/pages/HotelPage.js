import React from "react";
import "./HotelPage.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBarHotel from "../components/SearchBarHotel";
function HotelPage() {
  return (
    <div className="d-flex p-2">
      <div className="d-block d-lg-none p-2 bg-warning">
        <FontAwesomeIcon
          icon={faBars}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasResponsive"
          aria-controls="offcanvasResponsive"
        />
        <div
          class="offcanvas-lg offcanvas-start"
          tabindex="-1"
          id="offcanvasResponsive"
          aria-labelledby="offcanvasResponsiveLabel"
        >
          <div class="offcanvas-header">
            <h6>Search</h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <SearchBarHotel />
          </div>
        </div>
      </div>

      <div className="d-none w-25 m-2 d-lg-block p-2 bg-warning">
        <SearchBarHotel />
      </div>
      <div className="flex-fill flex-column p-3  ">
        <div className="d-flex border border-dark m-2 p-2">
          <img
            src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            style={{ height: "250px", width: "300px" }}
            alt="hotelsImage1"
          ></img>

          <div className="d-flex flex-column flex-fill p-2">
            <p>Name</p>
            <p>Name</p>
            <p>Name</p>
          </div>
        </div>
        <div className="d-flex border border-dark m-2 p-2">
          <img
            src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            style={{ height: "250px", width: "300px" }}
            alt="hotelsImage1"
          ></img>

          <div className="d-flex flex-column flex-fill p-2 ">
            <p>Name</p>
            <p>Name</p>
            <p>Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelPage;
