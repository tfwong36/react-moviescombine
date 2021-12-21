import "../style/SelectSeat.css";
function SelectSeatText ({selectedSeats}) {
    if (selectedSeats.length > 0){
        return <dir className="selected-seat-text"> Selected Seat {selectedSeats.join(',')}.</dir>
    }
    else  return <dir></dir>
}

export default SelectSeatText;