import React from "react";
import Resume from "../Portfolio Pics/Michael_Moawad_CV.pdf"
import { useState } from "react";
import { Link } from "react-scroll";
import "../styling/Navbar.css";
import $ from 'jquery'

const Navbar = (props) => {
    const [activity, setActivity] = useState("navlinks-list");
    const [burger, setBurger] = useState("burger");

    const navScrollTop = (href) => {
        $('html, body').animate({scrollTop: 0}, 400);
    }

    const navSlide = (href) => {
        $('html, body').animate({scrollTop: $(href).offset().top +50}, 400);
        if (activity === "navlinks-list-active") {
            setActivity("navlinks-list");
            setBurger("burger");
        } else {
            setActivity("navlinks-list-active");
            setBurger("burger-active");
        }
    };

    // const navScroll = (href) => {
    //     $('html, body').animate({scrollTop: $(href).offset().top-80}, 400);
    // }

    return (
        <div className="nav-header">
            <nav>
                <div className="logo" onClick={() => navScrollTop('#')}>
                    {/* <Link to="Home" smooth={true} duration={500}> */}
                        <a href="#">
                            <img
                                className="logo-navbar"
                                src="Michael_Moawad_ofiicial_logo.png"
                                alt="logo-noback"
                            />
                        </a>
                    {/* </Link> */}
                </div>
                <div className={activity}>
                    <ul className="navlinks">
                        <li className="link li-one" onClick={() => navSlide('#about-section')}>
                            <a href="#about-section">About</a>
                        </li>
                        <li className="link li-two" onClick={() => navSlide('#experience-section')}>
                            <a href="#experience-section">Experience</a>
                        </li>
                        <li className="link li-three" onClick={() => navSlide('#projects-section')}>
                            <a href="#projects-section">Projects</a>
                        </li>
                        <li className="link li-four" onClick={() => navSlide('#contact-section')}>
                            <a href="#contact-section">Contact</a>
                        </li>
                        <li className="line-between">–––– </li>
                    </ul>
                    <div className="resume">
                        <a
                            // href="https://www.cakeresume.com/michael-moawad"
                            href={Resume}
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
