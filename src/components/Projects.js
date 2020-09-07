import React from "react";
import WebsiteCard from "./WebsiteCard";
import BibleReaderSS from "../Portfolio Pics/Bible-Reader.png";
import BudgetAppSS from "../Portfolio Pics/Budget-App.png";
import RollTheDiceSS from "../Portfolio Pics/Roll-The-Dice-App.png";
import FreelancerSVG from "./SVGComponents/FreelancerSVG";

// import "../styling/Projects.css";

const Projects = () => {
    return (
        <div className="projects section" id="projects-section">
            <div class="columns">
                <div class="column">
                    <h1>PersonalProjects</h1>
                    <p>Take a look at what I do in my spare time...</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem error ullam quae ad est dignissimos culpa
                        aspernatur, velit pariatur, quos iusto enim quidem.
                        Impedit tempore natus deleniti veritatis dicta iure?
                    </p>
                </div>
                <div class="column">
                    <div>
                        <FreelancerSVG />
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <WebsiteCard
                        image={BibleReaderSS}
                        projecttitle="Bible Reader"
                        projectlink="https://biblereader.netlify.app/"
                        content="A Bible Reading Application that fetches and displays chapters from the KJV Bible designed and built using React."
                        technologies={
                            <div>
                                <h4>Technologies:</h4>
                                <ul>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Git</li>
                                </ul>
                            </div>
                        }
                    />
                </div>
                <div class="column">
                    <WebsiteCard
                        image={BudgetAppSS}
                        projecttitle="Budget App"
                        projectlink="https://budget-app-mm.netlify.app/"
                        content="A Budget Management application that calculates total income and expenses designed and built using Vanilla JavaScript
                        with no libraries."
                        technologies={
                            <div>
                                <h4>Technologies:</h4>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Git</li>
                                </ul>
                            </div>
                        }
                    />
                </div>
                <div class="column">
                    <WebsiteCard
                        image={RollTheDiceSS}
                        projecttitle="Roll the Dice"
                        projectlink="https://roll-the-dice-game.netlify.app/"
                        content="A two player Dice Rolling Game where users continually roll dice until reaching a final score developed using Vanilla JavaScript with no libraries."
                        technologies={
                            <div>
                                <h4>Technologies:</h4>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Git</li>
                                </ul>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
