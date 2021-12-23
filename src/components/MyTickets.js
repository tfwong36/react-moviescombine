import "../style/MyTickets.css";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  GET_PAYMENT_BY_PHONE_NUMBER,
  GET_PAYMENT_DETAIL_AFTER_PASSWORD,
} from "../constants/constants";
import {
  getPaymentByPhoneNumber,
  postPasswordGetPaymentDetail,
} from "../apis/MoviesCombine";
import { Modal } from "antd-mobile";
import { useSelector } from "react-redux";
import { SearchOutline } from "antd-mobile-icons";

function MyTickets() {
  const [mobileNumber, setMobileNumber] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState([]);
  const [paymentId, setPaymentId] = useState([]);
  const [status, setStatus] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const paymentByPhoneNumberList = useSelector(
    (state) => state.paymentByPhoneNumberList
  );
  const responseAfterPassword = useSelector(
    (state) => state.paymentAfterPassword
  );

  function onChangeMobileNumber(event) {
    setMobileNumber(event.target.value);
  }

  function submitPhoneNumber() {
    getPaymentByPhoneNumber(mobileNumber).then((response) => {
      console.log(response.data);
      dispatch({ type: GET_PAYMENT_BY_PHONE_NUMBER, payload: response.data });
    });
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function displayModal(paymentId) {
    setPaymentId(paymentId);
    setIsModalVisible(true);
  }
  function handleCancel() {
    setIsModalVisible(false);
  }

  function submitPassword() {
    setIsModalVisible(false);
    postPasswordGetPaymentDetail(paymentId, password).then((response) => {
      setStatus(response.status);
      dispatch({
        type: GET_PAYMENT_DETAIL_AFTER_PASSWORD,
        payload: response.data,
      });
    });
    setPassword("");
    if (status === 200) {
      console.log(responseAfterPassword);
      history.push("/PurcahseDetails", responseAfterPassword);
    }
  }

  function loadHistory() {
    return paymentByPhoneNumberList.map((payment, index) => (
      <div id="searchResultPanel" className="resultPanelGroup">
        <div
          className="search-result-item"
          //   onClick={() => history.push("/PurcahseDetails")}
          onClick={() => displayModal(payment.paymentId)}
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
              HKD$ {payment.unitPrice}
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
      {loadHistory()}
      <Modal
        title="Please Input Password"
        visible={isModalVisible}
        content={
          <>
            <input
              type="password"
              placeholder="Password"
              className="modal-input"
              onChange={onChangePassword}
              value={password}
            ></input>
            <button onClick={handleCancel} className="modal-button-cancel">
              Cancel
            </button>
            <button onClick={submitPassword} className="modal-button-confirm">
              Confirm
            </button>
          </>
        }
      ></Modal>
    </>
  );
}

export default MyTickets;
