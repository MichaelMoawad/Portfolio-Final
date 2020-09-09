import React from "react";
import DreamerSVG from "./SVGComponents/DreamerSVG";

import "../styling/Landing.css";

const Landing = () => {
    return (
        <div className="landing-section" id="home">
            <div class="columns">
                <div class="column is-1">
                    <div className="landing-text-1">
                        <img
                            className="logo-landing"
                            src="Michael_Moawad_ofiicial_logo_NOBACK.png"
                            alt="logo-noback"
                        />
                    </div>
                </div>
                <div class="column">
                    <div className="landing-text-2">
                        <h1 className="title-landing one">Michael Moawad</h1>
                        <h3 className="title-landing two">
                            Front End Software Developer and UI Designer.
                        </h3>
                    </div>
                </div>
            </div>
            <div className="landing-image">
                <DreamerSVG />
            </div>
        </div>
    );
};

export default Landing;
