import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Images/logo.png";
export default function NavbarFun() {
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
            <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link href="/team">Team</Nav.Link>
              <Nav.Link href="/testimonial">Testimonial</Nav.Link>
              <Nav.Link href="/resources">Resources</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
