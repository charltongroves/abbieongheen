import React, { Component } from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import { Link } from "react-router-dom";
import Tab from "./Tab";
class MaterialTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: props.currentRoute,
      tabs: [
        {
          index: 0,
          name: "About",
          route: "/",
        },
        {
          index: 1,
          name: "Design",
          route: "/design",
        },
        {
          index: 2,
          name: "Art",
          route: "/art",
        },
        {
          index: 3,
          name: "Resume",
          route: "/resume.pdf",
        },
      ],
    };
  }
  getInitIndex() {
    var index = 0;
    for (let tab of this.state.tabs) {
      if (this.state.currentRoute.indexOf(tab.route) !== -1) {
        index = tab.index;
      }
    }
    return index;
  }
  render() {
    const initIndex = this.getInitIndex();
    const styles = {
      ink: {
        backgroundColor: "#FFC107",
      },
      tabs: {
        backgroundColor: "rgba(0,0,0,0)",
      },
      width: {
        width: "60vw",
        maxWidth: "40rem",
      },
    };
    return (
      <div className={this.props.className}>
        <Tabs
          initialSelectedIndex={initIndex}
          contentContainerStyle={styles.width}
          inkBarStyle={styles.ink}
          tabItemContainerStyle={styles.tabs}
        >
          <Tab
            containerElement={<Link to="/" />}
            label="About"
            data-route="/"
            onActive={this.handleActive}
          />
          <Tab
            containerElement={<Link to="/design" />}
            label="Design"
            data-route="/design"
            onActive={this.handleActive}
          />
          <Tab
            containerElement={<Link to="/art" />}
            label="Art"
            data-route="/art"
            onActive={this.handleActive}
          />
          <Tab
            containerElement={<Link to="/resume.pdf" />}
            label="Resume"
            data-route="/resume"
            onActive={this.handleActive}
          />
        </Tabs>
      </div>
    );
  }
}

export default MaterialTabs;
