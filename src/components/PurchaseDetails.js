import "../style/PurchaseDetails.css";
import { NavBar } from "antd-mobile";
import { useHistory, useLocation } from "react-router-dom";

function PurchaseDetails() {
  const location = useLocation();
  const history = useHistory();
  const qrcodeURL =
    "https://dev-moviescombine-api.herokuapp.com/qrcode?url=https://dev-moviescombine-api.herokuapp.com/payments?phoneNumber=";

  console.log(location.state);

  function displaySeats(seatList) {
    console.log(seatList);
    return seatList.map((seat, index) => (
      <span className="right-align">{seat}</span>
    ));
  }

  return (
    <>
      <div onClick={() => history.goBack()}>
        <NavBar className="backText">Purchase Details</NavBar>
      </div>
      <div>
        <h1 className="movie-title">{location.state.movie.title}</h1>
      </div>
      <div className="purchase-detail">
        <p>
          <span className="left-align">Theatre:</span>
          <span className="right-align">{location.state.cinema.location}</span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Date:</span>
          <span className="right-align">
            {location.state.sessionResponse.date}
          </span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Time:</span>
          <span className="right-align">
            {location.state.sessionResponse.time}
          </span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Seats:</span>
          {displaySeats(location.state.selectedSeats)}
        </p>
        <br></br>
        <p>
          <span className="left-align">Total price (HKD):</span>
          <span className="right-align">HKD$ {location.state.unitPrice}</span>
        </p>
        <br></br>
      </div>
      <div className="purchase-detail">
        <p>
          <span className="left-align">Credit Card No.:</span>
          <span className="right-align">{location.state.creditCard}</span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Credit Card Holder Name:</span>
          <span className="right-align">{location.state.phoneNumber}</span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Mobile Phone No.:</span>
          <span className="right-align">{location.state.phoneNumber}</span>
        </p>
      </div>
      <div
        className="qrcode"
        style={{
          backgroundImage:
            "url(" + qrcodeURL + location.state.phoneNumber + ")",
        }}
      ></div>
    </>
  );
}

export default PurchaseDetails;
