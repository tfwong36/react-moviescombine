import React, { useEffect } from "react";

import "../style/MainPage.css";
import { getAllMovies } from "../apis/MoviesCombine";
import { useDispatch } from "react-redux";
import { INIT_MOVIES } from "../constants/constants";
import { useSelector } from "react-redux";

import MovieSwiper from "./MainPageComponents/MovieSwiper";

function MainPage() {
  const dispatch = useDispatch();

  const showingMovieList = useSelector((state) => state.movieList).filter(
    (movie) => movie.movieStatus === "Showing"
  );
  const upcomingMovieList = useSelector((state) => state.movieList).filter(
    (movie) => movie.movieStatus === "Upcoming"
  );

  console.log(useSelector((state) => state.movieList));

  useEffect(() => {
    getAllMovies().then((response) => {
      dispatch({ type: INIT_MOVIES, payload: response.data });
    });
  }, [dispatch]);

  return (
    <div>
      <MovieSwiper title={"SHOWING"} movieList={showingMovieList}></MovieSwiper>
      <MovieSwiper
        title={"COMING SOON"}
        movieList={upcomingMovieList}
      ></MovieSwiper>
    </div>
  );
}
export default MainPage;
