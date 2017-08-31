import React from 'react';
import Third from '../../img/abbieback-01.png';
import Second from '../../img/abbiemiddle-01.png';
import First from '../../img/abbiefront-01.png';
import About from './About.js'
export default() =>
    <div className="parallax">
        <div className="easeIn parallax__layer parallax__layer__1">
            <img alt="" src={Third}/>
        </div>
        <div className="easeIn parallax__layer parallax__layer__2">
            <div className="hero-text-cont">
                <h1>hello</h1>
                <h2>I'm Abbie.</h2>
                <h3>A graphic designer from Brisbane, Australia</h3>
                <h4>see my work ></h4>
                </div>
            <img alt="" src={Second}/>
        </div>
        <div className="easeIn parallax__layer parallax__layer__3">
            <img alt="" src={First}/>
        </div>

        <div className="parallax__cover">
            <About />
        </div>
    </div>