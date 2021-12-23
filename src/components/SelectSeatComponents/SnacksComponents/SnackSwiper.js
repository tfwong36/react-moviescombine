import React from "react";
import { Swiper } from "antd-mobile";

import "../../../style/MainPage.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { DEFAULT_FOOD_SWIPER_INDEX } from "../../../constants/constants";

function SnackSwiper(props) {
  const snackList = useSelector((state) => state.snackList);

  function getSnackData() {
    if (snackList != null) {
      return snackList.map((snack, index) => (
        <Swiper.Item key={index}>
          <div
            className="content"
            style={{
              marginTop: "15px",
              backgroundImage: "url(" + snack.imgSrc + ")",
            }}
          ></div>
          <div className="swiper-item">
            {snack.name} ${snack.unitPrice}
          </div>
        </Swiper.Item>
      ));
    }
  }

  return (
    <>
      <Swiper
        slideSize={70}
        trackOffset={15}
        stuckAtBoundary={false}
        defaultIndex={DEFAULT_FOOD_SWIPER_INDEX}
        autoplay={false}
        onIndexChange={(index) => props.setCurrentBrowseFoodIndex(index)}
      >
        {getSnackData()}
      </Swiper>
    </>
  );
}

export default SnackSwiper;
