import React from "react";
import { Swiper } from "antd-mobile";

import "../../style/MainPage.css";
import { useSelector } from "react-redux";

function ComingSoon() {
  const movieList = useSelector((state) => state.movieList)
    .filter((movie) => !movie.showing)
    .map((movie, index) => (
      <Swiper.Item key={index}>
        <div
          className="content"
          style={{
            backgroundImage: "url(" + movie.posterSource + ")",
          }}
        ></div>
      </Swiper.Item>
    ));
  return (
    <>
      <h3 className="title">COMING SOON</h3>
      <Swiper
        slideSize={70}
        trackOffset={15}
        loop
        stuckAtBoundary={false}
        defaultIndex={0}
        autoplay={true}
        autoplayInterval={10000}
      >
        {movieList}
      </Swiper>
    </>
  );
}

export default ComingSoon;
