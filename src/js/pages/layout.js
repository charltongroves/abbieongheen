import React, { Component } from "react";
import Nav from "../components/Nav";
import { Switch, Route } from "react-router-dom";
import "../../css/main.css";
import "../../css/art.css";
import "../../css/design.css";
import "../../css/contact.css";

import IllustrationPage from "./illustration";
import DesignPage from "./design";
import ContactPage from "./contact";
import DesignActive from "./designActive";
import IllustrationActive from "./illustrationActive";
import titeImage from "../../img/AbbieNamePurpleSite.png";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Abbie Ongheen",
    };
  }
  render() {
    const navIsDisabled = this.props.location.pathname.match(/^\/work\//i);
    return (
      <div className={navIsDisabled ? "layoutGrid navDisabled" : "layoutGrid"}>
        <Nav
          currentRoute={this.props.location.pathname}
          title={this.state.title}
        />
        <div className="content">
          <div className="contentWrapper">
            <Switch>
              <Route exact path="/" component={IllustrationPage} />
              <Route exact path="/work" component={DesignPage} />
              <Route path="/work/:designName" component={DesignActive} />
              <Route exact path="/contact" component={ContactPage} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
