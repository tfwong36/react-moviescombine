import React from "react";

import "../style/SelectSeat.css";
import SeatingMap from "./SeatingMap";

function SelectSeat(){

    return (
        <div className="container">
            <div className="movieTitle">Spider-Man No Way Home</div>
            <div className="priceDuration">Price $123| Duration 128.3 minures</div>
            <div className="cinemaDetail">Emperor Cinemas (Ma On Shan)</div>
            <div className="showDateandTime">22 Dec 2021 (Wed) 15:10</div>
            <SeatingMap/>
        </div>
    );
}
export default SelectSeat;