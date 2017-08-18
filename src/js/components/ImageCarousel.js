import React, {Component} from 'react'
import Slider from 'react-slick'
import NextIcon from 'material-ui/svg-icons/image/navigate-next';
import BeforeIcon from 'material-ui/svg-icons/image/navigate-before';
import IconButton from 'material-ui/IconButton';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import transitions from 'material-ui/styles/transitions';
function SampleNextArrow(props) {
  const {onClick} = props
  const styles = {
    icon: {
      width: "48px",
      height: "48px",
      color: "rgba(255,255,255,1)"
    },
    button: {
      width: 96,
      height: 96,
      padding: 24
    }
  }
  return (
    <div className={"arrow arrow-next"} onClick={onClick}>
      <IconButton iconStyle={styles.icon} style={styles.button}><NextIcon/></IconButton>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {onClick} = props
  const styles = {
    icon: {
      width: "48px",
      height: "48px",
      color: "rgba(255,255,255,1)"
    },
    button: {
      width: 96,
      height: 96,
      padding: 24
    }
  }
  return (
    <div className={"arrow arrow-prev"} onClick={onClick}>
      <IconButton iconStyle={styles.icon} style={styles.button}><BeforeIcon/></IconButton>
    </div>
  );
}

export default class ImageCarousel extends Component {
  handleMouseEnter = () => {
    this.setState({zDepth: 4});
  };

  handleMouseLeave = () => {
    this.setState({zDepth: 0});
  };
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      className: "slider-cont",
    };
    const styles = {
      img: {
        maxWidth: "80%",
        maxHeight: "60vh",
        margin: "2rem auto",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px",
        borderRadius: "2px",

      },
      paper: {
        transition: transitions.easeOut(),
        margin: "1rem auto",
        maxWidth: "250px",
      },
      date: {
        color: "rgba(0,0,0,0.6)",
        padding: "0px 16px 8px 16px",
        fontSize: "0.8rem"
      },
      workCont: {
      },
      carouselCont: {
        padding: "0rem 4rem 4rem 4rem",
        margin: "0 auto",
        width: "90%",
        maxWidth: "1100px"     }
    }
    const artGallery = this
      .props
      .photos
      .map((work) => {
        return (
          <div key={work.name} style={styles.workCont}>
            <img alt={work.name} className="painting-img" style={styles.img} src={work.img}/>
            <Card
              onMouseOver={this.handleMouseEnter}
              onMouseOut={this.handleMouseLeave}
              style={{
              ...this.props.style,
              ...styles.paper
            }}>
              <CardTitle title={work.name} subtitle={work.medium}/>
              <CardText style={styles.date}>{work.date}</CardText>
            </Card>
          </div>
        )
      });
    return (
      <div style={styles.carouselCont}>
        <Slider  {...settings}>
        {artGallery}
        </Slider>
      </div>
    );
  }
}