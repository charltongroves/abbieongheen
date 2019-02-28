import React, { Component } from "react";
import "../../css/home.css";
import designs from "../stores/DesignInfo";
import _ from "underscore";
import { Link } from "react-router-dom";
import AnimatedWrapper from "../components/AnimatedWrapper";

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
      <AnimatedWrapper>
        <div className="designActive">
          <img className="bannerImg" src={designInfo.image} />
          <Link to={"/work"}>
            <div className="back-arrow-container">
              <i className="back-arrow material-icons">arrow_back</i>
              <span className="back-arrow-text"> BACK </span>
            </div>
          </Link>
          <div className="titleText">{designInfo.label}</div>
          <div className="paragraphContainer descText">
            {designInfo.description}
          </div>
          {_.map(designInfo.explanation, paragraph => {
            const items = paragraph
              .split("\n")
              .map(line => <div className="descText"> {line}</div>);
            return <div className="paragraphContainer">{items}</div>;
          })}
          {_.map(designInfo.imageSet, set => (
            <div className="designSet">
              <img className="designSetImg" src={set.image} />
              <div className="paragraphContainer descText">{set.desc}</div>
              {set.issuu != null && (
                <iframe
                  src={set.issuu}
                  style={{
                    border: "none",
                    width: "100%",
                    height: "500px",
                  }}
                  allowFullScreen
                />
              )}
            </div>
          ))}
          <div className="paragraphContainer descText">
            {designInfo.credits}
          </div>
        </div>
      </AnimatedWrapper>
    );
  }
}

export default Design;
