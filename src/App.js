import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SearchOutline, CouponOutline } from "antd-mobile-icons";
import MyTickets from "./components/MyTickets";
import MainPage from "./components/MainPage";
import MovieDetails from "./components/MovieDetails";
import Showtime from "./components/Showtime";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/MyTickets">
              <MyTickets></MyTickets>
            </Route>
            <Route exact path="/MovieDetails">
              <MovieDetails></MovieDetails>
            </Route>
            <Route exact path="/Showtime">
              <Showtime></Showtime>
            </Route>
            <Route exact path="/">
              <MainPage></MainPage>
            </Route>
          </Switch>
        </div>
        <nav>
          <ul className="bottom">
            <Link to="/" className="navigation-tab">
              <SearchOutline color="white" fontSize={36} />
            </Link>
            <Link to="/MyTicket" className="navigation-tab">
              <CouponOutline color="white" fontSize={36} />
            </Link>
          </ul>
        </nav>
      </Router>
    </div>
  );
}

export default App;
