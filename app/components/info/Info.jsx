import React from "react";
import List from "../common/List";
import ListWithHeader from "../common/ListWithHeader";
import CirclesRating from "./CirclesRating";

function Info() {
    return (
        <div id="info">
            <div id="skills">
                <div className="title">Навыки</div>
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
            <ListWithHeader
                idBlock="experience"
                title="Опыт"
                firstListItem="JavaScript - 3 года"
                secondListItem="ReactJS - 2,5 года"
                thirdListItem="NextJS - 2 года"
            />
            <ListWithHeader
                idBlock="whereDidYouRecruit"
                title="Где получал"
                firstListItem="на фрилансе"
                secondListItem="на пет-проектах"
                thirdListItem="в компаниях, неофициально"
            />
        </div>
    );
}

export default Info;
