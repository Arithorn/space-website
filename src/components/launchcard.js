import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import Countdown from "react-countdown";
import getCode from "country-iso-3-to-2";

import "../styles/launchcard.css";

class LaunchCard extends React.Component {
  countryImage(code) {
    return `https://www.countryflags.io/${getCode(code)}/shiny/64.png`;
  }
  render() {
    return (
      <div>
        <Card>
          <Row xs="2" fluid="sm">
            <Col xs="1">
              <div className="container image_container">
                <img src={this.countryImage(this.props.country)} alt="flag" />
              </div>
            </Col>
            <Col>
              <CardBody>
                <CardTitle>Launch Name : {this.props.name}</CardTitle>
                <CardSubtitle>
                  Rocket Name : {this.props.rocketname}
                </CardSubtitle>
                <CardText>
                  Launch Window : {this.props.startwindow} (
                  <Countdown
                    date={new Date(this.props.startwindow)}
                  ></Countdown>
                  )
                </CardText>
                <Button
                  tag={Link}
                  to={`/launchlist/${this.props.id}`}
                  outline
                  color="primary"
                >
                  Detail
                </Button>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default LaunchCard;
