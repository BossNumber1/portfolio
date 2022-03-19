import React from "react";
import List from "./common/List";

function Additionally() {
    return (
        <div id="additionally">
            <div class="title">Дополнительно</div>
            <div>
                <List
                    firstListItem="Есть высшее, но пока не по программированию (зато это
                        доказывает, что могу добиваться целей)."
                    secondListItem="Знаю английский на достойном уровне."
                    thirdListItem="Амбициозный, настойчивый, решительный."
                />
            </div>
        </div>
    );
}

export default Additionally;
