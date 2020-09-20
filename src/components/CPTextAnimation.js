import React from "react";
import "../styling/CPTextAnimation.scss";

const CPTextAnimation = () => {
    return (
        <div className="cp_body">
            <div class="cp_content">
                <div class="cp_content__container">
                    <p class="cp_content__container__text">Hello</p>

                    <ul class="cp_content__container__list">
                        <li class="cp_content__container__list__item">
                            world !
                        </li>
                        <li class="cp_content__container__list__item">bob !</li>
                        <li class="cp_content__container__list__item">
                            users !
                        </li>
                        <li class="cp_content__container__list__item">
                            everybody !
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CPTextAnimation;
