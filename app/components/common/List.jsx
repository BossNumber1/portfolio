import React from "react";

function List({ firstListItem, secondListItem, thirdListItem }) {
    return (
        <ul>
            <li>{firstListItem}</li>
            <li>{secondListItem}</li>
            <li>{thirdListItem}</li>
        </ul>
    );
}

export default List;
