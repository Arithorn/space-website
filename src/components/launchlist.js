import React from "react";

import MainContext from "../contexts/main-context";
import LaunchCard from "./launchcard";

class LaunchList extends React.Component {
  static contextType = MainContext;
  componentDidMount() {
    const data = this.context;
    data.fetchLaunches();
  }

  renderList = (list) => {
    return list.map((item) => {
      return (
        <LaunchCard
          key={item.id}
          id={item.id}
          name={item.name.split("|")[1]}
          rocketname={item.rocket.name}
          startwindow={item.windowstart}
          country={item.location.countryCode}
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
