import React from "react";
import ListWithHeader from "./common/ListWithHeader";

function Wishes() {
    return (
        <ListWithHeader
            idBlock="wishes"
            title="Ожидания от должности"
            firstListItem="Удалённая работа."
            secondListItem="Гибкий график. Если нет возможности, тогда без него."
            thirdListItem="Минимальная ставка - 400 рублей в час. Можно и 300, если
                        по бюджету не получается."
        />
    );
}

export default Wishes;
