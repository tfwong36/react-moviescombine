import React from "react";
import { Swiper } from "antd-mobile";

import "../../style/MainPage.css";
import { useHistory } from "react-router-dom";

function MovieSwiper(props) {
  const history = useHistory();

  function getMovieData() {
    if (props.movieList != null) {
      return props.movieList.map((movie, index) => (
        <Swiper.Item key={index}>
          <div
            className="content"
            style={{
              backgroundImage: "url(" + movie.posterSource + ")",
            }}
            onClick={() => history.push("/MovieDetails", movie)}
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
        {getMovieData()}
      </Swiper>
    </>
  );
}

export default MovieSwiper;
