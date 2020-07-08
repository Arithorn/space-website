import React from "react";

import { Container } from "reactstrap";

import MainMenu from "./mainmenu";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container className="fluid">
          <title>Rocket Launch List</title>
        </Container>
        <MainMenu />
      </React.Fragment>
    );
  }
}

export default Header;
