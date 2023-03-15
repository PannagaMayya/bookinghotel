import React from "react";
import { useParams } from "react-router-dom";
import hotelData from "../dataJSON/hotelData.json";
import ErrorPage from "./ErrorPage";
import {
  faAnglesRight,
  faAngleDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function IndHotel() {
  const { id } = useParams();
  const curHotel = hotelData.data.hotellist.filter((cur) => id === cur.id);
  return (
    <div className="container min-vh-100 py-2">
      {curHotel.length ? (
        <div>
          <div>
            <div className="d-flex">
              <h4 className="flex-fill">{curHotel[0].title}</h4>
              <button
                className="align-self-start"
                style={{
                  fontSize: "0.97rem",
                  padding: "0.4rem 0.7rem",
                  backgroundColor: "#3c7be1",
                  color: "white",
                  fontWeight: "500",
                  border: "none",
                }}
              >
                Reserve
              </button>
            </div>
            <p>
              <span>
                <FontAwesomeIcon icon={faLocationDot} className="me-1" />
              </span>
              {curHotel[0].location}
            </p>
          </div>
          <div className="container">
            {[0, 1, 2, 3, 4].map((cur, i) => (
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/223496641.webp?k=80081aca5d33e0b1d46eae242d1e36110d6674326e1a0cd9ff7b87dc4e4ac7c1&o=&s=1"
                alt="hotel"
                key={i}
                className="col"
              ></img>
            ))}
          </div>
          <div>Icons Area</div>
          <div className="d-flex flex-column flex-md-row">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                nisi scelerisque eu ultrices vitae. Amet cursus sit amet dictum
                sit amet justo donec. Imperdiet sed euismod nisi porta. Nibh
                tortor id aliquet lectus proin nibh nisl. Interdum velit laoreet
                id donec ultrices tincidunt arcu non sodales. Ac tortor vitae
                purus faucibus ornare suspendisse sed nisi lacus. Viverra tellus
                in hac habitasse platea dictumst vestibulum. Donec ultrices
                tincidunt arcu non sodales neque sodales ut. Vitae auctor eu
                augue ut lectus arcu bibendum. Eu nisl nunc mi ipsum. Neque
                viverra justo nec ultrices dui sapien. Cras adipiscing enim eu
                turpis egestas pretium aenean. Nisl suscipit adipiscing bibendum
                est ultricies. Turpis cursus in hac habitasse platea dictumst
                quisque sagittis purus.
              </p>
            </div>
            <div
              className="p-3 ms-2 rounded"
              style={{ minWidth: "25vw", backgroundColor: "#9fc5e8" }}
            >
              <h5>Property Highlights</h5>
              <h6>Perfect for a 1-night stay!</h6>
              <p>Top Location: Highly rated by recent guests (8.7)</p>
              <h6>Breakfast Info</h6>
              <p>Continental, Buffet</p>
              <p>Free private parking available at the hotel</p>
              <h6>Loyal Customers</h6>
              <p>
                There are more repeat guests here than most other properties.
              </p>
              <button
                style={{
                  width: "100%",
                  fontSize: "0.9rem",
                  padding: "0.4rem",
                  backgroundColor: "#3c7be1",
                  color: "white",
                  fontWeight: "500",
                  border: "none",
                }}
              >
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}

export default IndHotel;
