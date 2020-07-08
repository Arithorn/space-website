import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

class MainMenu extends React.Component {
  render() {
    return (
      <Container className="fluid">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand>RLS</NavbarBrand>
          {/* <NavbarToggler onClick={toggle}/> */}
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/launchlist">
                Upcoming Launches
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/">
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

export default MainMenu;
