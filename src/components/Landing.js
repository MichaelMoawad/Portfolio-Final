import React from "react";
import DreamerSVG from "./SVGComponents/DreamerSVG";
import CPTextAnimation from "./CPTextAnimation";

import "../styling/Landing.css";
import LandingPageSVG from "./SVGComponents/LandingPageSVG";
import $ from 'jquery'

const Landing = () => {
  
  const navScrollTop = (href) => {
    $('html, body').animate({scrollTop: $(href).offset().top +50}, 400);
  }

    return (
      <div>
        <div className="landing-section" id="home">
          <div className="landing-section-title">
            <h1 className="landing-section-michael flicker-in-1">Michael</h1>
            <h1 className="landing-section-moawad slide-in-blurred-bottom">Moawad</h1>    
            <div className="landing-section-box">
                <h2 className="landing-section-boxtext swing-in-top-fwd">Software Development</h2>
            </div>
            <div className="landing-section-btncontainer fade-in" onClick={() => navScrollTop('#about-section')}>
              <a href="#about-section">
                <button class="pushable">
                  <span class="shadow"></span>
                  <span class="edge"></span>
                  <span class="front">
                    Tell me more
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Landing;
