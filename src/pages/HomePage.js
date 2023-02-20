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
                    src="https://cdn.pixabay.com/photo/2019/03/12/20/19/india-4051753_1280.jpg"
                    className="card-img-top"
                    alt="agra"
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
                    src="https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="card-img-top"
                    alt="bengaluru"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Bengaluru</h5>
                  </div>
                </div>
                <div className="card d-block">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/01/16/20/39/india-3086808_1280.jpg"
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
                    src="https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg"
                    className="card-img-top"
                    alt="Rajasthan"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Rajasthan</h5>
                  </div>
                </div>
                <div className="card d-block">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/02/07/16/52/shimla-3137468_1280.jpg"
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
                    src="https://cdn.pixabay.com/photo/2018/12/17/15/05/mahadev-3880569_1280.jpg"
                    className="card-img-top"
                    alt="MP"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Madhya Pradesh</h5>
                  </div>
                </div>
                <div className="card d-block">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg"
                    className="card-img-top"
                    alt="Delhi"
                  />
                  <div
                    className={
                      obj.isDark
                        ? "card-body bg-dark text-white "
                        : "card-body bg-light text-dark"
                    }
                  >
                    <h5 className="card-title">Delhi</h5>
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
        <div className="row m-3">
          <div className="col position-relative m-auto text_on_image">
            <p className="position-absolute top-0 p-2">Delhi</p>
            <img
              src="https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg"
              alt="Delhi"
              className="img-fluid rounded"
            />
          </div>
          <div className="col position-relative m-auto text_on_image">
            <p className="position-absolute top-0 p-2">Bengaluru</p>
            <img
              src="https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Bengaluru"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="row m-3">
          <div className="col position-relative m-auto text_on_image">
            <p className="position-absolute top-0 p-2">Rajasthan</p>
            <img
              src="https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg"
              alt="Rajasthan"
              className="img-fluid rounded"
            />
          </div>
          <div className="col position-relative m-auto text_on_image">
            <p className="position-absolute top-0 p-2">Shimla</p>
            <img
              src="https://cdn.pixabay.com/photo/2018/02/07/16/52/shimla-3137468_1280.jpg"
              alt="shimla"
              className="img-fluid rounded"
            />
          </div>
          <div className="col position-relative m-auto text_on_image">
            <p className="position-absolute top-0 p-2">Varanasi</p>
            <img
              src="https://cdn.pixabay.com/photo/2018/01/16/20/39/india-3086808_1280.jpg"
              alt="varanasi"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <h3>Browse by property type</h3>
        <div className="row m-3">
          <div
            className={
              obj.isDark
                ? "col card bg-dark text-white "
                : "col card bg-light text-dark"
            }
          >
            <img
              src="https://cdn.pixabay.com/photo/2018/01/16/20/39/india-3086808_1280.jpg"
              className="card-img-top"
              alt="bla"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className={
              obj.isDark
                ? "col card bg-dark text-white "
                : "col card bg-light text-dark"
            }
          >
            <img
              src="https://cdn.pixabay.com/photo/2018/01/16/20/39/india-3086808_1280.jpg"
              className="card-img-top"
              alt="bla"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className={
              obj.isDark
                ? "col card bg-dark text-white "
                : "col card bg-light text-dark"
            }
          >
            <img
              src="https://cdn.pixabay.com/photo/2018/01/16/20/39/india-3086808_1280.jpg"
              className="card-img-top"
              alt="bla"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className={
              obj.isDark
                ? "col card bg-dark text-white "
                : "col card bg-light text-dark"
            }
          >
            <img
              src="https://cdn.pixabay.com/photo/2018/01/16/20/39/india-3086808_1280.jpg"
              className="card-img-top"
              alt="bla"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className={
              obj.isDark
                ? "col card bg-dark text-white "
                : "col card bg-light text-dark"
            }
          >
            <img
              src="https://cdn.pixabay.com/photo/2018/01/16/20/39/india-3086808_1280.jpg"
              className="card-img-top"
              alt="bla"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
