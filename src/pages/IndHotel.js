import React from "react";
import { useParams } from "react-router-dom";
import hotelData from "../dataJSON/hotelData.json";
import ErrorPage from "./ErrorPage";
function IndHotel() {
  const { id } = useParams();
  const curHotel = hotelData.data.hotellist.filter((cur) => id === cur.id);
  return (
    <div className="container">
      {curHotel.length ? (
        <div>IndHotel - {curHotel[0].title}</div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}

export default IndHotel;
