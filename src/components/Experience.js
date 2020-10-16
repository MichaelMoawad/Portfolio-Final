import React from "react";
import WebsiteCard from "./WebsiteCard";
import LivingandPowerfulSS from "../Portfolio Pics/Living-and-Powerful.png";
import StMarksSS from "../Portfolio Pics/St-Marks.png";
import SurreyVeinsSS from "../Portfolio Pics/Surrey-Veins.png";
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
    const [setRef, visible] = useOnScreen({ rootMargin: "-500px" });

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
                {/* <div
                    class={`column ${
                        visible ? "el-one-left-onscrn" : "el-one-left-offscrn"
                    }`}
                >
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
                                    <li>PHP</li>
                                </ul>
                            </div>
                        }
                    />
                </div> */}

                <div
                    class={`column ${visible ? "el-fade-in-onscrn" : "el-fade-in-offscrn"
                        }`}
                >
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
                <div
                    class={`column ${visible ? "el-one-right-onscrn" : "el-one-right-offscrn"
                        }`}
                >
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
