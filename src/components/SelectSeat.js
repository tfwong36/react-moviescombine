import React from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from 'antd-mobile'
import "../style/SelectSeat.css";
import SeatingMap from "./SeatingMap";
import SelectSeatText from "./SelectSeatText";
import SeatAvailability from "./SeatAvailability"


function SelectSeat(){
    const [selectedSeats, setSelectedSeats] = useState([]);
    const history = useHistory();
        // const {
    //   category,
    //   description,
    //   genre,
    //   title,
    //   price,
    //   releaseDate,
    //   trailerSource,
    // } = location.state;
    const title = 'spider-man'
    const price = 123.4
    const cinemaDetail = 'Emperor Cinemas (Ma On Shan)';
    const showDateandTime = '22 Dec 2021 (Wed) 15:10';
    const toggleSeatSelect = (seat) =>{
        if (!selectedSeats.includes(seat)){
            setSelectedSeats([...selectedSeats ,seat])
        }
        else{
            setSelectedSeats(selectedSeats.filter(item => item !== seat));
        }
    }

    return (
        <>
            <div className="container">
                <div className="movieTitle">{title}</div>
                <div className="priceDuration">Price: ${price}| Duration: 128.3 minures</div>
                <div className="cinemaDetail"></div>
                <div className="showDateandTime">{showDateandTime}</div>
            </div>
            <div className="seating-map-container">
                <SeatingMap toggleSeatSelect={toggleSeatSelect} />    
                <SeatAvailability/> 
                <SelectSeatText selectedSeats={selectedSeats}/>    
                <Button className='seating-map-purchase-btn' onClick={() => history.push("/Payment",{selectedSeats,cinemaDetail,title,price,showDateandTime})}>
                  PURCHASE
                </Button> 
            </div>
        </>
    );
}
export default SelectSeat;
