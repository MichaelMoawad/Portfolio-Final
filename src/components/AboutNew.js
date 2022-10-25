import React from "react";
import MichaelLinkedin from "../Portfolio Pics/Michael-LinkedIn.jpg";
import "../styling/AboutNew.css";
import $ from "jquery";

function useOnScreen(options) {
    const [ref, setRef] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    const [cardOn, setCardOn] = React.useState(false)

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

const AboutNew = () => {
    const [setRef, visible] = useOnScreen({ rootmargin: "-400px" });

    const toggleCardText = () => {
        $(".about-card-covertext").addClass("hidden")
        $(".about-card-info").removeClass("hidden")
        console.log("entered")
    }

    return (

        //OnMouseEnter() toggle class so that max height is removed off of specific card

        // create div with just title and another div with title and text. display title but when onMousehover, display: none on title and display:block on title and text
        <div>
            <h1
                className={
                    "el-one-left-onscrn"
                }
            >
                About Me
            </h1>
            <div className="about-container">
                <div className="about-card-container">
                    <div className="aboutnew-hey about-card">
                        <h2 className="about-card-covertext" >Hey!</h2>
                        <div className="about-card-info hidden">
                        <h2 className="about-card-infotitle">Hey!</h2><p className="about-card-infotext">I'm Michael, a self taught Software Developer with a passion for responsive design and mobile-first approaches looking to kick-start my professional career in web development.</p>
                        </div>
                    </div>
                    <div className="aboutnew-where about-card"><h2 className="about-card-covertext">Where I've Been</h2></div>
                    <div className="aboutnew-how about-card"><h2 className="about-card-covertext">How I got here</h2></div>
                    <div className="aboutnew-what about-card"><h2 className="about-card-covertext">What I'm up to</h2></div>
                    <div className="aboutnew-skills about-card"><h2 className="about-card-covertext">Current Stack</h2></div>
                </div>
            </div>
        </div>
    );
};

export default AboutNew;