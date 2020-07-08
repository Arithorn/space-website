import React from "react";

class Footer extends React.Component {
  render() {
    const footerStyle = {
      position: "fixed",
      bottom: 0,
      width: "100%",
      color: "#000000",
    };

    return (
      <footer className="footer" style={footerStyle}>
        <div className="container bg-dark">
          <span className="text-muted ">Created by Peet Gouws ©2020</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
