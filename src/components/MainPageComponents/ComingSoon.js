import React from "react";
import { Swiper } from "antd-mobile";

import "../../style/MainPage.css";

const localhost = "http://localhost:3000/static/media/";
const colors = [
  "kingsman3.dd7a97e8c84921e59bb2.png",
  "kingsman2.f61b1437747607d0a26a.jpg",
  "kingsman.e412399793671ea9e593.png",
  "spiderman.82be141cb1e3ca0be5ed.jpg",
];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className="content"
      style={{
        backgroundImage: "url(" + localhost + color + ")",
      }}
    ></div>
  </Swiper.Item>
));

function ComingSoon() {
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
        {items}
      </Swiper>
    </>
  );
}

export default ComingSoon;
