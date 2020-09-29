import React from "react";
import WebsiteCard from "./WebsiteCard";
import BibleReaderSS from "../Portfolio Pics/Bible-Reader.png";
import BudgetAppSS from "../Portfolio Pics/Budget-App.png";
import RollTheDiceSS from "../Portfolio Pics/Roll-The-Dice-App.png";
import FreelancerSVG from "./SVGComponents/FreelancerSVG";

import "../styling/Projects.css";

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

const Projects = () => {
    const [setRef, visible] = useOnScreen({ rootMargin: "-500px" });

    return (
        <div className="projects section" id="projects-section" ref={setRef}>
            <div class="columns">
                <div class="column">
                    <div
                        class={
                            visible
                                ? "el-one-left-onscrn"
                                : "el-one-left-offscrn"
                        }
                    >
                        <FreelancerSVG />
                    </div>
                </div>
                <div class="column two-thirds">
                    <h1
                        class={
                            visible
                                ? "el-one-right-onscrn"
                                : "el-one-right-offscrn"
                        }
                    >
                        Personal Projects
                    </h1>
                    <p
                        class={
                            visible
                                ? "el-one-right-onscrn"
                                : "el-one-right-offscrn"
                        }
                    >
                        Within my personal projects, I have experience in
                        passing data between components, prototypal inheritance,
                        API calls, asynchronous event handling, state management
                        and much more.
                    </p>
                    <br />
                    <p
                        class={
                            visible
                                ? "el-two-right-onscrn"
                                : "el-two-right-offscrn"
                        }
                    >
                        I have built my knowledge on security standards
                        associated with API calls and other web based features,
                        dealing with CORS errors and understanding the role and
                        importance of proxy servers.
                    </p>
                    <br />
                    <p
                        class={
                            visible
                                ? "el-three-right-onscrn"
                                : "el-three-right-offscrn"
                        }
                    >
                        Take a look at my most recent "Bible Reader" Web
                        application, a web app that makes use of AJAX for data
                        fetching from an API and React Hooks for state
                        management and more.
                    </p>
                </div>
            </div>
            <div class="columns">
                <div
                    class={`column ${
                        visible ? "el-one-left-onscrn" : "el-one-left-offscrn"
                    }`}
                >
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
                <div
                    class={`column ${
                        visible ? "el-fade-in-onscrn" : "el-fade-in-offscrn"
                    }`}
                >
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
                <div
                    class={`column ${
                        visible ? "el-one-right-onscrn" : "el-one-right-offscrn"
                    }`}
                >
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
