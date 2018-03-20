import React, { Component } from "react";
import Nav from "../components/Nav";
import { Switch, Route } from "react-router-dom";
import "../../css/main.css";
import HomePage from "./home";
import DesignPage from "./design";
import DesignActive from "./designActive";
import titeImage from "../../img/AbbieNamePurpleSite.png";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Abbie Ongheen",
    };
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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/design" component={DesignPage} />
            <Route path="/design/:designName" component={DesignActive} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Layout;
