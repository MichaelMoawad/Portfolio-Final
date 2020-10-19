import React from "react";
import "../styling/WebsiteCard.css";

const WebsiteCard = (props) => {
    return (
        <div class="card test-color">
            <div class="card-image">
                <figure class="image is-5by3">
                    <a href={props.projectlink} target="_blank">
                        <img src={props.image} alt="Placeholder image" />
                    </a>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{props.projecttitle}</p>
                        {/* <p class="subtitle is-6">{props.projectlink}</p> */}
                    </div>
                </div>

                <div class="content">
                    {props.content}
                    <div class="content-list">
                        <div>{props.technologies}</div>
                    </div>
                    <a
                        href={props.projectlink}
                        target="_blank"
                        class="webcard-button is-primary is-inverted is-outlined"
                    >
                        {props.buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WebsiteCard;
