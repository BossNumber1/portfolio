import React from "react";
import List from "./common/List";

function Wishes() {
    return (
        <div id="wishes">
            <div class="title">Ожидания от должности</div>
            <div>
                <List
                    firstListItem="Удалённая работа."
                    secondListItem="Гибкий график. Если нет возможности, тогда без него."
                    thirdListItem="Минимальная ставка - 400 рублей в час. Можно и 300, если
                        по бюджету не получается."
                />
            </div>
        </div>
    );
}

export default Wishes;
