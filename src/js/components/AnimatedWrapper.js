import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class AnimatedWrapper extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={"pageTransistion"}
      >
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }
}
export default AnimatedWrapper;
