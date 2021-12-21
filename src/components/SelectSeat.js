import React from "react";
import { useState } from "react";
import "../style/SelectSeat.css";
import SeatingMap from "./SeatingMap";
import SelectSeatText from "./SelectSeatText";
function SelectSeat(){
    const [selectedSeats, setSelectedSeats] = useState([]);
        
    const toggleSeatSelect = (seat) =>{
        if (!selectedSeats.includes(seat)){
            setSelectedSeats([...selectedSeats ,seat])
        }
        else{
            setSelectedSeats(selectedSeats.filter(item => item !== seat));
        }
    }

    return (
        <div className="container">
            <div className="movieTitle">Spider-Man No Way Home</div>
            <div className="priceDuration">Price $123| Duration 128.3 minures</div>
            <div className="cinemaDetail">Emperor Cinemas (Ma On Shan)</div>
            <div className="showDateandTime">22 Dec 2021 (Wed) 15:10</div>
            <SeatingMap toggleSeatSelect={toggleSeatSelect}/>    
            <SelectSeatText selectedSeats={selectedSeats}/>    
        </div>

    );
}
export default SelectSeat;