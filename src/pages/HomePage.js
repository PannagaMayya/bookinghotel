import React, { useContext } from "react";
import "./HomePage.css";
import { darkModeContext } from "../StateProvider";
function HomePage() {
  const obj = useContext(darkModeContext);
  return (
    <div className={obj.isDark ? "bg-dark text-white" : "bg-light text-dark"}>
      <div className="container">
        <h2>Explore India</h2>
        <p>These popular destinations have a lot to offer</p>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-around carousel__images ">
                <div className="card d-block">
                  <img
                    src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg"
                    className="card-img-top"
                    alt="afra"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Agra</h5>
                  </div>
                </div>
                <div className="card d-block">
                  <img
                    src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-gateway-of-india-mumbai.jpg"
                    className="card-img-top"
                    alt="mumbai"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Mumbai</h5>
                  </div>
                </div>
                <div className="card d-block">
                  <img
                    src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-the-ganges-river-varanasi.jpg"
                    className="card-img-top"
                    alt="varanasi"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Varanasi</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-around carousel__images">
                <div className="card d-block">
                  <img
                    src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-cola-beach-goa.jpg"
                    className="card-img-top"
                    alt="goa"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Goa</h5>
                  </div>
                </div>
                <div className="card d-block">
                  <img
                    src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-bada-bagh-jaisalmer.jpg"
                    className="card-img-top"
                    alt="jaisalamer"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Jaisalamer</h5>
                  </div>
                </div>
                <div className="card d-block">
                  <img
                    src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-train-rides.jpg"
                    className="card-img-top"
                    alt="Shimla"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Shimla</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-around carousel__images">
                <div className="card d-block">
                  <img
                    src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-kapaleeshwarar-temple.jpg"
                    className="card-img-top"
                    alt="chennai"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Chennai</h5>
                  </div>
                </div>
                <div className="card d-block">
                  <img
                    src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-tea-plantations.jpg"
                    className="card-img-top"
                    alt="munnar"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Munnar</h5>
                  </div>
                </div>
                <div className="card d-block">
                  <img
                    src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-kapaleeshwarar-temple.jpg"
                    className="card-img-top"
                    alt="shimla"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Shimla</h5>
                  </div>
                </div>
              </div>
            </div>
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
              style={{ backgroundColor: "#122111" }}
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
              style={{ backgroundColor: "#122111" }}
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
