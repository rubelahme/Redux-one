import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  const data = useSelector((state) => {
    return state.list.conformList;
  });
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="expand">
      <Container>
        <Navbar.Brand as={Link} to="/" className="menu-1">
          Ecommerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/Home" className="text-dark menu px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/service" className="text-dark menu px-3">
              Product <span className="number">{data.length}</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-dark menu px-3">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/singIn" className="menu-4">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
