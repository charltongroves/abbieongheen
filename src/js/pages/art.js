import React, {Component} from 'react';
import ArtStore from "../stores/ArtStore"
import ImageCarousel from '../components/ImageCarousel'
import '../../css/art.css';
class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {
      art: ArtStore.getAllArt()
    }
  }
  render() {
    const styles = {
      h1: {
        color: "#fff",
        fontWeight: 300
      },
      h2: {
        color: "#fff",
        fontWeight: 300
      },
      textCont: {
        flex: "0 0 100rem",
        textAlign: "center",
        maxWidth: "600px",
        margin: "2rem auto 0 auto",
        padding: "0 1rem",
        clear: "both"
      }
    }
    return (
      <div className="easeIn">
        <div style={styles.textCont}>
          <h1 style={styles.h1}>
            I Love to Create
          </h1>
          <h3 style={styles.h2}>
            Through experimenting in my person art projects, I’ve been able to further develop my visual communication skills. 
            I have experience with a number of different media, but predominately create illustrations in ink. 
          </h3>
          <p style={styles.h2}>
            Check out my most recent projects below
          </p>
        </div>

        <ImageCarousel photos={this.state.art}/>
      </div>
    );
  }
}

export default Art;