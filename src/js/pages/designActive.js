import React, { Component } from "react";
import "../../css/home.css";
import designs from "../stores/DesignInfo";
import _ from "underscore";
import { Link } from "react-router-dom";

class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designActive: props.match.params.designName ? true : false,
      designActiveName: props.match.params.designName,
    };
    this.props = props;
  }
  render() {
    console.log(" WE'VE HIT THE THING", this.props.match.params.designName);
    const designInfo = _.findWhere(designs, {
      key: this.state.designActiveName,
    });
    console.log("Thing", designInfo);
    return (
      <div className="illustrationContainer">
        {designInfo.label}
        <div key={designInfo.label} className="illustrationImageWrapper">
          <img className="illustrationImage" src={designInfo.image} />
        </div>
      </div>
    );
  }
}

export default Design;
