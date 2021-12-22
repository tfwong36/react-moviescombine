import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Seat from "./Seat";
import { SEAT_AVALIABLE , SEAT_OCCUPIED} from "../constants/constants";
function SeatingMap({toggleSeatSelect}){
    
    const [seatingStatusList, setSeatingStatusList] = useState([]);

    const availableSeats = useSelector((state) => state.seatingStatusList);

    useEffect(() => {
        const columnNumber = 11;
        const rowNumber = ['A','B','C','D','E','F','G','H','I'];
        let fetchedStatusList = [];
        rowNumber.forEach( row => 
            {
                for(let seat = 1; seat < columnNumber+1 ; seat++){
                    const key = row+seat;
                    const status = (availableSeats.includes(key)) ? SEAT_AVALIABLE : SEAT_OCCUPIED;
                    fetchedStatusList.push({key:key , status:status , row:row, columnNumber:columnNumber});
                }
            });
        setSeatingStatusList(fetchedStatusList);
    }, [availableSeats])

    const listItems = seatingStatusList.map((seat) => {
        return  <div className="grid-item" key={seat.key+seat.status}><Seat key={seat.key} seat={seat} toggleSeatSelect={toggleSeatSelect}/></div>
    }) 

    return(
        <div className='seating-map-grid-table-container'>
            <div className="grid-table">
                {listItems}
            </div>
        </div>
    );
}

export default SeatingMap;
