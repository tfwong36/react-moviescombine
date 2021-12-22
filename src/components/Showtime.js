import React, { useEffect } from "react";
import { getAllCinemas, getAllSessionsByMovieId } from "../apis/MoviesCombine";
import { useDispatch } from "react-redux";
import {
  INIT_CINEMAS,
  INIT_SESSIONS,
  INIT_CINEMA_SESSIONS,
} from "../constants/constants";
import { useSelector } from "react-redux";
import { NavBar } from "antd-mobile";
import { List } from "antd-mobile";
import { useState } from "react";
import "../style/Showtime.css";
import { useHistory, useLocation } from "react-router-dom";
function Showtime() {
  const location = useLocation();
  const history = useHistory();
  const currentDate = new Date();
  const [pressedKey, setPressedKey] = useState(6);
  const [pressedDate, setPressedDate] = useState(currentDate.getDate() + 6);
  const dispatch = useDispatch();
  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let showDates = [];

  const sessionList = useSelector((state) => state.sessionList);

  const cinemaListWithSessions = useSelector(
    (state) => state.cinemaListWithSessions
  );

  const allCinemaList = useSelector((state) => state.cinemaList);

  useEffect(() => {
    getAllCinemas().then((response) => {
      dispatch({ type: INIT_CINEMAS, payload: response.data });
    });
    getAllSessionsByMovieId(location.state).then((response) => {
      dispatch({ type: INIT_SESSIONS, payload: response.data });
    });
  }, [dispatch, location.state]);

  useEffect(() => {
    const currentSessions = sessionList.filter(
      (session) =>
        session.showDateTimeHkt.toString().split("T")[0] ===
        pressedDate.toString()
    );
    dispatch({
      type: INIT_CINEMA_SESSIONS,
      payload: allCinemaList.map((cinema) => {
        cinema.sessionList = currentSessions.filter(
          (session) => cinema.id === session.cinemaId
        );
        return cinema;
      }),
    });
  }, [dispatch, pressedDate]);

  //Arrange future 5 dates btn
  for (var i = 0; i < 5; i++) {
    const displayDate = new Date();
    displayDate.setDate(currentDate.getDate() + i);
    showDates.push({
      key: i + 1,
      day: weekday[displayDate.getDay()],
      date: displayDate.getMonth() + 1 + "/" + displayDate.getDate(),
      longDate:
        displayDate.getFullYear() +
        "-" +
        (displayDate.getMonth() + 1) +
        "-" +
        displayDate.getDate(),
    });
  }

  function renderSessions() {
    return cinemaListWithSessions.map((cinema) => {
      if (cinema.sessionList.length > 0) {
        return (
          <List.Item key={cinema.id + cinema.name}>
            <div className="cinemaTitle">{cinema.name}</div>
            <div className="showdateFlex">
              {cinema.sessionList.map((session) => (
                <div
                  className={
                    session.hasRemainSeat ? "showtimeNotNull" : "showtimeNull"
                  }
                >
                  <div className="timeslot">
                    {session?.showDateTimeHkt
                      .toString()
                      .split("T")[1]
                      .toString()
                      .substring(0, 5)}
                  </div>
                  <div className="price">{session.price}</div>
                </div>
              ))}
            </div>
          </List.Item>
        );
      } else {
        return <></>;
      }
    });
  }
  console.log(pressedKey);

  return (
    <>
      <div className="navBar" onClick={() => history.goBack()}>
        <NavBar>Spider-Man: No Way Home</NavBar>
      </div>
      <div className="container">
        <div className="showdateContainer">
          <div className="showdateFlex">
            {showDates.map((showdate) => (
              <div
                key={showdate}
                className={
                  showdate.key === pressedKey ? "showdateSelected" : "showdate"
                }
                onClick={() => {
                  setPressedKey(showdate.key);
                  setPressedDate(showdate.longDate);
                }}
              >
                <div
                  className={
                    showdate.key === pressedKey
                      ? "showdateTitleSelected"
                      : "showdateTitle"
                  }
                >
                  {showdate.day}
                </div>
                <div
                  className={
                    showdate.key === pressedKey
                      ? "showdateValueSelected"
                      : "showdateValue"
                  }
                >
                  {showdate.date}
                </div>
              </div>
            ))}
          </div>
        </div>
        <List
          style={{
            "--border-inner": "none",
            "--border-top": "none",
            "--border-bottom": "none",
            "background-color": "transparent",
            "margin-top": "70px",
          }}
        >
          {renderSessions()}
        </List>
      </div>
    </>
  );
}
export default Showtime;
