import React from "react";
import { Container } from "reactstrap";

import Header from "./header";
import Footer from "./footer";

class Layout extends React.Component {
  render(props) {
    return (
      //   <React.Fragment>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Container>{React.Children.only(this.props.children)}</Container>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      //   </React.Fragment>
    );
  }
}

export default Layout;
