import React from "react";
import { Button } from "reactstrap";

import MainContext from "../contexts/main-context";
import LaunchCard from "./launchcard";

class LaunchList extends React.Component {
  static contextType = MainContext;
  componentDidMount() {
    const data = this.context;
    // console.log(data);
    data.fetchLaunches();
  }

  renderList = (list) => {
    // console.log(list);
    return list.map((item) => {
      return (
        <LaunchCard
          key={item.id}
          name={item.name}
          rocketname={item.rocket.name}
          startwindow={item.windowstart}
        >
          {item.name}
        </LaunchCard>
      );
    });
  };

  render() {
    return (
      <MainContext.Consumer>
        {(context) => <div>{this.renderList(context.launches)}</div>}
      </MainContext.Consumer>
    );
  }
}

export default LaunchList;
