import React from "react";
import "./ServiceProduct.scss";
const ServiceProduct = (props) => {
  const { name, category, img, price } = props.data;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="service-1">
            <h4>{name}</h4>
            <img src={img} alt="" />
            <h5>{category}: </h5>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProduct;
