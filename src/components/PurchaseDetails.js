import "../style/PurchaseDetails.css";
import { NavBar } from "antd-mobile";
import { useHistory, useLocation } from "react-router-dom";

function PurchaseDetails() {
  const location = useLocation();
  const history = useHistory();
  const qrcodeURL =
    "https://dev-moviescombine-api.herokuapp.com/qrcode?url=https://dev-moviescombine-api.herokuapp.com/payments?phoneNumber=";

  function displaySeats(seatList) {
    return seatList.map((seat, index) => (
      <span key="index" className="right-align">
        {seat}
      </span>
    ));
  }

  return (
    <>
      <div onClick={() => history.goBack()}>
        <NavBar className="backText">Purchase Details</NavBar>
      </div>
      <div>
        <h1 className="movie-title">
          {location.state.paymentDetails.movie.title}
        </h1>
      </div>
      <div className="purchase-detail">
        <p>
          <span className="left-align">Theatre:</span>
          <span className="right-align">
            {location.state.paymentDetails.cinema.location}
          </span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Date:</span>
          <span className="right-align">
            {location.state.paymentDetails.sessionResponse.date}
          </span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Time:</span>
          <span className="right-align">
            {location.state.paymentDetails.sessionResponse.time}
          </span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Seats:</span>
          {displaySeats(location.state.paymentDetails.selectedSeats)}
        </p>
        <br></br>
        <p>
          <span className="left-align">Total price (HKD):</span>
          <span className="right-align">
            HKD$ {location.state.paymentDetails.unitPrice}
          </span>
        </p>
        <br></br>
      </div>
      <div className="purchase-detail">
        <p>
          <span className="left-align">Credit Card No.:</span>
          <span className="right-align">
            {location.state.paymentDetails.creditCardNumber}
          </span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Credit Card Holder Name:</span>
          <span className="right-align">
            {location.state.paymentDetails.cardHolderName}
          </span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Mobile Phone No.:</span>
          <span className="right-align">
            {location.state.paymentDetails.phoneNumber}
          </span>
        </p>
      </div>
      <div
        className="qrcode"
        style={{
          backgroundImage:
            "url(" +
            qrcodeURL +
            location.state.paymentDetails.phoneNumber +
            ")",
        }}
      ></div>
    </>
  );
}

export default PurchaseDetails;
