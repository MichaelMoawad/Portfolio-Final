import React from "react";
import "../styling/Navbar.css";

const Navbar = () => {
    return (
        <div className="nav-header">
            <nav>
                <div className="logo">
                    <h4>Michael Moawad</h4>
                </div>
                <div className="navlinks-list">
                    <ul className="navlinks">
                        <li className="link li-one">
                            <a href="#about-section">About</a>
                        </li>
                        <li className="link li-two">
                            <a href="#experience-section">Experience</a>
                        </li>
                        <li className="link li-three">
                            <a href="#projects-section">Projects</a>
                        </li>
                        <li className="link li-four">
                            <a href="#contact-section">Contact</a>
                        </li>
                    </ul>
                    <div className="resume">
                        <a href="#">Resume</a>
                    </div>
                </div>
                {/* <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div> */}
            </nav>
        </div>
    );
};

export default Navbar;
