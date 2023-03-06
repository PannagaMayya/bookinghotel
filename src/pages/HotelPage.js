import React, { useContext } from "react";
import "./HotelPage.css";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBarHotel from "../components/SearchBarHotel";
import { darkModeContext } from "../StateProvider";
function HotelPage() {
  const obj = useContext(darkModeContext);
  return (
    <div
      className={
        obj.isDark
          ? "container-xxl d-flex p-2 bg-dark text-white"
          : "container-xxl d-flex p-2 bg-light text-dark"
      }
    >
      <div className="d-block d-lg-none justify-content-center p-2 bg-warning ">
        <FontAwesomeIcon
          icon={faAnglesRight}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasResponsive"
          aria-controls="offcanvasResponsive"
          className="sticky_style"
        />
        <div
          className="offcanvas-lg offcanvas-start bg-warning "
          tabindex="-1"
          id="offcanvasResponsive"
          aria-labelledby="offcanvasResponsiveLabel"
        >
          <div class="offcanvas-header">
            <h6>Search</h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <SearchBarHotel />
          </div>
        </div>
      </div>

      <div
        className="d-none m-1 d-lg-block p-2 align-self-start bg-warning sticky_style"
        style={{ width: "38%" }}
      >
        <SearchBarHotel />
      </div>
      <div className="flex-fill flex-column">
        {[1, 2, 3, 4].map((cur, i) => (
          <div className="d-flex border border-primary mx-2 my-4 p-2">
            <img
              src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              style={{ objectFit: "cover", width: "26%" }}
              alt="hotelsImage1"
            ></img>

            <div className="d-flex flex-column flex-fill p-2 ">
              <h6 className="hotel_heading">
                Island Links Resort by PalmeraOpens in new window
              </h6>
              <div
                style={{
                  fontSize: "0.8rem",
                  borderLeft: "2px solid #136611",
                  paddingLeft: "0.2rem",
                }}
              >
                <strong>One-Bedroom Apartment</strong>
                <button className="btn btn-link d-block d-md-none">
                  <small>See availability</small>
                </button>
                <p className="d-none d-md-block">
                  Entire apartment • 1 bedroom • 1 living room • 1 bathroom • 1
                  kitchen • 50m² • 3 beds (2 sofa beds, 1 queen)
                </p>
              </div>
            </div>
            <div
              className="d-flex flex-column justify-content-between align-items-end w-25 p-2"
              style={{ fontSize: "0.9rem" }}
            >
              <div>
                <small>
                  <strong>Very Good </strong>
                </small>
                <span class="badge bg-primary">6.7</span>
              </div>
              <div>
                <strong>₹{Intl.NumberFormat("en-IN").format(12312)}</strong>
              </div>
              <button
                className="d-none d-md-block"
                style={{
                  fontSize: "0.8rem",
                  padding: "0.2rem",
                  backgroundColor: "#3c7be1",
                  color: "white",
                }}
              >
                See availability
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelPage;
