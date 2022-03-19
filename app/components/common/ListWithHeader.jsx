import React from "react";
import List from "./List";

function ListWithHeader({
    idBlock,
    title,
    firstListItem,
    secondListItem,
    thirdListItem,
}) {
    return (
        <div id={idBlock}>
            <div class="title">{title}</div>
            <div>
                <List
                    firstListItem={firstListItem}
                    secondListItem={secondListItem}
                    thirdListItem={thirdListItem}
                />
            </div>
        </div>
    );
}

export default ListWithHeader;
