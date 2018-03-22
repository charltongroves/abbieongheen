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
    if (props.location.pathname === "" || props.location.pathname === "/") {
      props.history.push("/illustration");
    }
  }
  render() {
    return (
      <div className="layoutGrid">
        <div className="title">
          <img className="titleImage" src={titeImage} alt="Abbie Ongheen" />
        </div>
        <Nav
          currentRoute={this.props.location.pathname}
          title={this.state.title}
        />
        <div className="content">
          <Switch>
            <Route exact path="/" component={IllustrationPage} />
            <Route exact path="/illustration" component={IllustrationPage} />
            <Route
              path="/illustration/:illustrationName"
              component={IllustrationActive}
            />
            <Route exact path="/design" component={DesignPage} />
            <Route path="/design/:designName" component={DesignActive} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Layout;
