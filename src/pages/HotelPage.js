import React, { useContext } from "react";
import "./HotelPage.css";
import {
  faAnglesRight,
  faAngleDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
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
          tabIndex="-1"
          id="offcanvasResponsive"
          aria-labelledby="offcanvasResponsiveLabel"
        >
          <div className="offcanvas-header">
            <div></div>
            <button
              type="button"
              className="btn-close float"
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
        className="d-none m-3 d-lg-block p-3 align-self-start bg-warning rounded sticky_style_search"
        style={{ width: "38%" }}
      >
        <SearchBarHotel />
      </div>
      <div className="flex-fill flex-column">
        {[1, 2, 3, 4].map((cur, i) => (
          <div
            className="d-flex flex-column border border-primary rounded mx-2 my-4 p-2"
            key={i}
          >
            <div className="d-flex">
              <img
                src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                style={{ objectFit: "cover", width: "24%" }}
                alt="hotelsImage1"
              ></img>

              <div className="d-flex flex-column flex-fill ps-3 py-1">
                <h6 className="hotel_heading mb-1">
                  Island Links Resort by PalmeraOpens in new window
                </h6>
                <p className="hotel_location mb-2">
                  {" "}
                  <span
                    style={{ textDecoration: "underline", color: "#3c7be1" }}
                    className="me-1"
                  >
                    <FontAwesomeIcon icon={faLocationDot} className="me-1" />
                    Island Link
                  </span>{" "}
                  2.6 km from center
                </p>
                <div
                  style={{
                    fontSize: "0.8rem",
                    borderLeft: "2px solid #136611",
                    paddingLeft: "0.2rem",
                  }}
                >
                  <button
                    className="btn d-block d-md-none"
                    style={{
                      fontSize: "0.6rem",
                      padding: "0.2rem 0.4rem",
                      backgroundColor: "#3c7be1",
                      color: "white",
                      fontWeight: "500",
                    }}
                  >
                    See availability
                  </button>
                  <div className="d-none d-md-block ms-2">
                    <strong>One-Bedroom Apartment</strong>
                    <p>
                      Entire apartment • 1 bedroom • 1 living room • 1 bathroom
                      • 1 kitchen • 50m² • 3 beds (2 sofa beds, 1 queen)
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="d-flex flex-column justify-content-between align-items-end w-25 py-1"
                style={{ fontSize: "0.87rem" }}
              >
                <div>
                  <small className="d-flex flex-column flex-sm-row align-items-center">
                    <strong className="text-nowrap">Very Good</strong>
                    <span className="badge bg-primary ms-1 fs-6">6.7</span>
                  </small>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-end">
                  <strong className="fs-6">
                    ₹{Intl.NumberFormat("en-IN").format(12312)}
                  </strong>

                  <p
                    className="fw-normal"
                    style={{
                      fontSize: "0.71rem",
                      marginBottom: "2px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {" "}
                    + Taxes and charges{" "}
                  </p>

                  <button
                    className="d-none d-md-block"
                    style={{
                      fontSize: "0.8rem",
                      padding: "0.2rem 0.4rem",
                      backgroundColor: "#3c7be1",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    See availability
                  </button>
                </div>
              </div>
            </div>
            <div
              className="text-center border border-primary rounded mt-2 d-block d-md-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#infominscreen" + i}
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faAngleDown} />
              <div
                className="collapse"
                id={"infominscreen" + i}
                style={{
                  fontSize: "0.7rem",
                  borderTop: "2px solid #136611",
                  paddingTop: "0.2rem",
                }}
              >
                <strong>One-Bedroom Apartment</strong>
                <p>
                  Entire apartment • 1 bedroom • 1 living room • 1 bathroom • 1
                  kitchen • 50m² • 3 beds (2 sofa beds, 1 queen)
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelPage;
