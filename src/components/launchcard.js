import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Countdown from "react-countdown";

class LaunchCard extends React.Component {
  render(props) {
    console.log(this.props.name);
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Launch Name : {this.props.name}</CardTitle>
            <CardSubtitle>Rocket Name : {this.props.rocketname}</CardSubtitle>
            <CardText>
              Launch Window : {this.props.startwindow} (
              <Countdown date={new Date(this.props.startwindow)}></Countdown>)
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LaunchCard;
