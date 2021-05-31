import React from "react";
import "./ChiledProduct.scss";
import Fade from "react-reveal/Fade";
import { useDispatch } from "react-redux";
import { addToList } from "../../../Redux/Actions/Actions";
const ChiledProduct = (props) => {
  console.log(props);
  const { name, category, img, price } = props.data;
  const dispatch = useDispatch();

  return (
    <div className="col-md-3">
      <Fade button>
        <div className="product">
          <h4>{name}</h4>
          <img src={img} alt="" />
          <h5>{category}: </h5>
          <span>${price}</span>
          <span className="product-1">
            <button onClick={() => dispatch(addToList(props.data))}>Add</button>
          </span>
        </div>
      </Fade>
    </div>
  );
};

export default ChiledProduct;
