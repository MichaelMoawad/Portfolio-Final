import React from "react";
import WebsiteCard from "./WebsiteCard";
import LivingandPowerfulSS from "../Portfolio Pics/Living-and-Powerful.png";
import StMarksSS from "../Portfolio Pics/St-Marks.png";
import SurreyVeinsSS from "../Portfolio Pics/Surrey-Veins.png";
// import "../styling/Experience.css";

const Experience = () => {
    return (
        <div className="experience section" id="experience-section">
            <h1>Experience</h1>
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
                        image={LivingandPowerfulSS}
                        projecttitle="Living and Powerful"
                        projectlink="Currently Not Available"
                        content="An Ecommerce website that ships NKJV bible themed illustration cards and accessories suitable for all ages."
                    />
                </div>
                <div class="column">
                    <WebsiteCard
                        image={StMarksSS}
                        projecttitle="St Marks Coptic Church"
                        projectlink="https://stmark.org.uk/"
                        content="Worked closely with other designers while maintaining constant communication with employers to develop and deploy new
                        webpages within narrow time-frames set in place due to the COVID-19 Pandemic."
                    />
                </div>
                <div class="column">
                    <WebsiteCard
                        image={SurreyVeinsSS}
                        projecttitle="Surrey Veins"
                        projectlink="https://www.surreyveins.com/"
                        content="Worked closely with other designers while maintaining constant communication with employers to develop and deploy new
                        webpages within narrow time-frames set in place due to the COVID-19 Pandemic."
                    />
                </div>
            </div>
        </div>
    );
};

export default Experience;
