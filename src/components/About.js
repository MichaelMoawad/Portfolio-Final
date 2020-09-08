import React from "react";
import MichaelLinkedin from "../Portfolio Pics/Michael-LinkedIn.jpg";
import "../styling/About.css";

const About = () => {
    return (
        <div className="about section" id="about-section">
            <h1>About Me...</h1>
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                    <div class="tile is-parent">
                        <article class="tile is-child notification test-color">
                            <h3 class="title">Hey!</h3>
                            <p class="subtitle">
                                I'm Michael, a self taught Software Developer
                                with a passion for responsive design and
                                mobile-first approaches looking to kick-start my
                                professional career in web development.
                            </p>
                            <div class="content">{/* <!-- Content --> */}</div>
                        </article>
                    </div>
                    <div class="tile">
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification test-color">
                                <h3 class="title">Where I'm from</h3>
                                <p class="subtitle">
                                    Surbiton, London, The United Kingdom
                                </p>
                            </article>
                            <article class="tile is-child notification test-color">
                                <h3 class="title">Where I Studied</h3>
                                <p class="subtitle">
                                    I studied Mechanical Engineering
                                    Specialising in Sound and Vibration at
                                    <a href="https://www.southampton.ac.uk/">
                                        {" "}
                                        The University of Southampton
                                    </a>
                                </p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification test-color">
                                {/* <p class="title">Middle tile</p> */}
                                {/* <p class="subtitle">With an image</p> */}
                                <figure class="image is-200x">
                                    <img
                                        src={MichaelLinkedin}
                                        alt="profile-picture"
                                    />
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification test-color">
                            <h3 class="title">How I got here</h3>
                            <p class="subtitle">
                                As part of my final year Project during my
                                degree, I was tasked with creating a Graphical
                                User Interface to visually represent Vibrational
                                Data acquired through geo-phones using both
                                Matlab and Python. Following this, I have
                                extended my skill set to now becoming competent
                                in HTML, CSS and Vanilla JavaScript.
                            </p>
                            <div class="content">{/* <!-- Content --> */}</div>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification test-color">
                        <div class="content">
                            <h3 class="title">What I'm up to</h3>
                            <p class="subtitle">
                                I have been a Free-lance website developer
                                throughout the past year building WordPress
                                websites for clients all while developing my
                                knowledge of Front End Scripting languages and
                                frameworks.
                            </p>
                            <p class="subtitle">
                                I have now started developing web applications
                                using React frameworks by designing and
                                implementing highly-responsive UI components
                                while using version control systems such as Git
                                to update and re-deploy live sites in a safe and
                                appropriate manner.
                            </p>
                            <div>
                                <div class="columns">
                                    <div class="column">
                                        <h5 class="title-list">Languages</h5>
                                        <ul className="languages">
                                            <li>JavaScript (ES6)</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>PHP</li>
                                            <li>Python</li>
                                            <li>Matlab</li>
                                        </ul>
                                    </div>
                                    <div class="column">
                                        <h5 class="title-list">Frameworks</h5>
                                        <ul className="languages">
                                            <li>React</li>
                                            <li>Bulma</li>
                                            <li>Semantic UI</li>
                                            <li>CSS Grid</li>
                                            <li>CSS Flexbox</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="content">{/* <!-- Content --> */}</div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default About;
