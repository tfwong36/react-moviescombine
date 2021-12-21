import { ReactComponent as Seatsvg } from '../assects/seat.svg';

function Seat({seat}){
    function getFill(status){
        switch(status){
            case 'a':
                return 'white';
            case 'o':
                return 'grey';
            default:
                return 'white';
        }
    }

    function fillOpacity(status){
        switch(status){
            case 'h':
                return 0;
            default:
                return 100;
        }
    }

    function handleOnClick(){
        console.log(seat.key)
    }
    return <Seatsvg className="seat" width='1.5rem' fill={getFill(seat.status)} fillOpacity={fillOpacity(seat.status)} onClick={handleOnClick}/>
}

export default Seat;