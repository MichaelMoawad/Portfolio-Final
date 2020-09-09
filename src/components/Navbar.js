import React from "react";
import "../styling/Navbar.css";

const Navbar = () => {
    return (
        <div className="nav-header">
            <nav>
                <div className="logo">
                    <a href="#home">
                        <img
                            className="logo-navbar"
                            src="Michael_Moawad_ofiicial_logo_BACK.png"
                            alt="logo-noback"
                        />
                    </a>
                    {/* <h4 className="logo-title">Michael Moawad</h4> */}
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
                        <li>–––– </li>
                    </ul>
                    <div className="resume">
                        {/* <a class="webcard-button is-primary is-inverted is-outlined">
                            Visit Site
                        </a> */}
                        <a
                            href="https://www.cakeresume.com/michael-moawad"
                            target="_blank"
                            className="resume"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
