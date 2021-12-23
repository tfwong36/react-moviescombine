import { ReactComponent as Seatsvg } from "../../assects/seat.svg";
const SeatAvailability = () => {
  return (
    <div className="seat-availability-container">
      <div className="seat-availability">
        <Seatsvg width="1.3rem" fill="white" style={{ marginInline: "8px" }} />
        <div className="seat-availability-text">Available</div>
        <Seatsvg
          width="1.3rem"
          fill="#717171"
          style={{ marginInline: "8px" }}
        />
        <div className="seat-availability-text">Reserved</div>
        <Seatsvg
          width="1.3rem"
          fill="#F24253"
          style={{ marginInline: "8px" }}
        />
        <div className="seat-availability-text">Selected</div>
      </div>
    </div>
  );
};
export default SeatAvailability;
