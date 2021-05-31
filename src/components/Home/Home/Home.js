import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainProduct from "../MainProduct/MainProduct";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Product></Product>
      <MainProduct></MainProduct>
      <Footer></Footer>
    </div>
  );
};

export default Home;
