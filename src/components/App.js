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
                    {/* <Header />
                <Thumbnail
                    image={BibleReaderSS}
                    name="Bible Reader"
                    description="A Bible Reading Application that fetches and displays chapters from the KJV Bible designed and built using React."
                    link="https://biblereader.netlify.app/"
                />
                <Thumbnail
                    image={BudgetAppSS}
                    name="Budget App"
                    description="A Budget Management application that calculates total income and expenses designed and built using Vanilla JavaScript
with no libraries."
                    link="https://budget-app-mm.netlify.app/"
                />
                <Thumbnail
                    image={RollTheDiceSS}
                    name="Roll The Dice App"
                    description="A two player Dice Rolling Game where users continually roll dice until reaching a  nal score developed using Vanilla JavaScript with no libraries using event handlers along with other DOM Manipulation techniques to roll two dice, generate and reset scores and terminate the game once a player has won."
                    link="https://roll-the-dice-game.netlify.app/"
                /> */}
                </div>
            </div>
        </div>
    );
}

export default App;
