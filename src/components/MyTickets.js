import "../style/MyTickets.css";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  GET_PAYMENT_BY_PHONE_NUMBER,
  GET_PAYMENT_DETAIL_AFTER_PASSWORD,
} from "../constants/constants";
import {
  getPaymentByPhoneNumber,
  postPasswordGetPaymentDetail,
} from "../apis/MoviesCombine";
import { Modal } from "antd-mobile";

function MyTickets() {

  const [mobileNumber, setMobileNumber] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState([]);
  const [paymentId, setPaymentId] = useState([]);
  const history = useHistory();

  function onChangeMobileNumber(event) {
    setMobileNumber(event.target.value);
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
    postPasswordGetPaymentDetail(paymentId).then((response) => {
      dispatch({
        type: GET_PAYMENT_DETAIL_AFTER_PASSWORD,
        payload: response.data,
      });
    });
  }

  function loadHistory() {
          //   onClick={() => history.push("/PurcahseDetails")}
          onClick={() => displayModal(payment.paymentId)}
              HKD$ {payment.unitPrice}
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
