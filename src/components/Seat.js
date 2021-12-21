import { useDispatch } from "react-redux";
import { ReactComponent as Seatsvg } from "../assects/seat.svg";
import { SELECT_SEAT } from "../constants/constants";

function Seat({ seat }) {
  const dispatch = useDispatch();
  function getFill(status) {
    switch (status) {
      case "a":
        return "white";
      case "o":
        return "grey";
      case "s":
        return "red";
      default:
        return "white";
    }
  }

  function fillOpacity(status) {
    switch (status) {
      case "h":
        return 0;
      default:
        return 100;
    }
  }

  function handleOnClick() {
    dispatch({ type: SELECT_SEAT, payload: seat.key });
  }
  return (
    <Seatsvg
      className="seat"
      width="1.5rem"
      fill={getFill(seat.status)}
      fillOpacity={fillOpacity(seat.status)}
      onClick={handleOnClick}
    />
  );
}

export default Seat;
