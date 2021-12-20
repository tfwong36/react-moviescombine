import Ticketing from "./MainPageComponents/Ticketing";
import ComingSoon from "./MainPageComponents/ComingSoon";
import React from "react";
import { useEffect, useSelector } from "react";

import "../style/MainPage.css";
import { getMovieListByIsShowing } from "../apis/MoviesCombine";
import { useDispatch } from "react-redux";
import {
  INIT_SHOWING_MOVIES,
  INIT_UPCOMING_MOVIES,
} from "../constants/constants";
import MovieSwiper from "./MainPageComponents/MovieSwiper";

function MainPage() {
  const dispatch = useDispatch();

  getMovieListByIsShowing(true).then((response) => {
    dispatch({ type: INIT_SHOWING_MOVIES, payload: response.data });
  });
  getMovieListByIsShowing(false).then((response) => {
    dispatch({ type: INIT_UPCOMING_MOVIES, payload: response.data });
  });

  return (
    <div>
      <MovieSwiper></MovieSwiper>
    </div>
  );
}
export default MainPage;
