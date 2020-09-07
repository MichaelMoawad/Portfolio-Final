import React from "react";
// import "../styling/Thumbnail.css";

function Thumbnail(props) {
    return (
        <div class="ui container thumbnail">
            <div class="row" data-original-title="" title="">
                <div
                    class="col-sm-12 item item-00"
                    data-enable-grammarly="false"
                >
                    <figure class="figure-text-center figure-with-mask">
                        <h1>{props.name}</h1>
                        <a href={props.link}>
                            <img
                                data-no-retina="true"
                                src={props.image}
                                alt="Project-Image"
                                data-uploader-id="21"
                                data-state="empty"
                            />
                        </a>
                        <figcaption>
                            {/* <h1>{props.name}</h1> */}
                            <div class="p-container">
                                <p>{props.description}</p>
                            </div>
                            <a
                                class="btn btn-success"
                                href={props.link}
                                data-enable-grammarly="false"
                            >
                                VISIT SITE
                            </a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default Thumbnail;
