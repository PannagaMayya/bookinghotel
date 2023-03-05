import React from "react";
import PersonOptions from "./PersonOptions";
function SearchBarHotel() {
  return (
    <div className="d-flex flex-column">
      <label for="hotelpagedestination" className="form-label">
        Destination
      </label>
      <input type="text" className="form-control" id="hotelpagedestination" />
      <label for="hotelpagedate" className="form-label">
        Check-in/Check-out date
      </label>
      <input type="text" className="form-control" id="hotelpagedate" />

      <div
        id="Hoteloptions"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Select Options
      </div>
      <div class="collapse" id="collapseExample">
        <PersonOptions
          options={{ adult: 0, children: 2, room: 2 }}
          isHotelPage={true}
        />
      </div>
    </div>
  );
}

export default SearchBarHotel;
