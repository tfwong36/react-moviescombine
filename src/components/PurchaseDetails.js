import "../style/PurchaseDetails.css";
import { NavBar } from "antd-mobile";
import { useHistory } from "react-router-dom";

function PurchaseDetails() {
  const history = useHistory();
  return (
    <>
      <div onClick={() => history.goBack()}>
        <NavBar className="backText">Purchase Details</NavBar>
      </div>
      <div>
        <h1 className="movie-title">Spider-Man: Work From Home</h1>
      </div>
      <div className="purchase-detail">
        <p>
          <span className="left-align">Theatre:</span>
          <span className="right-align">MCL (Ma On Shan)</span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Date:</span>
          <span className="right-align">20 Dec 2021</span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Time:</span>
          <span className="right-align">10 : 35</span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Seats:</span>
          <span className="right-align">K11</span>
          <span className="right-align">K12</span>
          <span className="right-align">K13</span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Total price (HKD):</span>
          <span className="right-align">140</span>
        </p>
        <br></br>
      </div>
      <div className="purchase-detail">
        <p>
          <span className="left-align">Credit Card No.:</span>
          <span className="right-align">2120 **** **** 5212</span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Credit Card Holder Name:</span>
          <span className="right-align">CHAN TAI MAN</span>
        </p>
        <br></br>
        <p>
          <span className="left-align">Mobile Phone No.:</span>
          <span className="right-align">1234 5678</span>
        </p>
      </div>
      <div className="qrcode">qrcode?</div>
    </>
  );
}

export default PurchaseDetails;
