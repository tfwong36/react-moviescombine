import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "antd-mobile";
import "../style/SelectSeat.css";
import SeatingMap from "./SeatingMap";
import SelectSeatText from "./SelectSeatText";
import SeatAvailability from "./SeatAvailability";
import { LeftOutlined } from "@ant-design/icons/lib/icons";

function SelectSeat() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const history = useHistory();

  const toggleSeatSelect = (seat) => {
    if (!selectedSeats.includes(seat)) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
    }
  };

  return (
    <>
      <div className="back-text" onClick={() => history.goBack()}>
        <LeftOutlined className="back-arrow" />
      </div>
      <div className="container">
        <div className="movieTitle">Spider-Man No Way Home</div>
        <div className="priceDuration">
          Price: $123| Duration: 128.3 minures
        </div>
        <div className="cinemaDetail">Emperor Cinemas (Ma On Shan)</div>
        <div className="showDateandTime">22 Dec 2021 (Wed) 15:10</div>
      </div>
      <div className="screen-curve">
        <div className="screen-text">SCREEN</div>
      </div>
      <div className="seating-map-container">
        <SeatingMap toggleSeatSelect={toggleSeatSelect} />
        <SeatAvailability />
        <SelectSeatText selectedSeats={selectedSeats} />
        <Button
          className="seating-map-purchase-btn"
          onClick={() => history.push("/Payment", selectedSeats)}
        >
          PURCHASE
        </Button>
      </div>
    </>
  );
}
export default SelectSeat;
