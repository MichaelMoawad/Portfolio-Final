import React from "react";
import { Link } from "react-scroll";
import "../styling/Navbar.css";

const Navbar = () => {
    return (
        <div className="nav-header">
            <nav>
                <div className="logo">
                    <Link to="home" smooth={true} duration={500}>
                        <img
                            className="logo-navbar"
                            src="Michael_Moawad_ofiicial_logo_BACK.png"
                            alt="logo-noback"
                        />
                    </Link>
                    {/* <a href="#home">
                        
                    </a> */}
                    {/* <h4 className="logo-title">Michael Moawad</h4> */}
                </div>
                <div className="navlinks-list">
                    <ul className="navlinks">
                        <li className="link li-one">
                            <a href="#about-section">About</a>
                        </li>
                        {/* <Link to="home" smooth={true} duration={500}>
                            Section 1
                        </Link> */}
                        <li className="link li-two">
                            <a href="#experience-section">Experience</a>
                        </li>
                        <li className="link li-three">
                            <a href="#projects-section">Projects</a>
                        </li>
                        <li className="link li-four">
                            <a href="#contact-section">Contact</a>
                        </li>
                        <li className="line-between">–––– </li>
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
                <div className="burger">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
