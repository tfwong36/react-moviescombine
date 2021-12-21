import Seat from "./Seat";
function SeatingMap({seatStatus}){
    const columnNumber = 12;
    // const rowNumber = ['A','B','C','D','E','F','G'];
    let seatingStatusList = [];
    const row = 'A';
        for(let seat = 1; seat < columnNumber+1 ; seat++){
            if (seat === 3 || seat === 11)
                seatingStatusList.push({key:row+seat+"h" , status:'h'});
            seatingStatusList.push({key:row+seat , status:'a'});
    };

    const listItems = seatingStatusList.map((seat) => <Seat key={seat.key} seat={seat}/>);
    return(
        <div className='seating-map-container'>
          {listItems}
        </div>
    );

} 

export default SeatingMap;

