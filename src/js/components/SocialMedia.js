import React, { Component } from "react";
import InstagramLogo from "../../img/Instagram.svg";
import LinkedinLogo from "../../img/LinkedIn.svg";
import BehanceLogo from "../../img/Behance.svg";

class SocialMedia extends Component {
  render() {
    return (
      <div className={"socialMediaContainer"}>
        <a href="https://au.linkedin.com/in/abbie-ongheen-742731102">
          <img className="socialMediaLinkImg" src={LinkedinLogo} />
        </a>
        <a href="https://www.instagram.com/abbieongheen1/">
          <img className="socialMediaLinkImg" src={InstagramLogo} />
        </a>
        <a href="https://www.behance.net/ongheen6f42">
          <img className="socialMediaLinkImg" src={BehanceLogo} />
        </a>
      </div>
    );
  }
}

export default SocialMedia;
