import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  SearchOutline,
  MovieOutline,
  FireFill,
  CouponOutline,
} from "antd-mobile-icons";
import MyTickets from "./components/MyTickets";
import Showtime from "./components/Showtime";
import MainPage from "./components/MainPage";
import MovieDetails from "./components/MovieDetails";
import SelectSeat from "./components/SelectSeat";
import Payment from "./components/Payment";
import PurchaseDetails from "./components/PurchaseDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul className="bottom">
              <Link to="/" className="navigation-tab">
                <SearchOutline color="white" fontSize={36} />
              </Link>
              <Link to="/MyTickets" className="navigation-tab">
                <CouponOutline color="white" fontSize={36} />
              </Link>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/MyTickets">
              <MyTickets></MyTickets>
            </Route>
            <Route exact path="/MovieDetails">
              <MovieDetails></MovieDetails>
            </Route>
            <Route exact path="/PurcahseDetails">
              <PurchaseDetails></PurchaseDetails>
            </Route>
            <Route exact path="/Showtime">
              <Showtime></Showtime>
            </Route>
            <Route exact path="/Payment">
              <Payment></Payment>
            </Route>
            <Route exact path="/SelectSeat">
              <SelectSeat></SelectSeat>
            </Route>
            <Route exact path="/">
              <MainPage></MainPage>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
