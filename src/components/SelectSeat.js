import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "../style/SelectSeat.css";
import SeatingMap from "./SeatingMap";

function SelectSeat() {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedSeatList = useSelector((state) => state.selectedSeatList);

  return (
    <div className="container">
      <div className="movieTitle">Spider-Man No Way Home</div>
      <div className="priceDuration">Price $123| Duration 128.3 minutes</div>
      <div className="cinemaDetail">Emperor Cinemas (Ma On Shan)</div>
      <div className="showDateandTime">22 Dec 2021 (Wed) 15:10</div>
      <SeatingMap />
      <button onClick={() => history.push("/Payment", selectedSeatList)}>
        To pay
      </button>
    </div>
  );
}
export default SelectSeat;
