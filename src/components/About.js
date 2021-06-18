import React from "react";
import { Card, Table } from "react-bootstrap";
import Container from "react-bootstrap/Container";
class About extends React.Component {
  render() {
    return (
      <Container
        fluid
        style={{
          paddingTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          bg="transparent"
          text="dark"
          border="success"
          className="text-center"
          style={{
            width: "auto",
            borderRadius: "2%",
            borderWidth: "3px",
            maxWidth: "75vh",
          }}
        >
          <Card.Header>About</Card.Header>
          <Card.Body>

            <Card.Title className="text-muted">
              <h4>
                <b>Leaf Disease Detection</b>
              </h4>
            </Card.Title>
            <Card.Text>
              <blockquote className="blockquote">
                <p className="text-info" style={{ textAlign: "justify" }}>
                  This application is used to detect the common diseases of rice
                  and also tells us the remedies to treat them. It recognises
                  the rice disease through web cam or by browsing an image.
                </p>
              </blockquote>
              <Table className="table table-striped table-hover">
                <thead>
                  <tr className="table-success">
                    <th scope="col">Rice Leaf Diseases</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-success">
                    <td>Brown Spot</td>
                  </tr>
                  <tr className="table-success">
                    <td>Narrow Spot</td>
                  </tr>
                  <tr className="table-success">
                    <td>Leaf Blast</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );

  }
}
export default About;
