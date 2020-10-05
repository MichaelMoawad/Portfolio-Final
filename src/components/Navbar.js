import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import "../styling/Navbar.css";

const Navbar = (props) => {
    const [activity, setActivity] = useState("navlinks-list");
    const [burger, setBurger] = useState("burger");

    const navSlide = () => {
        if (activity === "navlinks-list-active") {
            setActivity("navlinks-list");
            setBurger("burger");
        } else {
            setActivity("navlinks-list-active");
            setBurger("burger-active");
        }
    };

    return (
        <div className="nav-header">
            <nav>
                <div className="logo">
                    <Link to="Home" smooth={true} duration={500}>
                        <img
                            className="logo-navbar"
                            src="Michael_Moawad_ofiicial_logo_BACK.png"
                            alt="logo-noback"
                        />
                    </Link>
                </div>
                <div className={activity}>
                    <ul className="navlinks">
                        <li className="link li-one" onClick={() => navSlide()}>
                            <a href="#about-section">About</a>
                        </li>
                        <li className="link li-two" onClick={() => navSlide()}>
                            <a href="#experience-section">Experience</a>
                        </li>
                        <li
                            className="link li-three"
                            onClick={() => navSlide()}
                        >
                            <a href="#projects-section">Projects</a>
                        </li>
                        <li className="link li-four" onClick={() => navSlide()}>
                            <a href="#contact-section">Contact</a>
                        </li>
                        <li className="line-between">–––– </li>
                    </ul>
                    <div className="resume">
                        <a
                            href="https://www.cakeresume.com/michael-moawad"
                            target="_blank"
                            className="resume"
                        >
                            Resume
                        </a>
                    </div>
                </div>
                <div className={burger} onClick={() => navSlide()}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
