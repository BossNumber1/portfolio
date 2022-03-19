import React from "react";
import List from "../common/List";
import CirclesRating from "./CirclesRating";

function Info() {
    return (
        <div id="info">
            <div id="skills">
                <div class="title">Навыки</div>
                <div id="lists">
                    <div id="leftList">
                        <List
                            firstListItem="JavaScript"
                            secondListItem="ReactJS"
                            thirdListItem="NextJS"
                        />
                    </div>
                    <div id="rightList">
                        <CirclesRating />
                        <CirclesRating />
                        <CirclesRating />
                    </div>
                </div>
            </div>
            <div id="experience">
                <div class="title">Опыт</div>
                <div>
                    <List
                        firstListItem="JavaScript - 3 года"
                        secondListItem="ReactJS - 2,5 года"
                        thirdListItem="NextJS - 2 года"
                    />
                </div>
            </div>
            <div id="whereDidYouRecruit">
                <div class="title">Где получал</div>
                <div>
                    <List
                        firstListItem="на фрилансе"
                        secondListItem="на пет-проектах"
                        thirdListItem="в компаниях, неофициально"
                    />
                </div>
            </div>
        </div>
    );
}

export default Info;
