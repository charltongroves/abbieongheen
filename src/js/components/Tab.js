import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "underscore";
import underlineImage from "../../img/DesignLine.png";

class Tab extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  handleToggle = () =>
    this.setState({
      navOpen: !this.state.navOpen,
    });

  handleClose = () => this.setState({ navOpen: false });

  render() {
    const containerClasses = this.props.active ? "tab active" : "tab";
    return (
      <div className={containerClasses}>
        <div className="activeBall" />
        <Link to={this.props.link}>
          <div className={"tabText"}>{this.props.label}</div>
        </Link>
      </div>
    );
  }
}

export default Tab;
