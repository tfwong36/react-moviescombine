import { ReactComponent as Seatsvg } from "../../assects/seat.svg";
import { useState } from "react";
import {
  SEAT_SELECTED,
  SEAT_AVALIABLE,
  SEAT_OCCUPIED,
  SEAT_NONEXIST,
} from "../../constants/constants";
function Seat({ seat, toggleSeatSelect }) {
  const [state, setstate] = useState(seat.status);
  function getFill(status) {
    switch (status) {
      case SEAT_AVALIABLE:
        return "white";
      case SEAT_OCCUPIED:
        return "#717171";
      case SEAT_SELECTED:
        return "#F24253";
      default:
        return "white";
    }
  }
  function getOpacity(status) {
    switch (status) {
      case SEAT_NONEXIST:
        return 0;
      default:
        return 100;
    }
  }
  function toggleState() {
    setstate(state === SEAT_AVALIABLE ? SEAT_SELECTED : SEAT_AVALIABLE);
  }
  function handleOnClick() {
    if (state === SEAT_AVALIABLE || state === SEAT_SELECTED) {
      toggleSeatSelect(seat.key);
      toggleState();
    }
  }
  return (
    <Seatsvg
      className="seat"
      width="1.4rem"
      fill={getFill(state)}
      fillOpacity = {getOpacity(state)}
      onClick={handleOnClick}
    />
  );
}

export default Seat;
