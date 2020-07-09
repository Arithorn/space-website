import React from "react";
import { Media, Container, Row } from "reactstrap";

import landing from "../images/landing.jpg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="justify-content-center text-center">
            <Media
              className="justify-content-center"
              src={landing}
              alt="Logo"
            />
            <h1>Welcome to the Rocket Launch Schedule</h1>
          </Row>
        </Container>
        <Container fluid>
          <p>
            Keep up to date with all things Space related from a single site. We
            are starting off by providing a Launch schedule for worldwide rocket
            launches. We are constantly adding new Space content, so please come
            back often.
          </p>
        </Container>
      </div>
    );
  }
}

export default Home;
