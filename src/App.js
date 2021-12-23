import "./App.css";
import { TabBar } from 'antd-mobile'
import { useHistory, useLocation } from "react-router-dom";
import { MemoryRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  const Bottom = () => {
    const history = useHistory()
    const location = useLocation()
    const { pathname } = location
  
    const setRouteActive = (value) => {
      history.push(value)
    }
  
    const tabs = [
      {
        key: '/',
        icon: <SearchOutline fontSize={30} />,
      },
      {
        key: '/MyTickets',
        icon: <CouponOutline fontSize={30} />,
      }
    ]
  
    return (
      <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    )
  }

  return (
    <div className="App">
      <Router initialEntries={['/']}>
        <div>
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
        <div className="bottom">
          <Bottom />
        </div>
      </Router>
    </div>
  );
}

export default App;
