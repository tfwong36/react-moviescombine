import React from "react";
import { useState, useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from 'antd-mobile'
import "../style/SelectSeat.css";
import SeatingMap from "./SeatingMap";
import SelectSeatText from "./SelectSeatText";
import SeatAvailability from "./SeatAvailability"
import { getAllSeats } from "../apis/MoviesCombine";
import { useDispatch } from "react-redux";
import { INIT_SEATING_PLAN } from "../constants/constants";

function SelectSeat(){
    const [selectedSeats, setSelectedSeats] = useState([]);
    // let location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    // const {
    //   category,
    //   description,
    //   genre,
    //   title,
    //   price,
    //   releaseDate,
    //   trailerSource,
    // } = location.state;
    const title = 'spider-man2'
    const price = 223.4
    const cinemaDetail = 'Emperor Cinemas (stp)';
    const showDateandTime = '24 Dec 2021 (Wed) 15:10';
    const sessionID = '61c28138c57b9025d6feb3bb';
    useEffect(() => {
        getAllSeats(sessionID).then((response) => {
          console.log(response.data);
          dispatch({ type: INIT_SEATING_PLAN, payload: response.data });
        });
      }, [dispatch]);

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
                <Button className='seating-map-purchase-btn' onClick={() => history.push("/Payment",{selectedSeats,cinemaDetail,title,price,showDateandTime,sessionID})}>
                  PURCHASE
                </Button> 
            </div>
        </>
    );
}
export default SelectSeat;
