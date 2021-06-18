import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class Contact extends React.Component {
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
          border="success"
          bg="transparent"
          text="dark"
          className="text-center"
          style={{
            width: "auto",
            borderRadius: "2%",
            borderWidth: "3px",
          }}
        >
          <Card.Header>Contact</Card.Header>
          <Card.Body>
            <h6>Shravya</h6>
            <Card.Text>
              <a href="https://www.google.com/intl/en-GB/gmail/about/#">
                geediguntashravya@gmail.com
              </a>
            </Card.Text>
            <h6>Himana</h6>
            <Card.Text>
              <a href="https://www.google.com/intl/en-GB/gmail/about/#">
                bolluhimana@gmail.com
              </a>
            </Card.Text>
            <h6>Sireesha</h6>
            <Card.Text>
              <a href="https://www.google.com/intl/en-GB/gmail/about/#">
                shirishach26@gmail.com
              </a>
            </Card.Text>
            <h6>Shravya_V</h6>
            <Card.Text>
              <a href="https://www.google.com/intl/en-GB/gmail/about/#">
                vsry0897@gmail.com
              </a>
            </Card.Text>
            <h6>Bindu</h6>
            <Card.Text>
              <a href="https://www.google.com/intl/en-GB/gmail/about/#">
                himabindureddy.gotike@gmail.com
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Contact;
