import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, NavBar } from "antd-mobile";
import "../style/SelectSeat.css";
import SeatingMap from "./SelectSeatComponents/SeatingMap";
import SelectSeatText from "./SelectSeatComponents/SelectSeatText";
import SeatAvailability from "./SelectSeatComponents/SeatAvailability";
import { getAllSeats } from "../apis/MoviesCombine";
import { useDispatch } from "react-redux";
import { INIT_SEATING_PLAN } from "../constants/constants";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import SnackOrdering from "./SelectSeatComponents/SnacksComponents/SnackOrdering";

function SelectSeat() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { movieTitle, cinema, session ,movieDuration} = location.state;
  const [isSnackModalVisible, setIsSnackModalVisible] = useState(false);
  const title = movieTitle;
  const price = session.price;
  const duration =  movieDuration;
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const cinemaDetail = cinema.name + " (" + cinema.location + ")";
  const showDateandTime = new Date(session.showDateTimeHkt).toLocaleDateString(
    "en-GB",
    options
  );
  const sessionID = session.id;

  useEffect(() => {
    getAllSeats(sessionID).then((response) => {
      dispatch({ type: INIT_SEATING_PLAN, payload: response.data });
    });
  }, [dispatch]);

  const toggleSeatSelect = (seat) => {
    if (!selectedSeats.includes(seat)) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
    }
  };

  return (
    <>
      <div onClick={() => history.goBack()}>
        <NavBar className="backText">Seat Selection</NavBar>
      </div>
      <div className="container">
        <div className="movieTitle">{title}</div>
        <div className="priceDuration">
          Price: ${price}| Duration: {duration} minures
        </div>
        <div className="cinemaDetail">{cinemaDetail}</div>
        <div className="showDateandTime">{showDateandTime}</div>
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
          disabled={selectedSeats.length < 1}
          onClick={() => setIsSnackModalVisible(true)}
        >
          PURCHASE
        </Button>
        <SnackOrdering
          isSnackModalVisible={isSnackModalVisible}
          setIsSnackModalVisible={setIsSnackModalVisible}
          selectedSeats={selectedSeats}
          cinemaDetail={cinemaDetail}
          title={title}
          price={price}
          showDateandTime={showDateandTime}
          sessionID={sessionID}
        ></SnackOrdering>
      </div>
    </>
  );
}
export default SelectSeat;
