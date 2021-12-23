import { LeftOutline } from "antd-mobile-icons";
import "../style/Payment.css";
import { useHistory, useLocation } from "react-router-dom";
import { Divider } from "antd-mobile";
import api from "../apis/api";
import creditCardIcon from "../assects/creditCard.png";
function Payment() {
  const location = useLocation();
  const history = useHistory();
//   const snackList = useSelector((state) => state.snackList);

  const {
    title,
    price,
    selectedSeats,
    showDateandTime,
    cinemaDetail,
    sessionID,
  } = location.state;

  const snackList = [
    {
      id: "001",
      name: "pop corn",
      quantity: 3,
      unitPrice: 1000,
    },
    {
      id: "002",
      name: "coke",
      quantity: 4,
      unitPrice: 10000,
    },
  ];

  // const snackList = []
  const numberOfTicket = selectedSeats.length;
  const totalPrice =
    numberOfTicket * price +
    snackList.reduce((sum, { quantity, unitPrice }) => sum + quantity * unitPrice, 0);

  const snackRequestObject = snackList.map((snack) => {
    return {
      foodId: snack.id,
      quantity: snack.quantity,
    };
  });

  let cardHolderName;
  let cardNumber;
  let expiryMonth;
  let expiryYear;
  let cvv;
  let phoneNumber;

  let optionMonth = [];
  let optionYear = [];
  let thisYear = new Date().getFullYear();

  for (let i = 1; i <= 12; i++) {
    optionMonth.push(<option>{i}</option>);
  }

  for (let i = thisYear; i <= thisYear + 10; i++) {
    optionYear.push(<option>{i}</option>);
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
      payment: {
        sessionId: sessionID,
        selectedSeats: selectedSeats,
        unitPrice: parseInt(price),
      },
      cardHolderName: cardHolderName,
      creditCardNumber: cardNumber,
      expiryMonth: parseInt(expiryMonth),
      expiryYear: parseInt(expiryYear),
      cardCVV: parseInt(cvv),
      phoneNumber: parseInt(phoneNumber),
      foodOrderList: snackRequestObject,
    };
    api
      .post("/payments", requestBody)
      .then((response) => {
        console.log(response); // success
        history.push("/");
      })
      .catch((response) => {
        console.log("got 404");
        history.goBack();
      });
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

  const getSnackPaymentDiv = () => {
    if (snackList.length < 1) return <></>
    const foodNamesWithquantity = snackList.map((food) => (
      <div className="receipt-content" key={food.name + food.quantity}>
        {food.name} x {food.quantity}
      </div>
    ));
    const foodPrices = snackList.map((food) => (
      <div className="receipt-content" key={food.name + food.unitPrice}>
        ${food.unitPrice}
      </div>
    ));
    return (
      <>
        <Divider
          style={{
            marginBottom: "-15px",
            borderColor: "#bdcaec",
          }}
        />
        <div className="receipt-info-box">
          <span>
            <div className="receipt-header">Food</div>
            {foodNamesWithquantity}
          </span>
          <span>
            <div className="receipt-header">Price</div>
            {foodPrices}
          </span>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <div className="back-text" onClick={() => history.goBack()}>
          <LeftOutline className="back-arrow" />
        </div>
        <div className="movie-title-box">{title}</div>

        <div className="price-duration">
          Price: ${price} | Duration: 148 mins
        </div>
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
          <div className="receipt-content">${price}</div>
        </span>
      </div>
      {getSnackPaymentDiv()}
      <div className="receipt-total-box">
        <span className="receipt-header">Total Price: </span>
        <span className="receipt-content">${totalPrice.toFixed(1)}</span>
      </div>

      <div className="credit-card-info-box">
        <div style={{ display: "flex" }}>
          <span>
            <div className="credit-card-heading">Credit Card</div>
          </span>
          <span>
            <img src={creditCardIcon} className="credit-card-icon"></img>
          </span>
        </div>

        <form onSubmit={payNow}>
          <div className="credit-card-subheading">Card Holder Name</div>
          <input
            onChange={handleNameChange}
            required
            className="credit-card-text"
          ></input>

          <div className="credit-card-subheading">Card Number</div>
          <input
            onChange={handleCardNumberChange}
            required
            className="credit-card-text"
          ></input>

          <div className="credit-card-subheading">Expiry Date (MM/YY)</div>
          <select
            onChange={handleMonthChange}
            required
            className="credit-card-select"
            type="select"
          >
            {optionMonth}
          </select>
          <select
            onChange={handleYearChange}
            required
            className="credit-card-select"
            type="select"
          >
            {optionYear}
          </select>

          <div className="credit-card-subheading">CVV</div>
          <input
            onChange={handleCvvChange}
            required
            className="credit-card-text"
          ></input>

          <div className="credit-card-subheading">Phone Number</div>
          <input
            onChange={handlePhoneNumberChange}
            required
            className="credit-card-text"
          ></input>

          <input
            type="submit"
            className="credit-card-btn"
            value="Pay Now"
          ></input>
        </form>
      </div>
    </>
  );
}
export default Payment;
