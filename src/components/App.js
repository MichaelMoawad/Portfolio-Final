import React, { Component } from "react";
import { InView } from "react-intersection-observer";
// import BibleReaderSS from "../Portfolio Pics/Bible-Reader.png";
// import BudgetAppSS from "../Portfolio Pics/Budget-App.png";
// import RollTheDiceSS from "../Portfolio Pics/Roll-The-Dice-App.png";
// import Header from "./Header";
// import Thumbnail from "./Thumbnail";
import Navbar from "./Navbar";
import "../styling/App.css";
import About from "./About";
import AboutNew from "./AboutNew";
import Experience from "./Experience";
import Projects from "./Projects";
import Landing from "./Landing";
import Contact from "./Contact";
import Footer from "./Footer";
import SocialLinks from "./SocialLinks";
import SocialLinksSVG from "./SVGComponents/SocialLinksSVG";

// function useOnScreen(options) {
//     const ref = React.useRef();
//     const [visible, setVisible] = React.useState(false);

//     React.useEffect(() => {
//         const observer = new IntersectionObserver(([entry]) => {
//             setVisible(entry.isIntersecting);
//         }, options);

//         console.log(visible);

//         if (ref.current) {
//             observer.observe(ref.current);
//         }

//         return () => {
//             if (ref.current) {
//                 observer.unobserve(ref.current);
//             }
//         };
//     }, [ref, options]);

//     return [ref, visible];
// }

function App() {
    // const [ref, visible] = useOnScreen({ rootMargin: "-500px" });

    return (
        <div className="scroll-test">
            <Navbar />
            <div className="container">
                <Landing />
                <div className="App">
                    <About />
                    {/* <AboutNew /> */}
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

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar />
//                 <div className="container">
//                     <Landing />
//                     <div className="App">
//                         <About />
//                         <Experience />
//                         <Projects id="#projects-section" />
//                         <Contact />
//                     </div>
//                 </div>
//                 {/* <button class="homepage-button is-primary is-outlined">
//                 Homepage
//             </button> */}
//                 <SocialLinksSVG />
//                 <Footer />
//             </div>
//         );
//     }
// }

export default App;
