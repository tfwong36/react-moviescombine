import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { INIT_SEATING_PLAN } from "../constants/constants";
import Seat from "./Seat";
function SeatingMap({ seatStatus }) {
  const dispatch = useDispatch();
  const seatingStatusList = useSelector((state) => state.seatingStatusList);

  useEffect(() => {
    let columnNumber = 11;
    let rowNumber = ["A", "B", "C", "D", "E", "F", "G"];
    let seatingStatusList = [];
    rowNumber.forEach((row) => {
      for (let seat = 1; seat < columnNumber + 1; seat++) {
        seatingStatusList.push({
          key: row + seat,
          status: "a",
          row: row,
          columnNumber: columnNumber,
        });
      }
    });
    dispatch({ type: INIT_SEATING_PLAN, payload: seatingStatusList });
  }, [dispatch]);

  const listItems = seatingStatusList.map((seat) => {
    return (
      <div className="grid-item">
        <Seat key={seat.key} seat={seat} />
      </div>
    );
  });

  return (
    <div className="seating-map-container">
      <div className="grid-table">{listItems}</div>
    </div>
  );
}

export default SeatingMap;
