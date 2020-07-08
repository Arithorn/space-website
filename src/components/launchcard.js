import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Media,
} from "reactstrap";
import Countdown from "react-countdown";

class LaunchCard extends React.Component {
  render(props) {
    console.log(this.props.name);
    return (
      <div>
        <Card>
          <div className="row no-gutters">
            <div className="col-auto">
              <Media left middle>
                <Media
                  object
                  left
                  middle
                  src="https://www.countryflags.io/za/shiny/64.png"
                  alt=""
                />
              </Media>
            </div>
            <div className="col">
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
              </CardBody>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default LaunchCard;
