import React, { Component } from 'react';
import About from '../components/About.js'
import '../../css/home.css';
class Home extends Component {
  render() {
    const styles = {
      container : {
        width: "100vw",
        height: "100%",
        margin: "0 auto",
        textAlign: "center",
        overflowY: "hidden",
      },
      heroText: {
        fontSize: "15rem",
        color: "rgba(255,255,255,0.8)",
        fontWeight: "500"
      },
      mastHead : {
        width: "100%",
      }
    }
    return (
      <div className="easeIn" style={styles.container}>
        <About />
      </div>
    );
  }
}

export default Home;
