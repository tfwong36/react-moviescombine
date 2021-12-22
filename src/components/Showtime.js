import { Rate } from "antd-mobile";
import { NavBar, JumboTabs } from 'antd-mobile'
import { List } from 'antd-mobile'
import { useState } from "react";
import "../style/Showtime.css";
import { useHistory,useLocation } from "react-router-dom";
function Showtime() {
const location = useLocation();
const history = useHistory();
const [ pressedDate, setPressedDate] = useState(1);
const showdate = [
  {
    key: 1,
    day: 'WED',
    date: '12/22',
  },
  {
    key: 2,
    day: 'THU',
    date: '12/23',
  },
  {
    key: 3,
    day: 'FRI',
    date: '12/24',
  },
  {
    key: 4,
    day: 'SAT',
    date: '12/25',
  },{
    key: 5,
    day: 'SUN',
    date: '12/26',
  },
];

const cinemas = [
  {
    title: 'Emperor Cinemas (Time Square)',
  },
  {
    title: 'Emperor Cinemas (Ma On Shan)',
  },
  {
    title: 'MCL Citygate Cinema',
  },
  {
    title: 'Movie Town - New Town Plaza',
  },
  {
    title: 'Golden Scene Cinema',
  },
  {
    title: 'Broadway Circuit - Hollywood',
  },
];

const showDetails = [
  {
    timeslot: '10:30',
    price: '$150',
    remainingSeats: 20,
  },
  {
    timeslot: '15:10',
    price: '$150',
    remainingSeats: 0,
  },
  {
    timeslot: '18:45',
    price: '$180',
    remainingSeats: 40,
  },
  {
    timeslot: '22:05',
    price: '$180',
    remainingSeats: 0,
  }
];

  return (
    <>
    <div className="navBar" onClick={() => history.goBack()}><NavBar>Spider-Man: No Way Home</NavBar></div>
    <div className="container">
    <div className="showdateFlex">
        {
          showdate.map((showdate) => (
          <div className={ showdate.key === pressedDate ? "showdateSelected" : "showdate" } onClick={() => setPressedDate(showdate.key)}>
            <div className={ showdate.key === pressedDate ? "showdateTitleSelected" : "showdateTitle" }>{showdate.day}</div>
            <div className={ showdate.key === pressedDate ? "showdateValueSelected" : "showdateValue" }>{showdate.date}</div>
          </div>
          ))
        }
        </div>
        <List
          style={{
            '--border-inner': 'none',
            '--border-top': 'none',
            '--border-bottom': 'none',
            'background-color': 'transparent',
          }}
        >
          {
            cinemas.map((cinema) => (
              <List.Item>
              <div className="cinemaTitle">{cinema.title}</div>
              <div className="showdateFlex">
              {
                  showDetails.map((showDetail) => (
                    <div className={ showDetail.remainingSeats !== 0 ? "showtimeNotNull" : "showtimeNull" }>
                      <div className={ showdate.key === pressedDate ? "showdateTitleSelected" : "showdateTitle" }>{showDetail.timeslot}</div>
                      <div className={ showdate.key === pressedDate ? "showdateValueSelected" : "showdateValue" }>{showDetail.price}</div>
                    </div>
                  ))
              }
              </div>
              </List.Item>
              ))
          }
        </List>
        </div>
    </>
  );
}
export default Showtime;
