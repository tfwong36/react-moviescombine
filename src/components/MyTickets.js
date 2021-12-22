import "../style/MyTickets.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function MyTickets() {
  const [mobileNumber, setMobileNumber] = useState([]);
  const history = useHistory();

  function onChangeMobileNumber(event) {
    console.log(event.target.value);
    setMobileNumber(event.target.value);
  }

  return (
    <>
      <div>
        <div className="my-ticket-title">My Tickets</div>
        <input
          type="number"
          className="mobile-number-search"
          placeholder="Phone Number"
          onChange={onChangeMobileNumber}
        ></input>
      </div>
      <div className="middle-line"></div>
      <div>
        <div className="my-ticket-result">Result</div>
      </div>
      <div id="searchResultPanel" className="resultPanelGroup">
        <div
          className="search-result-item"
          onClick={() => history.push("/PurcahseDetails")}
        >
          <p className="search-result-item-title">Spider-Man: Work From Home</p>
          <p className="search-result-item-location">MCL (Shatin)</p>
          <p className="search-result-item-time">
            <span>25 Dec 2021</span>
            <span style={{ paddingLeft: "3vw" }}>10:35</span>
            <span className="search-result-item-price">HKD$ 140</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default MyTickets;
