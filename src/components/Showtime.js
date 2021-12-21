import { Rate } from "antd-mobile";
import { NavBar, TabBar } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import "../style/Showtime.css";
import { useHistory,useLocation } from "react-router-dom";
function Showtime() {
const location = useLocation();
const history = useHistory();

  return (
    <>
    <div className="navBar" onClick={() => history.goBack()}><NavBar>Spider-Man: No Way Home</NavBar></div>
    <div>
        <div className="otherDetailsFlex">
          <div className="otherDetails">
            <div className="otherDetailsTitle">Wed</div>
            <div className="otherDetailsValue">12/22</div>
          </div>
          <div className="otherDetails">
            <div className="otherDetailsTitle">Thu</div>
            <div className="otherDetailsValue">12/23</div>
          </div>
          <div className="otherDetails">
            <div className="otherDetailsTitle">Fri</div>
            <div className="otherDetailsValue">12/24</div>
          </div>
          <div className="otherDetails">
            <div className="otherDetailsTitle">Sat</div>
            <div className="otherDetailsValue">12/25</div>
          </div>
          <div className="otherDetails">
            <div className="otherDetailsTitle">Sun</div>
            <div className="otherDetailsValue">12/26</div>
          </div>
        </div>
        <div className="trailer">Emperor Cinemas (Time Square)</div>
          <div className="otherDetailsFlex">
          <div className="otherDetails">
            <div className="otherDetailsTitle">10:30</div>
            <div className="otherDetailsValue">$150</div>
          </div>
          <div className="otherDetails">
            <div className="otherDetailsTitle">15:40</div>
            <div className="otherDetailsValue">$150</div>
          </div>
          <div className="otherDetails">
            <div className="otherDetailsTitle">18:00</div>
            <div className="otherDetailsValue">$180</div>
          </div>
          <div className="otherDetails">
            <div className="otherDetailsTitle">22:30</div>
            <div className="otherDetailsValue">$180</div>
          </div>
        </div>
        </div>
    </>
  );
}
export default Showtime;
