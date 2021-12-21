import Seat from "./Seat";
import { SEAT_AVALIABLE , SEAT_OCCUPIED} from "../constants/constants";
function SeatingMap({toggleSeatSelect}){
    const columnNumber = 11;
    const rowNumber = ['A','B','C','D','E','F','G'];
    let seatingStatusList = [];
    const aSeats = ['A1','C1','F1','B4'];
    rowNumber.forEach( row => 
    {
        for(let seat = 1; seat < columnNumber+1 ; seat++){
            const key = row+seat;
            const status = aSeats.includes(key) ? SEAT_AVALIABLE : SEAT_OCCUPIED;
            seatingStatusList.push({key:key , status:status , row:row, columnNumber:columnNumber});}}
    );

    const listItems = seatingStatusList.map((seat) => {
        return (
            <div className="grid-item" key={seat.key}><Seat key={seat.key} seat={seat} toggleSeatSelect={toggleSeatSelect}/></div>
        )
    });

    return(
        <div className='seating-map-container'>
            <div className="grid-table">
                {listItems}
            </div>
        </div>
    );

} 

export default SeatingMap;

