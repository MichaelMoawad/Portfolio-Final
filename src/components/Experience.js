import React from "react";
import WebsiteCard from "./WebsiteCard";
import ArchitecturalAssociationSS from "../Portfolio Pics/Architectural-Association.png";
import CopticLawyersSS from "../Portfolio Pics/Coptic-lawyers-worldwide.png";
import LivingandPowerfulSS from "../Portfolio Pics/slide2n-lp2.jpg";
import StMarksSS from "../Portfolio Pics/St-Marks.jpg";
import SurreyVeinsSS from "../Portfolio Pics/Surrey-Veins.jpg";
import ScrumSVG from "./SVGComponents/ScrumSVG";

// import "../styling/Experience.css";

function useOnScreen(options) {
    const [ref, setRef] = React.useState(null);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if (ref && !visible) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [options]);

    return [setRef, visible];
}

const Experience = () => {
    const [setRef, visible] = useOnScreen({ rootMargin: "-400px" });

    return (
        <div
            className="experience section"
            id="experience-section"
            ref={setRef}
        >
            <div class="columns">
                <div
                    class="column is-three-fifths
"
                >
                    <h1
                        class={
                            visible
                                ? "el-one-left-onscrn"
                                : "el-one-left-offscrn"
                        }
                    >
                        Experience
                    </h1>
                    <p
                        class={
                            visible
                                ? "el-two-left-onscrn"
                                : "el-two-left-offscrn"
                        }
                    >
                        I work with employers of different technical abilities
                        from various businesses, consistently keeping in contact
                        with them to provide new pages or update existing pages
                        within tight deadlines.
                    </p>
                    <br />
                    <p
                        class={
                            visible
                                ? "el-three-left-onscrn"
                                : "el-three-left-offscrn"
                        }
                    >
                        We adopt an Agile work methadology along with Trello
                        boards to validate any issues, qualify the correct
                        solution, size the solution, finish and deploy the
                        updated site. I have experience using version control
                        systems such as Git to safely update website elements
                        and re-deploy live sites ensuring continuous Integration
                        and delivery methods are used alongside deployment sites
                        such as Netlify.
                    </p>
                    <br />
                </div>
                <div class="column">
                    <div
                        class={
                            visible
                                ? "el-one-right-onscrn"
                                : "el-one-right-offscrn"
                        }
                    >
                        <ScrumSVG />
                    </div>
                </div>
            </div>

            <div class="columns">
                <div
                    class={`column ${
                        visible ? "el-one-left-onscrn" : "el-one-left-offscrn"
                    }`}
                >
                    <WebsiteCard
                        image={ArchitecturalAssociationSS}
                        projecttitle="Architectural Association"
                        projectlink="https://www.aaschool.ac.uk/"
                        content="The Official Website of the Architectural Association School of Architecture."
                        buttonText="Visit Site"
                        technologies={
                            <div>
                                <h4>Technologies:</h4>
                                <ul>
                                    <li>React</li>
                                    <li>PHP</li>
                                    <li>MySQL</li>
                                    <li>SSH and SFTP</li>
                                    <li>Statamic</li>
                                    <li>HTML</li>
                                    <li>CSS/SASS</li>
                                </ul>
                            </div>
                        }
                    />
                </div>

                <div
                    class={`column ${visible ? "el-one-right-onscrn" : "el-one-right-offscrn"
                        }`}
                >
                    <WebsiteCard
                        image={CopticLawyersSS}
                        projecttitle="Coptic Lawyers Wordlwide"
                        projectlink="https://www.copticlawyersworldwide.org/"
                        content="A remote organisation designed to connect lawyers from a minority group to provide tuition and
                        networking opportunities."
                        buttonText="Visit Site"
                        technologies={
                            <div>
                                <h4>Technologies:</h4>
                                <ul>
                                    <li>React</li>
                                    <li>HTML</li>
                                    <li>CSS/SASS</li>
                                </ul>
                            </div>
                        }
                    />
                </div>
            </div>
            <div class="columns">
                <div
                    class={`column ${
                        visible ? "el-one-left-onscrn" : "el-one-left-offscrn"
                    }`}
                >
                    <WebsiteCard
                        image={LivingandPowerfulSS}
                        projecttitle="CUMI"
                        projectlink="https://www.livingandpowerful.com/"
                        content="An Ecommerce website that ships NKJV bible themed illustration cards and accessories suitable for all ages."
                        buttonText="Visit Site"
                        technologies={
                            <div>
                                <h4>Technologies:</h4>
                                <ul>
                                    <li>Magento 2</li>
                                    <li>Linux VPS</li>
                                    <li>PHP</li>
                                    <li>MySQL</li>
                                    <li>SSH and SFTP</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        }
                    />
                </div>

                <div
                    class={`column ${visible ? "el-fade-in-onscrn" : "el-fade-in-offscrn"
                        }`}
                >
                    <WebsiteCard
                        image={StMarksSS}
                        projecttitle="St Marks Coptic Church"
                        projectlink="https://stmark.org.uk/"
                        content="The Official St Marks Coptic Orthodox Church Website, based in HighStreet Kensington"
                        buttonText="Visit Site"
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
            </div>
        </div>
    );
};

export default Experience;
