import React, { Component } from "react";
import "../../css/home.css";
import designs from "../stores/DesignInfo";
import _ from "underscore";
import { Link } from "react-router-dom";
import AnimatedWrapper from "../components/AnimatedWrapper";

class Design extends Component {
  render() {
    return (
      <AnimatedWrapper>
        <div className="illustrationContainer">
          {_.map(designs, data => {
            return (
              <div key={data.label} className="illustrationImageWrapper">
                <Link
                  key={data.key}
                  to={"/work" + "/" + data.key}
                  onClick={this.handleOnLinkClick}
                >
                  <img className="illustrationImage" src={data.image} />
                </Link>
              </div>
            );
          })}
        </div>
      </AnimatedWrapper>
    );
  }
}

export default Design;
