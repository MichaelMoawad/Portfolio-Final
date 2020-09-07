import React from "react";
import WebsiteCard from "./WebsiteCard";
import BibleReaderSS from "../Portfolio Pics/Bible-Reader.png";
import BudgetAppSS from "../Portfolio Pics/Budget-App.png";
import RollTheDiceSS from "../Portfolio Pics/Roll-The-Dice-App.png";

// import "../styling/Projects.css";

const Projects = () => {
    return (
        <div className="projects section" id="projects-section">
            <h1>Personal Projects</h1>
            {/* <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur consequuntur cupiditate accusantium dolorem obcaecati,
                placeat magnam? Beatae ipsum possimus omnis maxime excepturi
                ipsam deserunt, aliquid praesentium ducimus, tenetur,
                consequuntur repudiandae.
            </p> */}
            <div class="columns">
                <div class="column">
                    <WebsiteCard
                        image={BibleReaderSS}
                        projecttitle="Bible Reader"
                        projectlink="https://biblereader.netlify.app/"
                    />
                </div>
                <div class="column">
                    <WebsiteCard
                        image={BudgetAppSS}
                        projecttitle="Budget App"
                        projectlink="https://budget-app-mm.netlify.app/"
                    />
                </div>
                <div class="column">
                    <WebsiteCard
                        image={RollTheDiceSS}
                        projecttitle="Roll the Dice"
                        projectlink="https://roll-the-dice-game.netlify.app/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
