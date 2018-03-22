import React, { Component } from "react";
import "../../css/home.css";
import illustrations from "../stores/IllustrationInfo";
import _ from "underscore";
import { Link } from "react-router-dom";
import AnimatedWrapper from "../components/AnimatedWrapper";

class Home extends Component {
  render() {
    return (
      <AnimatedWrapper>
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
      </AnimatedWrapper>
    );
  }
}

export default Home;
