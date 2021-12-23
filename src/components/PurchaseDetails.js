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

  function redirectPage() {
    if (history.entries[history.length - 2].pathname === "/Payment") {
      history.go(-history.length);
    } else {
      history.goBack();
    }
  }

  console.log(location.state.paymentDetails)

  const SnackDetails= (SnackDetails) => {
    if (SnackDetails === null || SnackDetails.length < 1 )
    return <></>;
    const foodNames = SnackDetails.map((food) => (    
      <>
          <div className="right-align">
            {food.food.name + " x " + food.quantity + " : "+ food.food.unitPrice}
          </div>
          <br></br> 
      </>      
  ))
    const foodTotalprice = location.state.paymentDetails.foodTotalPrice;
      return (
        <>
        <div className="purchase-detail">
        <br></br>
          <p>
          <span className="left-align">Snacks ordered:</span>
          {foodNames}
          <span className="left-align">Snacks Totoal:</span>
          <span className="right-align">
            ${foodTotalprice}
          </span>
          </p>
      </div>
      <br></br>
        </>
      );
  }

  return (
    <>
      <div>
        <NavBar onBack={() => redirectPage()} className="backText">Purchase Details</NavBar>
      </div>
      <div>
        <h1 className="movie-title">
          {location.state.paymentDetails.movie.title}
        </h1>
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
      <div className="purchase-detail">
        <p>
          <span className="left-align">Theatre:</span>
          <span className="right-align">
            {location.state.paymentDetails.cinema.name +
              " (" +
              location.state.paymentDetails.cinema.location +
              ")"}
          </span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Date and Time:</span>
          <span className="right-align">
            {
              new Date(location.state.paymentDetails.sessionResponse.showDateTimeHkt).toLocaleDateString(
                "en-GB",
                {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )
            }
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
            HKD$ {location.state.paymentDetails.movieTotalPrice}
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
      {SnackDetails(location.state.paymentDetails.foodOrder)}
    </>
  );
}

export default PurchaseDetails;
