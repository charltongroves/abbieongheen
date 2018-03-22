import React, { Component } from "react";
import "../../css/home.css";
import illustrations from "../stores/IllustrationInfo";
import _ from "underscore";
import { Link } from "react-router-dom";
import AnimatedWrapper from "../components/AnimatedWrapper";

class illustration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      illustrationActive: props.match.params.illustrationName ? true : false,
      illustrationActiveName: props.match.params.illustrationName,
    };
    this.props = props;
  }
  render() {
    const illustrationInfo = _.findWhere(illustrations, {
      key: this.state.illustrationActiveName,
    });
    return (
      <AnimatedWrapper>
        <div className="illustrationActive">
          <Link to={"/illustration"}>
            <div className="back-arrow-container">
              <i className="back-arrow material-icons">arrow_back</i>
              <span className="back-arrow-text"> Back </span>
            </div>
          </Link>
          <div className="titleText">{illustrationInfo.label}</div>
          <div className="descText">{illustrationInfo.description}</div>
          <img className="illustrationSetImg" src={illustrationInfo.image} />
          {_.map(illustrationInfo.imageSet, set => (
            <div className="illustrationSet">
              <img className="illustrationSetImg" src={set.image} />
              <div className="descText">{set.desc}</div>
            </div>
          ))}
        </div>
      </AnimatedWrapper>
    );
  }
}

export default illustration;
