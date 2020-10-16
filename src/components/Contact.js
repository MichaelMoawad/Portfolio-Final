import React from "react";
import ContactUsSVG from "./SVGComponents/ContactUsSVG";
import "../styling/Contact.css";

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

const Contact = () => {
    const [setRef, visible] = useOnScreen({ rootmargin: "-500px" });

    return (
        <div className="contact section" id="contact-section" ref={setRef}>
            <div class="contact-me-title">
                <h1
                    class={
                        visible ? "el-one-left-onscrn" : "el-one-left-offscrn"
                    }
                >
                    Get in touch
                </h1>
                <p
                    class={
                        visible ? "el-two-left-onscrn" : "el-two-left-offscrn"
                    }
                >
                    I am currently searching for new employment oppurtunities
                </p>
            </div>
            <div
                class={`contact-me-svg ${visible ? "el-one-right-onscrn" : "el-one-right-offscrn"
                    }`}
            >
                <ContactUsSVG />
            </div>
        </div>
    );
};

export default Contact;
