import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Col, Row, Button, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

class BootstrapCarousel extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row
          style={{
            padding: "20px",
            display: "flex",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <h6>Home Page</h6>
        </Row>
      </Container>
    );
  }
}

export default BootstrapCarousel;
