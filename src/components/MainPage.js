import Ticketing from "./MainPageComponents/Ticketing";
import ComingSoon from "./MainPageComponents/ComingSoon";
import React from "react";
import { useSelector } from "react-redux";

import "../style/MainPage.css";
import { getAllUpcomingMovieList } from "../apis/MoviesCombine";
import { useDispatch } from "react-redux";
import { INIT_MOVIES } from "../constants/constants";

function MainPage() {
  const dispatch = useDispatch();
//   const movieList = useSelector((state) => state.movieList).filter(
//     (movie) => movie.showing
//   );

  getAllUpcomingMovieList().then((response) => {
    dispatch({ type: INIT_MOVIES, payload: response.data });
  });
  //props past into
  return (
    <div>
      <Ticketing></Ticketing>
      <ComingSoon></ComingSoon>
    </div>
  );
}
export default MainPage;
