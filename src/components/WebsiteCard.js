import React from "react";
import "../styling/WebsiteCard.css";

const WebsiteCard = (props) => {
    return (
        <div class="card test-color">
            <div class="card-image">
                <figure class="image is-5by3">
                    <img src={props.image} alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{props.projecttitle}</p>
                        <p class="subtitle is-6">{props.projectlink}</p>
                    </div>
                </div>

                <div class="content">
                    {props.content}
                    <div class="content-list">
                        <div>{props.technologies}</div>
                    </div>
                    <a class="button is-primary is-inverted is-outlined">
                        Visit Site
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WebsiteCard;
