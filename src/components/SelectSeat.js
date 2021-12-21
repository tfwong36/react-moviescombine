import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../style/SelectSeat.css";
import SeatingMap from "./SeatingMap";

function SelectSeat() {
  const dispatch = useDispatch();
  const seatingStatusList = useSelector((state) => state.seatingStatusList);

  return (
    <div className="container">
      <div className="movieTitle">Spider-Man No Way Home</div>
      <div className="priceDuration">Price $123| Duration 128.3 minutes</div>
      <div className="cinemaDetail">Emperor Cinemas (Ma On Shan)</div>
      <div className="showDateandTime">22 Dec 2021 (Wed) 15:10</div>
      <SeatingMap />
      <button onClick={() => console.log(seatingStatusList)}>To pay</button>
    </div>
  );
}
export default SelectSeat;
