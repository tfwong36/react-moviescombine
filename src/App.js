import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {SearchOutline, MovieOutline, FireFill, CouponOutline} from 'antd-mobile-icons'
import Trending from './components/Trending';
import MyTickets from './components/MyTickets';
import Cinema from './components/Cinema';
import MainPage from './components/MainPage';
import MovieDetails from './components/MovieDetails';
import SelectSeat from './components/SelectSeat'

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul className="bottom">
              <Link to="/" className="navigation-tab"><SearchOutline color='white' fontSize={36}/></Link>
              <Link to="/Cinema" className="navigation-tab"><MovieOutline color='white' fontSize={36}/></Link>
              <Link to="/Trending" className="navigation-tab"><FireFill color='white' fontSize={36}/></Link>
              <Link to="/MyTickets" className="navigation-tab"><CouponOutline color='white' fontSize={36}/></Link>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/Cinema">
            <Cinema></Cinema>
          </Route>
          <Route exact path="/Trending">
            <Trending></Trending>
          </Route>
          <Route exact path="/MyTickets">
            <SelectSeat></SelectSeat>
          </Route>
          <Route exact path="/MovieDetails">
            <MovieDetails></MovieDetails>
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
