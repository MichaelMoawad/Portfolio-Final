import React from "react";
import WebsiteCard from "./WebsiteCard";
import LivingandPowerfulSS from "../Portfolio Pics/Living-and-Powerful.png";
import StMarksSS from "../Portfolio Pics/St-Marks.png";
import SurreyVeinsSS from "../Portfolio Pics/Surrey-Veins.png";
import ScrumSVG from "./SVGComponents/ScrumSVG";

// import "../styling/Experience.css";

const Experience = () => {
    return (
        <div className="experience section" id="experience-section">
            <div class="columns">
                <div class="column">
                    <h1>Experience</h1>
                </div>
                <div class="column">
                    <div>
                        <ScrumSVG />
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <WebsiteCard
                        image={LivingandPowerfulSS}
                        projecttitle="Living and Powerful"
                        projectlink="Currently Not Available"
                        content="An Ecommerce website that ships NKJV bible themed illustration cards and accessories suitable for all ages."
                        technologies={
                            <div>
                                <h4>Technologies:</h4>
                                <ul>
                                    <li>Magento 2</li>
                                    <li>Porto Theme</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>SSH and SFTP</li>
                                </ul>
                            </div>
                        }
                    />
                </div>
                <div class="column">
                    <WebsiteCard
                        image={StMarksSS}
                        projecttitle="St Marks Coptic Church"
                        projectlink="https://stmark.org.uk/"
                        content="The Official St Marks Coptic Orthodox Church Website, based in HighStreet Kensington"
                        technologies={
                            <div>
                                <h4>Technologies:</h4>
                                <ul>
                                    <li>WordPress</li>
                                    <li>Avada Theme</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        }
                    />
                </div>
                <div class="column">
                    <WebsiteCard
                        image={SurreyVeinsSS}
                        projecttitle="Surrey Veins"
                        projectlink="https://www.surreyveins.com/"
                        content="A website made for the Surrey Veins Ltd Company specialising in the treatment of Varicose Veins, based in Surrey"
                        technologies={
                            <div>
                                <h4>Technologies:</h4>
                                <ul>
                                    <li>WordPress</li>
                                    <li>Jetpack Theme</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Experience;
