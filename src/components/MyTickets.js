import "../style/MyTickets.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GET_PAYMENT_BY_PHONE_NUMBER } from "../constants/constants";
import { getPaymentByPhoneNumber } from "../apis/MoviesCombine";
import { useSelector } from "react-redux";
import { SearchOutline } from "antd-mobile-icons";

function MyTickets() {
  const [mobileNumber, setMobileNumber] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const paymentByPhoneNumberList = useSelector(
    (state) => state.paymentByPhoneNumberList
  );

  function onChangeMobileNumber(event) {
    console.log(event.target.value);
    setMobileNumber(event.target.value);
  }

  function submitPhoneNumber() {
    getPaymentByPhoneNumber(mobileNumber).then((response) => {
      console.log(response.data);
      dispatch({ type: GET_PAYMENT_BY_PHONE_NUMBER, payload: response.data });
    });
  }

  function loadPayment() {
    return paymentByPhoneNumberList.map((payment, index) => (
      <div id="searchResultPanel" className="resultPanelGroup">
        <div
          className="search-result-item"
          onClick={() => history.push("/PurcahseDetails")}
        >
          <p className="search-result-item-title">{payment.movie.title}</p>
          <p className="search-result-item-location">
            {payment.cinema.location}
          </p>
          <p className="search-result-item-time">
            <span>{payment.sessionResponse.date}</span>
            <span style={{ paddingLeft: "3vw" }}>
              {payment.sessionResponse.time}
            </span>
            <span className="search-result-item-price">
              HKD${payment.unitPrice}
            </span>
          </p>
        </div>
      </div>
    ));
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
        <button
          type="submit"
          className="search-submit"
          onClick={submitPhoneNumber}
        >
          {" "}
          <SearchOutline fontSize={26} color="white" />
        </button>
      </div>
      <div className="middle-line"></div>
      <div>
        <div className="my-ticket-result">Result</div>
      </div>
      {loadPayment()}
    </>
  );
}

export default MyTickets;
