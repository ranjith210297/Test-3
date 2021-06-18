import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Nav, Col, Row } from "react-bootstrap";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import VideoClassifier from "./VideoClassifier";
import TakePicture from "./TakePicture";

import FileUpload from "./BrowseIm";

class Predictor extends React.Component {
  render() {
    return (
      <Container fluid style={{ height: "auto" }}>
        <Row style={{ paddingTop: "20px", height: "auto" }}>
          <Col md={1} lg={1}></Col>
          &nbsp;
          <Col xs={12} md={10} sm={12} lg={10}>
            <TabContainer id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  style={{ paddingTop: "20px", paddingBottom: "20px" }}
                >
                  <Nav variant="tabs" className="flex-row">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Browse Image</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Cam</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Take Picture</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
              &nbsp;
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  style={{ paddingTop: "20px", paddingBottom: "20px" }}
                >
                  <TabContent>
                    <TabPane eventKey="first">
                      <FileUpload />
                    </TabPane>

                    <TabPane eventKey="second">
                      <VideoClassifier />
                    </TabPane>
                    <TabPane eventKey="third">
                      <TakePicture />
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </TabContainer>
          </Col>
          &nbsp;
          <Col md={1} lg={1}></Col>
        </Row>
      </Container>
    );
  }
}

export default Predictor;
