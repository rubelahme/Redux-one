import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../Home/NavBar/NavBar";
import ServiceProduct from "../ServiceProduct/ServiceProduct";

const Service = () => {
  const data = useSelector((state) => {
    return state.list.conformList;
  });
  return (
    <div>
      <NavBar></NavBar>
      {data.map((pd) => (
        <ServiceProduct key={pd.id} data={pd}></ServiceProduct>
      ))}
    </div>
  );
};

export default Service;
