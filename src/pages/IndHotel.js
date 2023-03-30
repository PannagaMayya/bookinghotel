import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import hotelData from "../dataJSON/hotelData.json";
import ErrorPage from "./ErrorPage";
import "./IndHotel.css";
import {
  faWifi,
  faSnowflake,
  faShower,
  faBanSmoking,
  faTv,
  faParking,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { darkModeContext } from "../StateProvider";

function IndHotel() {
  const images = [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/274545386.jpg?k=e2eece9d117ac05fa248c98a383827fdefb8330883064a91a0f7b30b0a2327f3&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/415230280.jpg?k=04868b4bbafd24f75b81ff5701a4b28f4801653baffdce3ade6af88565f719ec&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/274545378.jpg?k=8394948044a1c514cb1acd0725a9aadce54014e6b29ddb4be6cf0c41464faa8e&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/344764297.jpg?k=074a0878a6ec61ccbbe4b845871ea77ad7cca0bb89e6fc0f3fffff9e76de4ee5&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/344764957.jpg?k=75705fe610bd322c5198705f57487941c3e59270aa3e0fd59750a8fe465124a7&o=&hp=1",
  ];
  const obj = useContext(darkModeContext);
  const { id } = useParams();
  const curHotel = hotelData.data.hotellist.filter((cur) => id === cur.id);
  return (
    <div className={obj.isDark ? "bg-dark text-white" : "bg-light text-dark"}>
      <div className="container min-vh-100 py-2">
        {curHotel.length ? (
          <div>
            <div>
              <div className="d-flex flex-column flex-sm-row">
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
            <div className="container d-none d-md-block">
              <div className="row row-cols-2 gx-5 my-3">
                {[0].map((cur, i) => (
                  <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/223496641.webp?k=80081aca5d33e0b1d46eae242d1e36110d6674326e1a0cd9ff7b87dc4e4ac7c1&o=&s=1"
                    alt="hotel"
                    key={i}
                    className="col-8 col-lg-9 main__image"
                  ></img>
                ))}
                <div className="col-4 col-lg-3 row">
                  {[
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34933414.jpg?k=4d3a063f96247c56c6215cd329483a4a3d82461a8b666accf8b04596013a938d&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/245746602.jpg?k=7f53cab4afb3d25283e6c57b1e862b541511112a9ff0b985ec36ca2c0c370f27&o=&hp=1",
                  ].map((cur, i) => (
                    <img
                      src={cur}
                      alt={"hotel" + i}
                      key={i}
                      className="col-12 mb-3"
                    ></img>
                  ))}
                </div>
              </div>
              <div className="row row-cols-md-3 row-cols-lg-5 g-3">
                {images.map((cur, i) => (
                  <img
                    src={cur}
                    alt={"hotel" + i}
                    key={i}
                    className="col"
                  ></img>
                ))}
              </div>
            </div>
            <div
              id="carouselExampleControls"
              className="carousel slide d-md-none"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/223496641.webp?k=80081aca5d33e0b1d46eae242d1e36110d6674326e1a0cd9ff7b87dc4e4ac7c1&o=&s=1"
                    className="d-block w-100"
                    alt="MainImage"
                  />
                </div>
                {images.map((cur, i) => (
                  <div className="carousel-item" key={i}>
                    <img
                      src={cur}
                      className="d-block w-100"
                      alt={i + "__" + i}
                      style={{ height: "70vh" }}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center flex-wrap text-center m-2 gap-4">
              <div className="w-25 border border-primary p-2">
                <FontAwesomeIcon icon={faWifi} className="me-1" /> Free Wifi
              </div>
              <div className="w-25 border border-primary p-2">
                <FontAwesomeIcon icon={faSnowflake} className="me-1" /> Air
                Condtioning
              </div>
              <div className="w-25 border border-primary p-2">
                <FontAwesomeIcon icon={faShower} className="me-1" /> Private
                bathroom
              </div>
              <div className="w-25 border border-primary p-2">
                <FontAwesomeIcon icon={faTv} className="me-1" /> Television
              </div>
              <div className="w-25 border border-primary p-2">
                <FontAwesomeIcon icon={faBanSmoking} className="me-1" />{" "}
                Non-smoking rooms
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row">
              <div className="me-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nisl nisi scelerisque eu ultrices vitae. Amet cursus sit amet
                  dictum sit amet justo donec.
                </p>
                <p>
                  Imperdiet sed euismod nisi porta. Nibh tortor id aliquet
                  lectus proin nibh nisl. Interdum velit laoreet id donec
                  ultrices tincidunt arcu non sodales.
                </p>
                <p>
                  Ac tortor vitae purus faucibus ornare suspendisse sed nisi
                  lacus.
                </p>
                <p>
                  Viverra tellus in hac habitasse platea dictumst vestibulum.
                  Donec ultrices tincidunt arcu non sodales neque sodales ut.
                  Vitae auctor eu augue ut lectus arcu bibendum. Eu nisl nunc mi
                  ipsum. Neque viverra justo nec ultrices dui sapien. Cras
                  adipiscing enim eu turpis egestas pretium aenean. Nisl
                  suscipit adipiscing bibendum est ultricies. Turpis cursus in
                  hac habitasse platea dictumst quisque sagittis purus.
                </p>
              </div>
              <div
                className="text-dark p-3 ms-2 rounded h-100"
                style={{ minWidth: "350px", backgroundColor: "#9fc5e8" }}
              >
                <h5>Property Highlights</h5>
                <h6>Perfect for a 1-night stay!</h6>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} className="me-1" />
                  Top Location: Highly rated by recent guests (8.7)
                </p>
                <h6>Breakfast Info</h6>
                <p>Continental, Buffet</p>
                <p>
                  <FontAwesomeIcon icon={faParking} className="me-1" />
                  Free private parking available at the hotel
                </p>
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
            <div className="d-flex flex-column">
              <h3>Availability</h3>
              <table className="table table-info table-striped table-bordered border-primary">
                <thead>
                  <tr>
                    <th>Room Type</th>
                    <th>Sleeps</th>
                    <th>Price</th>
                    <th>Rooms</th>
                  </tr>
                </thead>
                {curHotel[0].rooms.map((cur, i) => (
                  <tbody>
                    <tr key={i}>
                      <td rowSpan="2">{cur.roomType}</td>

                      <td>
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faUser} />
                      </td>
                      <td>
                        <strong className="fs-6">
                          ₹
                          {Intl.NumberFormat("en-IN").format(
                            cur.roomDoubleCost
                          )}
                        </strong>
                      </td>
                      <td>{cur.roomDoubleAvailable}</td>
                    </tr>
                    <tr>
                      <td>
                        <FontAwesomeIcon icon={faUser} />
                      </td>
                      <td>
                        <strong className="fs-6">
                          ₹
                          {Intl.NumberFormat("en-IN").format(
                            cur.roomSingleCost
                          )}
                        </strong>
                      </td>
                      <td>
                        <select value={1}>
                          <option>1</option>
                          <option>5</option>
                          <option>{cur.roomSingleAvailable}</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        ) : (
          <ErrorPage />
        )}
      </div>
    </div>
  );
}

export default IndHotel;
