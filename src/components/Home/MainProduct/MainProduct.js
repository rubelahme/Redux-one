import React from "react";
import "./MainProduct.scss";
import Fade from "react-reveal/Fade";
import img from "../../../img/ecommerce-1.png";
const MainProduct = () => {
  return (
    <div className="container mb-5">
      <Fade top>
        <h2 className="text-center text-1 pt-5">Main Section</h2>
      </Fade>
      <div className="row">
        <div className="col-md-6">
          <Fade left>
            <p>
              Ecommerce, also known as electronic commerce or internet commerce,
              refers to the buying and selling of goods or services using the
              internet, and the transfer of money and data to execute these
              transactions.
            </p>
          </Fade>
        </div>
        <div className="col-md-6">
          <Fade right>
            <img src={img} alt="" className="img-1" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
