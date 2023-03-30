import React, { useContext } from "react";
import hotelData from "../dataJSON/hotelData.json";
import "./HotelPage.css";
import {
  faAnglesRight,
  faAngleDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBarHotel from "../components/SearchBarHotel";
import { darkModeContext } from "../StateProvider";
import { useLocation, useNavigate } from "react-router-dom";
function HotelPage() {
  const location = useLocation();
  const obj = useContext(darkModeContext);
  const navigate = useNavigate();
  console.log(location?.state);
  return (
    <div
      className={
        obj.isDark
          ? "container-xxl min-vh-100 d-flex p-2 bg-dark text-white"
          : "container-xxl min-vh-100 d-flex p-2 bg-light text-dark"
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
            <SearchBarHotel searchState={location?.state} />
          </div>
        </div>
      </div>

      <div
        className="d-none m-3 d-lg-block p-3 align-self-start bg-warning rounded sticky_style_search"
        style={{ width: "38%" }}
      >
        <SearchBarHotel searchState={location?.state} />
      </div>
      <div className="flex-fill flex-column">
        {hotelData.data.hotellist.map((cur, i) => (
          <div
            className="d-flex flex-column border border-primary rounded mx-2 my-4 p-2"
            key={cur.id}
          >
            <div className="d-flex">
              <img
                src={cur.imglink}
                style={{ objectFit: "cover", width: "24%" }}
                alt="hotelsImage1"
              ></img>

              <div className="d-flex flex-column flex-fill ps-3 py-1">
                <h5 className="hotel_heading mb-1">
                  {cur.title.length > 46
                    ? cur.title.slice(0, 46) + "...."
                    : cur.title}
                </h5>
                <p className="hotel_location mb-2">
                  {" "}
                  <span
                    style={{ textDecoration: "underline", color: "#3c7be1" }}
                    className="me-1"
                  >
                    <FontAwesomeIcon icon={faLocationDot} className="me-1" />
                    {cur.location}
                  </span>{" "}
                  {cur.km} km from center
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
                    onClick={(e) => {
                      navigate("/hotel/" + cur.id);
                    }}
                  >
                    See availability
                  </button>
                  <div className="d-none d-md-block ms-2">
                    <strong>{cur.descriptionheading}</strong>
                    <p>{cur.description}</p>
                    {cur.descriptionGreenheading && (
                      <div className="text-success">
                        <strong>{cur.descriptionGreenheading}</strong>
                        <p>{cur.descriptionGreen}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="d-flex flex-column justify-content-between align-items-end w-25 py-1"
                style={{ fontSize: "0.87rem" }}
              >
                <div>
                  <small className="d-flex flex-column flex-sm-row align-items-center">
                    <strong className="text-nowrap">
                      {getRating(cur.rating)}
                    </strong>
                    <span className="badge bg-primary ms-1 fs-6">
                      {cur.rating}
                    </span>
                  </small>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-end">
                  <strong className="fs-6">
                    ₹{Intl.NumberFormat("en-IN").format(cur.price)}
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
                    onClick={(e) => {
                      navigate("/hotel/" + cur.id);
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
                <strong>{cur.descriptionheading}</strong>
                <p>{cur.description}</p>
                {cur.descriptionGreenheading && (
                  <div className="text-success">
                    <strong>{cur.descriptionGreenheading}</strong>
                    <p>{cur.descriptionGreen}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const getRating = (rating) => {
  if (rating > 8.5) return "Excellent";
  if (rating > 6.5) return "Very Good";
  if (rating > 4) return "Good";
  return "Average";
};
export default HotelPage;
