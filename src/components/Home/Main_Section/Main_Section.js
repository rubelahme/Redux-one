import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import "./Main_Section.scss";
import img from "../../../img/ecommerce-1.png";

const Main_Section = () => {
  return (
    <div className="container">
      <Slide top>
        <h1 className="text-center pt-5"> Ecommerce World</h1>
      </Slide>
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
            <div>
              <img src={img} alt="rubel ahmed" className="img-1" />
            </div>
          </Fade>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Slide top>
            <h2 className="text-center pt-5 mt-5 pb-5">Product List</h2>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Main_Section;
