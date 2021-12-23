import { LeftOutline } from "antd-mobile-icons";
import { useSelector } from "react-redux";
import "../style/Payment.css";
import { Dialog } from "antd-mobile/es/components/dialog/dialog";
import { useHistory, useLocation } from "react-router-dom";
import { Divider } from "antd-mobile";
import api from "../apis/api";
import creditCardIcon from "../assects/creditCard.png";
import { postPasswordGetPaymentDetail } from "../apis/MoviesCombine";
import { useDispatch } from "react-redux";
import { GET_PAYMENT_DETAIL_AFTER_PASSWORD } from "../constants/constants";
import { useState } from "react";

function Payment() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [isSetPwPopVisible, setIsSetPwPopVisible] = useState(false);
  const [paymentRes, setPaymentRes] = useState([]);
  const snackList = useSelector((state) => state.snackList);
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState();
  const [expiryMonth, setExpiryMonth] = useState(1);
  let thisYear = new Date().getFullYear();
  const [expiryYear, setExpiryYear] = useState(thisYear);
  const [cvv, setCvv] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [isWaitingReponse, setIsWaitingResponse] = useState(false);

  const {
    title,
    price,
    selectedSeats,
    showDateandTime,
    cinemaDetail,
    sessionID,
  } = location.state;

  let optionMonth = [];
  let optionYear = [];

  const numberOfTicket = selectedSeats.length;
  const totalPrice =
    numberOfTicket * price +
    snackList.reduce(
      (sum, { quantity, unitPrice }) => sum + quantity * unitPrice,
      0
    );

  const snackRequestObject = snackList
    .filter((snack) => snack.quantity > 0)
    .map((snack) => {
      return {
        foodId: snack.id,
        quantity: snack.quantity,
      };
    });

  for (let i = 1; i <= 12; i++) {
    optionMonth.push(<option>{i}</option>);
  }

  for (let i = thisYear; i <= thisYear + 10; i++) {
    optionYear.push(<option>{i}</option>);
  }

  function payNow(event) {
    event.preventDefault();
    setIsSetPwPopVisible(true);
  }

  function gotoPurchaseDetails(paymentId, password) {
    let sum = 0;
    for (let i = 0; i <= 1000000000; i++) {
      sum += i;
    }
    setIsWaitingResponse(false);
    postPasswordGetPaymentDetail(paymentId, password).then((response) => {
      dispatch({
        type: GET_PAYMENT_DETAIL_AFTER_PASSWORD,
        payload: response.data,
      });
      if (response.status === 200) {
        history.push("/PurcahseDetails", response.data);
      }
    });
  }

  function showErrorPopup(response) {
    if (response.status === 403) {
      Dialog.show({
        content: (
          <div className="pw-pop-title">Please input a one time password"</div>
        ),
        closeOnAction: true,
        actions: [
          {
            key: "ok",
            text: "Ok",
            bold: true,
          },
        ],
      });
    }
    if (response.status === 404) {
      Dialog.show({
        content: (
          <div className="pw-pop-title">Please select another seat.</div>
        ),
        closeOnAction: true,
        actions: [
          {
            key: "ok",
            text: "OK",
            onClick: () => {
              history.goBack();
            },
          },
        ],
      });
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleNameChange(event) {
    setCardHolderName(event.target.value);
  }

  function handleCardNumberChange(event) {
    setCardNumber(event.target.value);
  }

  function handleMonthChange(event) {
    setExpiryMonth(event.target.value);
  }

  function handleYearChange(event) {
    setExpiryYear(event.target.value);
  }

  function handleCvvChange(event) {
    setCvv(event.target.value);
  }

  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }

  const getSnackPaymentDiv = () => {
    if (snackList.filter((snack) => snack.quantity > 0).length < 1)
      return <></>;
    const foodNames = snackList
      .filter((snack) => snack.quantity > 0)
      .map((food) => (
        <div className="receipt-content" key={food.name + food.unitPrice}>
          {food.name}
        </div>
      ));
    const foodQuantity = snackList
      .filter((snack) => snack.quantity > 0)
      .map((food) => (
        <div className="receipt-content" key={food.name + food.unitPrice}>
          {food.quantity}
        </div>
      ));
    const foodPrices = snackList
      .filter((snack) => snack.quantity > 0)
      .map((food) => (
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
            {foodNames}
          </span>
          <span>
            <div className="receipt-header">Quantity</div>
            {foodQuantity}
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
        <div
          style={isWaitingReponse ? { display: "none" } : {}}
          className="back-text"
          onClick={() => history.goBack()}
        >
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
            pattern="[a-zA-Z]{+}"
            disabled={isWaitingReponse}
          ></input>

          <div className="credit-card-subheading">Card Number (16 digits)</div>
          <input
            onChange={handleCardNumberChange}
            required
            maxlength="16"
            className="credit-card-text"
            maxLength={16}
            pattern="[0-9]{16}"
            disabled={isWaitingReponse}
          ></input>

          <div className="credit-card-subheading">Expiry Date (MM/YY)</div>
          <select
            onChange={handleMonthChange}
            required
            className="credit-card-select"
            type="select"
            disabled={isWaitingReponse}
          >
            {optionMonth}
          </select>
          <select
            onChange={handleYearChange}
            required
            className="credit-card-select"
            type="select"
            disabled={isWaitingReponse}
          >
            {optionYear}
          </select>

          <div className="credit-card-subheading">CVV (3 digits)</div>
          <input
            onChange={handleCvvChange}
            required
            maxlength="3"
            className="credit-card-text"
            pattern="[0-9]{3}"
            maxLength={3}
            disabled={isWaitingReponse}
          ></input>

          <div className="credit-card-subheading">Phone Number (8 digits)</div>
          <input
            onChange={handlePhoneNumberChange}
            required
            className="credit-card-text"
            maxlength="8"
            pattern="[0-9]{8}"
            maxLength={8}
            disabled={isWaitingReponse}
          ></input>

          <input
            type="submit"
            className="credit-card-btn"
            value="Pay Now"
            disabled={isWaitingReponse}
          ></input>
        </form>
      </div>
      <Dialog
        visible={isSetPwPopVisible}
        content={
          <div>
            <div className="pw-pop-content">
              Please set a one time password:{" "}
            </div>
            <input
              type="password"
              onChange={handlePasswordChange}
              style={{ width: "100%" }}
            ></input>{" "}
          </div>
        }
        title={<div className="pw-pop-title">Purchase Success</div>}
        closeOnAction
        actions={[
          {
            key: "ok",
            text: "Confirm",
            onClick: () => {
              const paymentRequestBody = {
                payment: {
                  sessionId: sessionID,
                  selectedSeats: selectedSeats,
                  unitPrice: parseInt(price),
                },
                password: password,
                cardHolderName: cardHolderName,
                creditCardNumber: cardNumber,
                expiryMonth: parseInt(expiryMonth),
                expiryYear: parseInt(expiryYear),
                cardCVV: parseInt(cvv),
                phoneNumber: parseInt(phoneNumber),
                foodOrderList: snackRequestObject,
              };
              setIsWaitingResponse(true);
              api
                .post("/payments", paymentRequestBody)
                .then((response) => {
                  gotoPurchaseDetails(response.data.payment.id, password);
                })
                .catch((error) => {
                  setIsWaitingResponse(false);
                  showErrorPopup(error.response);
                });
            },
          },
        ]}
      ></Dialog>
      ;
    </>
  );
}
export default Payment;
