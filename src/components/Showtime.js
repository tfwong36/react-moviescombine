
import React, { useEffect } from "react";
import { getAllCinemas, getAllSessions } from "../apis/MoviesCombine";
import { useDispatch } from "react-redux";
import { INIT_CINEMAS, INIT_SESSIONS } from "../constants/constants";
import { useSelector } from "react-redux";
import { NavBar } from 'antd-mobile'
import { List } from 'antd-mobile'
import { useState } from "react";
import "../style/Showtime.css";
import { useHistory, useLocation } from "react-router-dom";
function Showtime() {
  const location = useLocation();
  const history = useHistory();
  const currentDate = new Date();
  const [ pressedKey, setPressedKey] = useState(1);
  const [ pressedDate, setPressedDate] = useState(currentDate);
  const dispatch = useDispatch();
  const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  let showdates = [];
  const {
    id,
    title,
  } = location.state;

  const sessionList = useSelector((state) => state.sessionList).filter(
    (session) => session.movieId == id && session.showDateTimeHkt.toString().substring(10) == pressedDate
  );
  
  const cinemaList = useSelector((state) => state.cinemaList);
  const cinemaNameList = sessionList.map((session) => {
      return cinemaList.filter((cinema) => cinema.id === session.cinemaId);
  });

  useEffect(() => {
    getAllCinemas().then((response) => {
      dispatch({ type: INIT_CINEMAS, payload: response.data });
    });
  }, [dispatch]);

  useEffect(() => {
    getAllSessions().then((response) => {
      dispatch({ type: INIT_SESSIONS, payload: response.data });
    });
  }, [dispatch]);
  
  for (var i = 0; i < 5; i++) {
    const displayDate = new Date();
    displayDate.setDate(currentDate.getDate() + i);
    showdates.push({
      key: i + 1,
      day: weekday[displayDate.getDay()],
      date: (displayDate.getMonth() + 1) + "/" + displayDate.getDate(),
      longDate: (displayDate.getFullYear() - 1) + "-" + (displayDate.getMonth() + 1) + "-" + displayDate.getDate()
    })
  }

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
    <div className="showdateContainer">
    <div className="showdateFlex">
        {
          showdates.map((showdate) => (
          <div className={ showdate.key === pressedKey ? "showdateSelected" : "showdate" } onClick={() => { setPressedKey(showdate.key); setPressedDate(showdate.longDate);}}>
            <div className={ showdate.key === pressedKey ? "showdateTitleSelected" : "showdateTitle" }>{showdate.day}</div>
            <div className={ showdate.key === pressedKey ? "showdateValueSelected" : "showdateValue" }>{showdate.date}</div>
          </div>
          ))
        }
        </div>
        </div>
        <List
          style={{
            '--border-inner': 'none',
            '--border-top': 'none',
            '--border-bottom': 'none',
            'background-color': 'transparent',
            'margin-top': '70px',
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
                      <div className="timeslot">{showDetail.timeslot}</div>
                      <div className="price">{showDetail.price}</div>
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
