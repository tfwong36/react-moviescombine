import React, { useEffect } from "react";

import "../style/MainPage.css";
import { getAllMovies } from "../apis/MoviesCombine";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { INIT_MOVIES } from "../constants/constants";
import { useSelector } from "react-redux";
import { Mask, Loading } from "antd-mobile";
import MovieSwiper from "./MainPageComponents/MovieSwiper";
import SearchBar from "./MainPageComponents/SearchBar";
import logo from "../assects/MC3.png";

function MainPage() {
  const dispatch = useDispatch();

  const showingMovieList = useSelector((state) => state.movieList).filter(
    (movie) => movie.movieStatus === "Showing"
  );
  const upcomingMovieList = useSelector((state) => state.movieList).filter(
    (movie) => movie.movieStatus === "Upcoming"
  );

  const [visible, setVisible] = useState(useSelector((state) => state.movieList).length < 1);
  useEffect(() => {
    getAllMovies().then((response) => {
      dispatch({ type: INIT_MOVIES, payload: response.data });
      setVisible(false);
    });
  }, [dispatch]);

  const swipers = (visible) => {
    if (visible) return <Loading></Loading>;
    else
      return (
        <>
          <div className="flexContainer">
            <img src={logo} alt="Logo" className="image" />
            <SearchBar></SearchBar>
          </div>
          <MovieSwiper
            title={"SHOWING"}
            movieList={showingMovieList}
          ></MovieSwiper>
          <MovieSwiper
            title={"UPCOMING"}
            movieList={upcomingMovieList}
          ></MovieSwiper>
        </>
      );
  };
  return (
    <div>
      <Mask visible={visible} />
      {swipers(visible)}
    </div>
  );
}
export default MainPage;
