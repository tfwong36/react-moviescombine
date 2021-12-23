import { Button } from "antd-mobile";
import { useDispatch } from "react-redux";
import {
  ADD_SNACKS_QUANTITY,
  REDUCE_SNACKS_QUANTITY,
} from "../../../constants/constants";
function SnackQuantity(props) {
  const dispatch = useDispatch();
  const handleReduceFoodQuantity = () => {
    dispatch({
      type: REDUCE_SNACKS_QUANTITY,
      payload: props.currentBrowseFoodIndex,
    });
  };

  const handleAddFoodQuantity = () => {
    dispatch({
      type: ADD_SNACKS_QUANTITY,
      payload: props.currentBrowseFoodIndex,
    });
  };

  return (
    <div className="adjust-quantity-area">
      <Button onClick={handleReduceFoodQuantity} style={{ border: "none" }}>
        -
      </Button>
      <span className="adjust-quantity-quantity">
        {props.currentBrowseFoodQuantity}
      </span>
      <Button onClick={handleAddFoodQuantity} style={{ border: "none" }}>
        +
      </Button>
    </div>
  );
}

export default SnackQuantity;
