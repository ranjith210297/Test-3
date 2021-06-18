import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        navbar="dark"
        bg="dark"
        text="light"
      >
        <Navbar.Brand href="/" style={{ paddingLeft: "10px" }}>
          Rice Leaf Disease Detection
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ padding: "15px" }}>
          <Nav className="mr-auto">
            <LinkContainer to="/Predictor">
              <Nav.Link>Predictor</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    );
   
  }

}

export default BootstrapNavbar;
