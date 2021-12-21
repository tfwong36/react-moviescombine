import Seat from "./Seat";
function SeatingMap({seatStatus}){
    const columnNumber = 11;
    const rowNumber = ['A','B','C','D','E','F','G'];
    let seatingStatusList = [];
    rowNumber.forEach( row => 
        {
        for(let seat = 1; seat < columnNumber+1 ; seat++){
            seatingStatusList.push({key:row+seat , status:'a' , row:row, columnNumber:columnNumber});}}
    );
        
    const listItems = seatingStatusList.map((seat) => {
        return (
            <>
            <div className="grid-item"><Seat key={seat.key} seat={seat}/></div>
            </>
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

