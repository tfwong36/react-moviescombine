import { ReactComponent as Seatsvg } from '../assects/seat.svg';
import { useState } from 'react';
import { SEAT_SELECTED , SEAT_AVALIABLE , SEAT_OCCUPIED} from "../constants/constants";
function Seat({seat, toggleSeatSelect}){
    const [state, setstate] = useState(seat.status);
    function getFill(status){
        switch(status){
            case SEAT_AVALIABLE:
                return 'white';
            case SEAT_OCCUPIED:
                return 'grey';
            case SEAT_SELECTED:
                return 'red';
            default:
                return 'white';
        }
    }
    function toggleState(){
        setstate(state === SEAT_AVALIABLE ? SEAT_SELECTED:SEAT_AVALIABLE);
    }
    function handleOnClick(){
        if (state === SEAT_AVALIABLE || state === SEAT_SELECTED){
            toggleSeatSelect(seat.key)
            toggleState();
        }
    }
    return <Seatsvg className="seat" width='1.5rem' fill={getFill(state)}  onClick={handleOnClick}/>
}

export default Seat;