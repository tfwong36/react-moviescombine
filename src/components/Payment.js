import { LeftOutline } from "antd-mobile-icons";
import "../style/Payment.css";
import { useHistory, useLocation } from "react-router-dom";
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
  } = location.state;
  console.log(selectedSeats);
  console.log(title);
  console.log(price);
  console.log(showDateandTime);
  return (
    <>
      <div>
        <div className="back-text" onClick={() => history.goBack()}>
          <LeftOutline className="back-arrow" />
        </div>
        <div className="movie-title-box">{title}</div>

        <div className="price-duration">Price: $196 | Duration: 148 mins</div>
        <div className="cinema-detail">Emperor Cinemas (Ma On Shan)</div>
        <div className="show-date-and-time">22 Dec 2021 (Wed) 15:10</div>
      </div>

      <div className="receipt-info-box">
        <span>
          <div className="receipt-header">Seat No.</div>
          <div className="receipt-content">K10</div>
        </span>
        <span>
          <div className="receipt-header">Seat No.</div>
          <div className="receipt-content">K10</div>
        </span>
        <span>
          <div className="receipt-header">Seat No.</div>
          <div className="receipt-content">K10</div>
        </span>
      </div>
      <div className="receipt-total-box">
        <span className="receipt-header">Seat No.</span>
        <span className="receipt-content">K10</span>
      </div>

      <div className="credit-card-info-box">
        <div className="credit-card-heading">Credit Card</div>
      </div>
    </>
  );
}
export default Payment;
