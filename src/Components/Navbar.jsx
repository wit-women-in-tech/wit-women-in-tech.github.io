import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Images/logo.png";
import "./Navbar.scss";
export default function NavbarFun() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} height="40px"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link-my" to="/about">
                About
              </Link>
              <Link className="nav-link-my" to="/events">
                Events
              </Link>
              <Link className="nav-link-my" to="/team">
                Team
              </Link>
              <Link className="nav-link-my" to="/testimonial">
                Testimonial
              </Link>
              <Link className="nav-link-my" to="/resources">
                Resources
              </Link>
              <Link className="nav-link-my" to="/contact">
                Contact
              </Link>
            </Nav>
            <Nav>
              <Button
                className="button-nav"
                onClick={() => {
                  navigate("/register");
                }}
              >
                REGISTER
              </Button>
              <Button
                className="button-nav"
                onClick={() => {
                  navigate("/login");
                }}
              >
                LOGIN
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
