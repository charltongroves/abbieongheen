import React, { Component } from "react";
import "../../css/home.css";
import contactInfo from "../stores/ContactInfo";
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
    return (
      <AnimatedWrapper>
        <div className="Contact">
          {_.map(contactInfo.about, paragraph => (
            <div className="descText">{paragraph}</div>
          ))}
        </div>
      </AnimatedWrapper>
    );
  }
}

export default illustration;
