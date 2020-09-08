import React from "react";
// import BibleReaderSS from "../Portfolio Pics/Bible-Reader.png";
// import BudgetAppSS from "../Portfolio Pics/Budget-App.png";
// import RollTheDiceSS from "../Portfolio Pics/Roll-The-Dice-App.png";
// import Header from "./Header";
// import Thumbnail from "./Thumbnail";
import Navbar from "./Navbar";
import "../styling/App.css";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Landing from "./Landing";
import Contact from "./Contact";
import Footer from "./Footer";
import SocialLinks from "./SocialLinks";
import SocialLinksSVG from "./SVGComponents/SocialLinksSVG";

function App() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="App">
                    <Landing />
                    <About />
                    <Experience />
                    <Projects id="#projects-section" />
                    <Contact />
                </div>
            </div>
            {/* <button class="homepage-button is-primary is-outlined">
                Homepage
            </button> */}
            <SocialLinksSVG />
            <Footer />
        </div>
    );
}

export default App;
