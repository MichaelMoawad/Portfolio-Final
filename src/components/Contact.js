import React from "react";
import ContactUsSVG from "./SVGComponents/ContactUsSVG";
// import "../styling/Contact.css";

const Contact = () => {
    return (
        <div className="contact section" id="contact-section">
            <div class="columns">
                <div class="column">
                    <h1>Contact</h1>
                </div>
                <div class="column">
                    <div>
                        <ContactUsSVG />
                    </div>
                </div>
            </div>
            <h1>Contact</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur consequuntur cupiditate accusantium dolorem obcaecati,
                placeat magnam? Beatae ipsum possimus omnis maxime excepturi
                ipsam deserunt, aliquid praesentium ducimus, tenetur,
                consequuntur repudiandae.
            </p>
            <button class="button is-medium is-fullwidth test-color">
                Medium
            </button>
        </div>
    );
};

export default Contact;
