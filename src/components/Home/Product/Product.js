import React from "react";
import "./Product.scss";
import ChiledProduct from "../ChiledProduct/ChiledProduct";
import { useSelector } from "react-redux";
const Product = () => {
  const data = useSelector((state) => {
    return state.list.addList;
  });
  const item = data.slice(16, 32);
  return (
    <div className="container">
      <div className="row">
        {item.map((pd) => (
          <ChiledProduct key={pd.id} data={pd}></ChiledProduct>
        ))}
      </div>
    </div>
  );
};

export default Product;
