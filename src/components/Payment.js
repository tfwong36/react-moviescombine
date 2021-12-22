import { LeftOutline } from "antd-mobile-icons";
import "../style/Payment.css";
import { useHistory, useLocation } from "react-router-dom";
import api from "../apis/api"
import MovieDetails from "./MovieDetails";
function Payment() {
  const location = useLocation();
  const history = useHistory();
  const {
    category,
    description,
    genre,
    posterSource,
    rating,
    title,
    price,
    releaseDate,
    trailerSource,
    selectedSeats,
    showDateandTime,
    cinemaDetail,
    sessionID,
  } = location.state;

  console.log("simon: " + selectedSeats);
  console.log("simon: " + price);
  console.log("simon: " + title);
  console.log("simon: " + genre);

  // setNoberOfTicket(selectedSeats.length);
  // setTotalPrice(numberOfTicket * price);

  const numberOfTicket = selectedSeats.length;
  const totalPrice = numberOfTicket * price;
  let cardHolderName;
  let cardNumber;
  let expiryMonth;
  let expiryYear;
  let cvv;
  let phoneNumber;

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
    }).catch(
      // on faile
    )

    history.push("/")

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
        <div className="cinema-detail">{MovieDetails}</div>
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
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <select onChange={handleYearChange} required className="credit-card-select" type="select">
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
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
