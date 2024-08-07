import React from "react";
import MichaelLinkedin from "../Portfolio Pics/Michael-LinkedIn.jpg";
import "../styling/About.css";

function useOnScreen(options) {
    const [ref, setRef] = React.useState(null);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if (ref && !visible) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [options]);

    return [setRef, visible];
}

const About = () => {
    const [setRef, visible] = useOnScreen({ rootMargin: "-400px" });

    return (
        <div className="about section" id="about-section" ref={setRef}>
            <h1
                className={
                    visible ? "el-one-left-onscrn" : "el-one-left-offscrn"
                }
            >
                About Me
            </h1>
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                    <div class="tile is-parent">
                        <article
                            className={`tile is-child notification test-color ${
                                visible
                                    ? "el-one-left-onscrn"
                                    : "el-one-left-offscrn"
                            }`}
                        >
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
                            {/* <article
                                className={`tile is-child notification test-color ${
                                    visible
                                        ? "el-two-left-onscrn"
                                        : "el-two-left-offscrn"
                                }`}
                            >
                                <h3 class="title">Where I'm from</h3>
                                <p class="subtitle">
                                    Surbiton, London, The United Kingdom.

                                    I am happy to relocate to other positions 
                                </p>
                            </article> */}
                            <article
                                className={`tile is-child notification test-color ${
                                    visible
                                        ? "el-three-left-onscrn"
                                        : "el-three-left-offscrn"
                                }`}
                            >
                                <h3 class="title">Where I Studied</h3>
                                <p class="subtitle">
                                    I achieved a 2:1 in Mechanical Engineering
                                    Specialising in Sound and Vibration at {" "}
                                    <a className="uni-link" href="https://www.southampton.ac.uk/">
                                        The University of Southampton
                                    </a>
                                </p>
                                <p>
                                    Some of my specialist modules also included:
                                </p>
                                {/* <br/> */}
                                <div className="content">
                                    <ul className="languages">
                                        <li>Engineering Design and Management</li>
                                        <li>Finite Element Analysis</li>
                                        <li>Heat Transfer and Applications</li>
                                        <li>Manufacturing and Materials</li>
                                    </ul>
                                </div>
                                
                            </article>
                        </div>
                        {/* <div class="tile is-parent">
                            <article
                                class={`tile is-child notification test-color ${
                                    visible
                                        ? "el-fade-in-onscrn"
                                        : "el-fade-in-offscrn"
                                }`}
                            >
                                <figure class="image is-200x">
                                    <img
                                        style={{borderRadius: "5px"}}
                                        src={MichaelLinkedin}
                                        alt="profile-picture"
                                    />
                                </figure>
                            </article>
                        </div> */}
                    </div>
                    <div class="tile is-parent">
                        <article
                            className={`tile is-child notification test-color ${
                                visible
                                    ? "el-four-left-onscrn"
                                    : "el-four-left-offscrn"
                            }`}
                        >
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
                    <article
                        className={`tile is-child notification test-color ${
                            visible
                                ? "el-one-right-onscrn"
                                : "el-one-right-offscrn"
                        }`}
                    >
                        <div class="content">
                            <h3 class="title">What I'm up to</h3>
                            <p class="subtitle">
                                
                                I am currently working full time with the Architectural Association as a developer, overseeing the numerous public facing and satellite sites run by the organisation.
                                My work involves fullstack development, ensuring that user experience journeys are optimised while maintaining API calls to present necessary information on the site.

                            </p>
                            <p class="subtitle">
                                My start was in developing web applications
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
