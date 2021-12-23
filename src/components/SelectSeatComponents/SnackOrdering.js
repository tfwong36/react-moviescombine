import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd-mobile";
import SnackSwiper from "./SnackSwiper";
import { getAllSnacks } from "../../apis/MoviesCombine";
import {
  DEFAULT_FOOD_QUANTITY,
  DEFAULT_FOOD_SWIPER_INDEX,
  REDUCE_SNACKS_QUANTITY,
  ADD_SNACKS_QUANTITY,
  INIT_SNACKS,
} from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SnackOrdering(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [defaultSnackList, setDefaultSnackList] = useState([]);
  const [currentBrowseFoodIndex, setCurrentBrowseFoodIndex] = useState(
    DEFAULT_FOOD_SWIPER_INDEX
  );

  useEffect(() => {
    getAllSnacks().then((response) => {
      let foodListWithQuantity = response.data.map((food) => {
        food.quantity = DEFAULT_FOOD_QUANTITY;
        return food;
      });
      setDefaultSnackList(foodListWithQuantity);
      dispatch({ type: INIT_SNACKS, payload: foodListWithQuantity });
    });
  }, [dispatch]);

  const handleConfirm = () => {
    props.setIsSnackModalVisible(false);
    dispatch({ type: INIT_SNACKS, payload: defaultSnackList });
    // history.push("/Payment", {
    //   selectedSeats: props.selectedSeats,
    //   cinemaDetail: props.cinemaDetail,
    //   title: props.title,
    //   price: props.price,
    //   showDateandTime: props.showDateandTime,
    //   sessionID: props.sessionID,
    // });
  };

  const handleCancel = () => {
    dispatch({ type: INIT_SNACKS, payload: defaultSnackList });
    props.setIsSnackModalVisible(false);
  };

  const handleReduceFoodQuantity = (mode) => {
    dispatch({
      type: REDUCE_SNACKS_QUANTITY,
      payload: currentBrowseFoodIndex,
    });
  };

  const handleAddFoodQuantity = (mode) => {
    dispatch({
      type: ADD_SNACKS_QUANTITY,
      payload: currentBrowseFoodIndex,
    });
  };

  return (
    <>
      <Modal
        title="Snacks when Movie Time?"
        visible={props.isSnackModalVisible}
        content={
          <>
            <SnackSwiper
              setCurrentBrowseFoodIndex={setCurrentBrowseFoodIndex}
            ></SnackSwiper>
            <div>
              <Button onClick={handleReduceFoodQuantity}>-</Button>
              <Button
                onClick={handleAddFoodQuantity}
                style={{ backgroundColor: "blue", color: "white" }}
              >
                +
              </Button>
            </div>
            <div>
              <Button onClick={handleCancel}>Cancel</Button>

              <Button
                onClick={handleConfirm}
                style={{ backgroundColor: "blue", color: "white" }}
              >
                Confirm
              </Button>
            </div>
          </>
        }
      ></Modal>
    </>
  );
}

export default SnackOrdering;
