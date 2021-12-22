import { LeftOutline } from "antd-mobile-icons";
import "../style/Payment.css";
import { useHistory, useLocation } from "react-router-dom";
import api from "../apis/api"
import MovieDetails from "./MovieDetails";
function Payment() {
  const location = useLocation();
  const history = useHistory();
  const {
    title,
    price,
    selectedSeats,
    showDateandTime,
    cinemaDetail,
    sessionID,
  } = location.state;

  const numberOfTicket = selectedSeats.length;
  const totalPrice = numberOfTicket * price;
  let cardHolderName;
  let cardNumber;
  let expiryMonth;
  let expiryYear;
  let cvv;
  let phoneNumber;

  let optionMonth = [];
  let optionYear = [];
  let thisYear = new Date().getFullYear();
  

  for(let i = 1 ; i <= 12 ; i++)
  {
    optionMonth.push(<option>{i}</option>)
  }

  for(let i = thisYear ; i <= thisYear + 10 ; i++)
  {
    optionYear.push(<option>{i}</option>)
  }

  function payNow(event) {
    event.preventDefault();
    console.log("holder: " + cardHolderName);
    console.log("number: " + cardNumber);
    console.log("month: " + expiryMonth);
    console.log("year: " + expiryYear);
    console.log("cvv: " + cvv);
    console.log("phone: " + phoneNumber);


    const requestBody = {
      "payment" : {
        "sessionId": sessionID,
        "selectedSeats": selectedSeats,
        "unitPrice": parseInt(price)
      },
      "cardHolderName": cardHolderName,
      "creditCardNumber": cardNumber,
      "expiryMonth": parseInt(expiryMonth),
      "expiryYear": parseInt(expiryYear),
      "cardCVV": parseInt(cvv),
      "phoneNumber": parseInt(phoneNumber)
    }

    console.log(requestBody)
    api.post("/payments" , requestBody).then( (response) => {
      console.log(response) // success
      history.push("/")
    }).catch( (response) => {
      console.log("got 404")
      history.goBack()
    })


  }

  function handleNameChange(event) {
    cardHolderName = event.target.value;
  }

  function handleCardNumberChange(event) {
    cardNumber = event.target.value;
  }

  function handleMonthChange(event) {
    expiryMonth = event.target.value;
  }

  function handleYearChange(event) {
    expiryYear = event.target.value;
  }

  function handleCvvChange(event) {
    cvv = event.target.value;
  }

  function handlePhoneNumberChange(event) {
    phoneNumber = event.target.value;
  }



  return (
    <>
      <div>
        <div className="back-text" onClick={() => history.goBack()}>
          <LeftOutline className="back-arrow" />
        </div>
        <div className="movie-title-box">{title}</div>

        <div className="price-duration">Price: {price} | Duration: 148 mins</div>
        <div className="cinema-detail">{cinemaDetail}</div>
        <div className="show-date-and-time">{showDateandTime}</div>
      </div>

      <div className="receipt-info-box">
        <span>
          <div className="receipt-header">Seat No.</div>
          <div className="receipt-content">{selectedSeats.join(", ")}</div>
        </span>
        <span>
          <div className="receipt-header">Quantity</div>
          <div className="receipt-content">{numberOfTicket}</div>
        </span>
        <span>
          <div className="receipt-header">Price</div>
          <div className="receipt-content">{price}</div>
        </span>
      </div>


      <div className="receipt-total-box">
        <span className="receipt-header">Total Price</span>
        <span className="receipt-content">{totalPrice.toFixed(1)}</span>
      </div>

      <div className="credit-card-info-box">
        <div className="credit-card-heading">Credit Card</div>

        <form onSubmit={payNow}>

          <div className="credit-card-subheading">Card Holder Name</div>
          <input onChange={handleNameChange} required className="credit-card-text"></input>

          <div className="credit-card-subheading">Card Number</div>
          <input onChange={handleCardNumberChange} required className="credit-card-text"></input>

          <div className="credit-card-subheading">Expiry Date (MM/YY)</div>
          <select onChange={handleMonthChange} required className="credit-card-select" type="select">
            {optionMonth}
          </select>
          <select onChange={handleYearChange} required className="credit-card-select" type="select">
            {optionYear}
          </select>

          <div className="credit-card-subheading">CVV</div>
          <input onChange={handleCvvChange} required className="credit-card-text"></input>

          <div className="credit-card-subheading">Phone Number</div>
          <input onChange={handlePhoneNumberChange} required className="credit-card-text"></input>

          <input type="submit" className="credit-card-btn" value="Pay Now" ></input>
        </form>
      </div>
    </>
  );
}
export default Payment;
