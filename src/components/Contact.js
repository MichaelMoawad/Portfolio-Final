import React from "react";
import ContactUsSVG from "./SVGComponents/ContactUsSVG";
import "../styling/Contact.css";

const Contact = () => {
    return (
        <div className="contact section" id="contact-section">
            {/* <div class="columns">
                <div class="column">
                    <h1>Contact Me</h1>
                </div>
                <div class="column">
                    <div>
                        <ContactUsSVG />
                    </div>
                </div>
            </div> */}
            <div class="contact-me-title">
                <h1>Contact Me</h1>
            </div>
            <div class="contact-me-svg">
                <ContactUsSVG />
            </div>
            <a
                href="mailto:michaelmoawad1997@gmail.com"
                target="_blank"
                class="webcard-button is-primary is-inverted is-outlined"
            >
                Get in Touch
            </a>
        </div>
    );
};

export default Contact;
