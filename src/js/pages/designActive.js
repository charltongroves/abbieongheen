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
    const designInfo = _.findWhere(designs, {
      key: this.state.designActiveName,
    });
    return (
      <div className="designActive">
        <Link to={"/design"}>
          <div className="back-arrow-container">
            <i className="back-arrow material-icons">arrow_back</i>
            <span className="back-arrow-text"> Back </span>
          </div>
        </Link>
        <div className="titleText">{designInfo.label}</div>
        <div className="descText">{designInfo.description}</div>
        {_.map(designInfo.explanation, paragraph => (
          <div className="descText">{paragraph}</div>
        ))}
        {_.map(designInfo.imageSet, set => (
          <div className="designSet">
            <img className="designSetImg" src={set.image} />
            <div className="descText">{set.desc}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Design;
