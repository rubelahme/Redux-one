import React from "react";
import MainSection from "../Main_Section/Main_Section";
import NavBar from "../NavBar/NavBar";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <NavBar></NavBar>
      <MainSection></MainSection>
    </header>
  );
};

export default Header;
