import React from "react";
import "../styling/Header.css";

function Header() {
    return (
        <div className="ui container">
            <div class="header" data-enable-grammarly="false">
                <img
                    data-no-retina="true"
                    src="https://media.cakeresume.com/image/upload/s---FqRvxsJ--/c_fill,g_face,h_300,w_300/v1593709814/bdl7mtvkqpjvfefkcjnu.jpg"
                    alt="Bdl7mtvkqpjvfefkcjnu"
                    data-uploader-id="23"
                    data-state="empty"
                />
                <h1>
                    <b>Michael Moawad</b>
                </h1>
                <div class="edit"></div>
                <div class="row intro">
                    <div
                        class="col-xs-12 col-sm-10 col-sm-offset-1"
                        data-enable-grammarly="false"
                    >
                        <h3>
                            Front End Software
                            Engineer&nbsp;&nbsp;•&nbsp;&nbsp;London,
                            GB&nbsp;&nbsp;•&nbsp;&nbsp;
                            <a
                                href="mailto:michaelmoawad1997@gmail.com"
                                data-enable-grammarly="false"
                            >
                                michaelmoawad1997@gmail.com
                            </a>
                        </h3>
                        <p>
                            Following my Mechanical Engineering degree from the
                            University of Southampton, I have developed a keen
                            interest in Software Development. As part of my
                            final year Project during my degree, I was tasked
                            with creating a Graphical User Interface to visually
                            represent Vibrational Data acquired through
                            geo-phones using both Matlab and Python. Following
                            this, I have extended my skill set to now becoming
                            competent in HTML, CSS and Vanilla JavaScript with a
                            focus on React’s framework. I have been a Free-lance
                            website developer throughout the past two years
                            building WordPress websites for clients. I have now
                            started developing web applications using React
                            frameworks by designing and implementing
                            highly-responsive UI components while using version
                            control systems such as Git to update and re-deploy
                            live sites in a safe and appropriate manner.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
