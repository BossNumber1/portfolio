import React from "react";

function Info() {
    return (
        <div id="info">
            <div id="skills">
                <div class="title">Навыки</div>
                <div id="lists">
                    <div id="leftList">
                        <ul>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>NextJS</li>
                        </ul>
                    </div>
                    <div id="rightList">
                        <div>
                            <div class="circleRating"></div>
                            <div class="circleRating"></div>
                            <div class="circleRating"></div>
                            <div class="circleRating"></div>
                        </div>
                        <div>
                            <div class="circleRating"></div>
                            <div class="circleRating"></div>
                            <div class="circleRating"></div>
                            <div class="circleRating"></div>
                        </div>
                        <div>
                            <div class="circleRating"></div>
                            <div class="circleRating"></div>
                            <div class="circleRating"></div>
                            <div class="circleRating"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="experience">
                <div class="title">Опыт</div>
                <div>
                    <ul>
                        <li>JavaScript - 3 года</li>
                        <li>ReactJS - 2,5 года</li>
                        <li>NextJS - 2 года</li>
                    </ul>
                </div>
            </div>
            <div id="whereDidYouRecruit">
                <div class="title">Где получал</div>
                <div>
                    <ul>
                        <li>на фрилансе</li>
                        <li>на пет-проектах</li>
                        <li>в компаниях, неофициально</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Info;
