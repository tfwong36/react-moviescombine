import React from "react";
import { Swiper } from "antd-mobile";

import "../../style/MainPage.css";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function MovieSwiper(props) {
  const history = useHistory();
  const showingMovieList = useSelector((state) => state.showingMovieList);
  const upcomingMovieList = useSelector((state) => state.upcomingMovieList);

  function getMovieData(movieList) {
    if (movieList != null) {
      return movieList.slice(0, 3).map((movie, index) => (
        <Swiper.Item key={index}>
          <div
            className="content"
            style={{
              backgroundImage: "url(" + movie.posterSource + ")",
            }}
            onClick={() => history.push('/MovieDetails')}
          ></div>
        </Swiper.Item>
      ));
    }
  }

  return (
    <>
      <h3 className="title">{props.title}</h3>
      <Swiper
        slideSize={70}
        trackOffset={15}
        loop
        stuckAtBoundary={false}
        defaultIndex={0}
        autoplay={true}
        autoplayInterval={10000}
      >
        {getMovieData(props.isShowing ? showingMovieList : upcomingMovieList)}
      </Swiper>
    </>
  );
}

export default MovieSwiper;
