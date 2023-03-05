import React from "react";

function FooterList({ isDark }) {
  return (
    <div
      className={
        isDark
          ? "text-primary bg-dark d-flex justify-content-around p-2"
          : "text-primary bg-white d-flex justify-content-around p-2"
      }
    >
      <div className="d-flex flex-column">
        <small>Countries</small>
        <small>Regions</small>
        <small>Cities</small>
        <small>Districts</small>
        <small>Airports</small>
        <small>Hotels</small>
        <small>Places of interest</small>
      </div>
      <div className="d-flex flex-column">
        <small>Homes</small>
        <small>Apartments</small>
        <small>Resorts</small>
        <small>Villas</small>
        <small>Hostels</small>
        <small>B&Bs</small>
        <small>Guest houses</small>
      </div>
      <div className="d-flex flex-column">
        <small>Unique places to stay</small>
        <small>All destinations</small>
        <small>All flight destinations</small>
        <small>Discover</small>
        <small>Reviews</small>
        <small>Discover monthly stays</small>
        <small>Unpacked: Travel articles</small>
        <small>Travel communities</small>
        <small>Seasonal and holiday deals</small>
        <small>Traveller Review Awards</small>
      </div>
      <div className="d-flex flex-column">
        <small>Car rental</small>
        <small>Flight finder</small>
        <small>Restaurant reservations</small>
        <small>Booking.com for Travel Agents</small>
      </div>
    </div>
  );
}

export default FooterList;
