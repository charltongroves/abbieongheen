import React, { Component } from "react";
import "../../css/home.css";
import illustrations from "../stores/IllustrationInfo";
import _ from "underscore";

class Home extends Component {
  render() {
    return (
      <div className="illustrationContainer">
        {_.map(illustrations, data => {
          return (
            <div key={data.name} className="illustrationImageWrapper">
              <img className="illustrationImage" src={data.image} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
