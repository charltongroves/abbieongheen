import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "underscore";
import Tab from "./Tab";
import LinkedinLogo from "../../img/LinkedinLogo.png";
import InstagramLogo from "../../img/InstagramLogo.png";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      currentRoute: props.currentRoute,
    };
    this.tabs = [
      {
        index: 0,
        name: "Illustration",
        route: "illustration",
      },
      {
        index: 1,
        name: "Design",
        route: "design",
      },
      {
        index: 2,
        name: "Contact",
        route: "contact",
      },
    ];
  }
  handleToggle = () =>
    this.setState({
      navOpen: !this.state.navOpen,
    });

  handleClose = () => this.setState({ navOpen: false });

  render() {
    var currentRouteRoot = this.props.currentRoute
      ? this.props.currentRoute.split("/")[1]
      : this.props.currentRoute;
    if (currentRouteRoot === "") {
      currentRouteRoot = "illustration";
    }
    const activeTab = _.findWhere(this.tabs, {
      route: currentRouteRoot,
    }).name;
    return (
      <div className={"navContainer"}>
        {_.map(this.tabs, tab => (
          <Tab
            key={tab.name}
            label={tab.name}
            link={"/" + tab.route}
            active={activeTab === tab.name}
          />
        ))}
        <div className={"socialMediaContainer"}>
          <a href="https://au.linkedin.com/in/abbie-ongheen-742731102">
            <img className="socialMediaLinkImg" src={LinkedinLogo} />
          </a>
          <a href="https://www.instagram.com/abbieongheen1/">
            <img className="socialMediaLinkImg" src={InstagramLogo} />
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
