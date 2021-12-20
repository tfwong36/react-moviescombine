import React from "react";
import { Swiper } from "antd-mobile";

import "../../style/MainPage.css";
import { useSelector } from "react-redux";

function MovieSwiper(props) {
  const showingMovieList = useSelector((state) => state.showingMovieList);
  const upcomingMovieList = useSelector((state) => state.upcomingMovieList);

  function getMovieData(movieList) {
    if (movieList != null) {
      return movieList.map((movie, index) => (
        <Swiper.Item key={index}>
          <div
            className="content"
            style={{
              backgroundImage: "url(" + movie.posterSource + ")",
            }}
            onClick={() => {}}
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
