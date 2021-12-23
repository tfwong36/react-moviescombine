import React, { useEffect, useState } from "react";
import { Dialog, Modal, Button } from "antd-mobile";
import SnackSwiper from "./SnackSwiper";
import { getAllSnacks } from "../../../apis/MoviesCombine";
import "../../../style/SnackOrdering.css";
import {
  DEFAULT_FOOD_QUANTITY,
  DEFAULT_FOOD_SWIPER_INDEX,
  REDUCE_SNACKS_QUANTITY,
  ADD_SNACKS_QUANTITY,
  INIT_SNACKS,
} from "../../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SnackQuantity from "./SnackQuantity";

function SnackOrdering(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentBrowseFoodIndex, setCurrentBrowseFoodIndex] = useState(
    DEFAULT_FOOD_SWIPER_INDEX
  );

  const snackList = useSelector((state) => state.snackList);
  const [currentBrowseFoodQuantity, setCurrentBrowseQuantity] = useState(0);

  // const currentBrowseFoodQuantity = useSelector(
  //   (state) => state.snackList
  // ).filter((snack, index) => index === currentBrowseFoodIndex)[0].quantity;

  useEffect(() => {
    setCurrentBrowseQuantity(
      !snackList.filter((snack, index) => index === currentBrowseFoodIndex)[0]
        ? DEFAULT_FOOD_QUANTITY
        : snackList.filter(
            (snack, index) => index === currentBrowseFoodIndex
          )[0].quantity
    );
  }, [currentBrowseFoodIndex, snackList]);

  useEffect(() => {
    getAllSnacks().then((response) => {
      let foodListWithQuantity = response.data.map((food) => {
        food.quantity = DEFAULT_FOOD_QUANTITY;
        return food;
      });
      dispatch({ type: INIT_SNACKS, payload: foodListWithQuantity });
    });
  }, [dispatch]);

  const handleConfirm = () => {
    props.setIsSnackModalVisible(false);
    let isEmptySnackBucket = true;
    for (let snack of snackList) {
      if (snack.quantity > 0) {
        isEmptySnackBucket = false;
        break;
      }
    }
    if (isEmptySnackBucket) {
      Dialog.show({
        content: (
          <div
            style={{
              fontFamily: "Abyssinica SIL",
              fontSize: "18px",
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            Are you sure? It is necessary for having great movie time! :)
          </div>
        ),
        closeOnAction: true,
        actions: [
          [
            {
              key: "cancel",
              text: "No",
            },
            {
              key: "delete",
              text: "Yes",
              bold: true,
              danger: true,
              onClick: () =>
                history.push("/Payment", {
                  selectedSeats: props.selectedSeats,
                  cinemaDetail: props.cinemaDetail,
                  title: props.title,
                  price: props.price,
                  showDateandTime: props.showDateandTime,
                  sessionID: props.sessionID,
                }),
            },
          ],
        ],
      });

      return;
    }

    history.push("/Payment", {
      selectedSeats: props.selectedSeats,
      cinemaDetail: props.cinemaDetail,
      title: props.title,
      price: props.price,
      showDateandTime: props.showDateandTime,
      sessionID: props.sessionID,
    });
  };

  const handleCancel = () => {
    const defaultSnackList = snackList.map((food) => {
      food.quantity = DEFAULT_FOOD_QUANTITY;
      return food;
    });
    dispatch({ type: INIT_SNACKS, payload: defaultSnackList });
    props.setIsSnackModalVisible(false);
  };

  return (
    <>
      <Modal
        title={<span className="modal-title">Select Snacks</span>}
        visible={props.isSnackModalVisible}
        content={
          <>
            <span className="modal-subtitle">
              Enjoy snack during movie time!
            </span>
            <SnackSwiper
              setCurrentBrowseFoodIndex={setCurrentBrowseFoodIndex}
            ></SnackSwiper>
            <SnackQuantity
              currentBrowseFoodQuantity={currentBrowseFoodQuantity}
              currentBrowseFoodIndex={currentBrowseFoodIndex}
            ></SnackQuantity>
            <div>
              <Button onClick={handleCancel} className="cancel-btn">
                Cancel
              </Button>

              <Button onClick={handleConfirm} className="confirm-btn">
                Purchase
              </Button>
            </div>
          </>
        }
      ></Modal>
    </>
  );
}

export default SnackOrdering;
