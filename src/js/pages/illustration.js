import React, { Component } from "react";
import "../../css/home.css";
import illustrations from "../stores/IllustrationInfo";
import _ from "underscore";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="illustrationContainer">
        {_.map(illustrations, data => {
          return (
            <div key={data.name} className="illustrationImageWrapper">
              <Link
                key={data.key}
                to={"/illustration" + "/" + data.key}
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

export default Home;
