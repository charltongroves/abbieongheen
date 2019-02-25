import React, { Component } from "react";
import SocialMedia from "./SocialMedia";

class Footer extends Component {
  render() {
    return (
      <div className={"footerContainer"}>
        <div className={"footerWrapper"}>
          <SocialMedia />
        </div>
      </div>
    );
  }
}

export default Footer;
