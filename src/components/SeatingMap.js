import { getAllSeats } from "../apis/MoviesCombine";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Seat from "./Seat";
import { SEAT_AVALIABLE , SEAT_OCCUPIED, INIT_SEATING_PLAN} from "../constants/constants";
function SeatingMap({toggleSeatSelect}){
    const dispatch = useDispatch();
    const columnNumber = 11;
    const rowNumber = ['A','B','C','D','E','F','G','H','I'];
    let seatingStatusList = [];
    
    useEffect(() => {
        getAllSeats('61c1a418f4d70de6e4b77162').then((response) => {
          console.log(response.data);
          dispatch({ type: INIT_SEATING_PLAN, payload: response.data });
        });
      }, [dispatch]);
    
    const availableSeats = useSelector((state) => state.seatingStatusList);

    rowNumber.forEach( row => 
    {
        for(let seat = 1; seat < columnNumber+1 ; seat++){
            const key = row+seat;
            const status = (availableSeats.includes(key)) ? SEAT_AVALIABLE : SEAT_OCCUPIED;
            seatingStatusList.push({key:key , status:status , row:row, columnNumber:columnNumber});}}
    );

    const listItems = seatingStatusList.map((seat) => {
        return (
            <div className="grid-item" key={seat.key}><Seat key={seat.key} seat={seat} toggleSeatSelect={toggleSeatSelect}/></div>
        )

    });

    return(
        <div className='seating-map-grid-table-container'>
            <div className="grid-table">
                {listItems}
            </div>
        </div>
    );
}

export default SeatingMap;
