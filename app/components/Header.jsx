import React from "react";

function Header() {
    return (
        <div id="header">
            <div id="ava">
                <img src="https://clck.ru/e5L99" alt="avatar" />
            </div>
            <div id="description">
                <div id="name">Дмитрий Устинов</div>
                <div id="specialization">Middle</div>
                <div id="mail">
                    <img
                        src="https://clck.ru/e5McW"
                        alt="mail icon"
                        width="15"
                    />
                    dimaang23@gmail.com
                </div>
                <div id="connect">
                    <img
                        src="https://clck.ru/e5MiM"
                        alt="connect icon"
                        width="15"
                    />
                    <a href="https://www.vk.com/moyustimov">Я ВКонтакте</a>,{" "}
                    <a href="https://t.me/moyustimov">в телеграмме</a>
                </div>
                <div id="personality">
                    <img
                        src="https://clck.ru/e5MoL"
                        alt="profile icon"
                        width="15"
                    />
                    26 лет, Россия
                </div>
            </div>
        </div>
    );
}

export default Header;
