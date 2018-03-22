import React, { Component } from "react";
import "../../css/home.css";
import designs from "../stores/DesignInfo";
import _ from "underscore";
import { Link } from "react-router-dom";

class Design extends Component {
  render() {
    return (
      <div className="illustrationContainer">
        {_.map(designs, data => {
          return (
            <div key={data.label} className="illustrationImageWrapper">
              <Link
                key={data.key}
                to={"/design" + "/" + data.key}
                onClick={this.handleOnLinkClick}
              >
                <img className="illustrationImage" src={data.image} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Design;
