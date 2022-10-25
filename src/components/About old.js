import React from "react";
// import "../styling/About.css";

const About = () => {
    return (
        <div className="about section" id="about-section">
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur consequuntur cupiditate accusantium dolorem obcaecati,
                placeat magnam? Beatae ipsum possimus omnis maxime excepturi
                ipsam deserunt, aliquid praesentium ducimus, tenetur,
                consequuntur repudiandae.
            </p>
            <div class="columns">
                <div
                    class="column is-three-quarters

"
                >
                    <article class="message">
                        <div class="message-body">
                            Following my Mechanical Engineering degree from the
                            University of Southampton, I have developed a keen
                            interest in Software Development.
                        </div>
                    </article>
                    <article class="message">
                        <div class="message-body">
                            As part of my final year Project during my degree, I
                            was tasked with creating a Graphical User Interface
                            to visually represent Vibrational Data acquired
                            through geo-phones using both Matlab and Python.
                            Following this, I have extended my skill set to now
                            becoming competent in HTML, CSS and Vanilla
                            JavaScript with a focus on React’s framework.
                        </div>
                    </article>
                    <article class="message">
                        <div class="message-body">
                            I have been a Free-lance website developer
                            throughout the past year building WordPress websites
                            for clients. I have now started developing web
                            applications using React frameworks by designing and
                            implementing highly-responsive UI components while
                            using version control systems such as Git to update
                            and re-deploy live sites in a safe and appropriate
                            manner.
                        </div>
                    </article>
                </div>
                <div class="column">
                    {/* <figure class="image is-3by2">
                        <img
                            src="https://media.cakeresume.com/image/upload/s---FqRvxsJ--/c_fill,g_face,h_300,w_300/v1593709814/bdl7mtvkqpjvfefkcjnu.jpg"
                            alt="profile-pic"
                        />
                    </figure> */}
                </div>
            </div>
        </div>
    );
};

export default About;
