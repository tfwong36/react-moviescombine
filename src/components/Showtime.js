
import React, { useEffect } from "react";
import { getAllCinemas, getAllSessions } from "../apis/MoviesCombine";
import { useDispatch } from "react-redux";
import { INIT_CINEMAS, INIT_SESSIONS } from "../constants/constants";
import { useSelector } from "react-redux";
import { NavBar } from 'antd-mobile'
import { List } from 'antd-mobile'
import { useState } from "react";
import "../style/Showtime.css";
import { format } from "date-fns";
import { useHistory, useLocation } from "react-router-dom";
function Showtime() {
  const location = useLocation();
  const {
    id,
  } = location.state;
  const history = useHistory();
  const [ pressedDate, setPressedDate] = useState(1);
  const dispatch = useDispatch();
  const currentDate = new Date();
  const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  let showdates = [];

  const sessionList = useSelector((state) => state.sessionListByDate);
  
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
    console.log(displayDate);
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
          <div className={ showdate.key === pressedDate ? "showdateSelected" : "showdate" } onClick={() => setPressedDate(showdate.key)}>
            <div className={ showdate.key === pressedDate ? "showdateTitleSelected" : "showdateTitle" }>{showdate.day}</div>
            <div className={ showdate.key === pressedDate ? "showdateValueSelected" : "showdateValue" }>{showdate.date}</div>
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
