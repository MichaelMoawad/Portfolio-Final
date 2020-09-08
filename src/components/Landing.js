import React from "react";
import DreamerSVG from "./SVGComponents/DreamerSVG";

import "../styling/Landing.css";

const Landing = () => {
    return (
        <div className="landing-section">
            <div className="landing-text">
                {/* <h6 className="title-landing one">Welcome, my name is</h6> */}
                <h1 className="title-landing one">Michael Moawad</h1>
                <h3 className="title-landing two">
                    Front End Software Developer and UI Designer.
                </h3>
                {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio reprehenderit inventore est deleniti ducimus nisi
                    dolore omnis, accusamus nihil corporis esse, numquam
                    voluptates quae. Consequatur quam totam cumque in aperiam.
                </p> */}
            </div>
            <div className="landing-image">
                <DreamerSVG />
            </div>
        </div>
    );
};

export default Landing;
