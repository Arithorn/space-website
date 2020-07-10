import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Row, Col } from "reactstrap";

import MainContext from "../contexts/main-context";

class LaunchDetail extends React.Component {
  renderDetail(launches, id, fetchdata) {
    if (launches.length > 0) {
      var result = launches.filter((l) => parseInt(l.id) === parseInt(id))[0];

      return (
        <Container>
          <div>Detail for Launch : {result.name}</div>
          <Row>
            <Col>
              <ul>
                <li>Rocket Name : </li>
                <li>Launch Service Provider : </li>
                <li>Launch Location : </li>
                <li>Pad</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>{result.rocket.name}</li>
                <li>{result.lsp.name}</li>
                <li>{result.location.name}</li>
                <li>{result.location.pads.map((pad) => pad.name)}</li>
              </ul>
            </Col>
          </Row>
          <div>
            <Button tag={Link} to="/launchlist" color="primary">
              Back
            </Button>
          </div>
        </Container>
      );
    } else {
      fetchdata();
      return <div>Load Data</div>;
    }
  }
  render() {
    console.log(this.props);
    return (
      <MainContext.Consumer>
        {(context) => (
          <div>
            {this.renderDetail(
              context.launches,
              this.props.match.params.id,
              context.fetchLaunches
            )}
          </div>
        )}
      </MainContext.Consumer>
    );
  }
}
export default LaunchDetail;
