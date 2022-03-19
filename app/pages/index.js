import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div id="content">
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
            <div id="wishes">
                <div class="title">Ожидания от должности</div>
                <div>
                    <ul>
                        <li>Удалённая работа.</li>
                        <li>
                            Гибкий график. Если нет возможности, тогда без него.
                        </li>
                        <li>
                            Минимальная ставка - 400 рублей в час. Можно и 300,
                            если по бюджету не получается.
                        </li>
                    </ul>
                </div>
            </div>
            <div id="additionally">
                <div class="title">Дополнительно</div>
                <div>
                    <ul>
                        <li>
                            Есть высшее, но пока не по программированию (зато
                            это доказывает, что могу добиваться целей).
                        </li>
                        <li>Знаю английский на достойном уровне.</li>
                        <li>Амбициозный, настойчивый, решительный.</li>
                    </ul>
                </div>
            </div>
            <div id="links">
                <div class="title">Ссылки</div>
                <div>
                    <ul>
                        <li>
                            Чистый и правильный{" "}
                            <img
                                src="https://clck.ru/e5Ncn"
                                alt="to the right"
                                width="15"
                            />{" "}
                            <a href="https://clck.ru/e5Nke">шаблон на JS</a>{" "}
                            <img
                                src="https://clck.ru/e5Ndn"
                                alt="to the left"
                                width="15"
                            />
                        </li>
                        <li>
                            <img
                                src="https://clck.ru/e5Ncn"
                                alt="to the right"
                                width="15"
                            />{" "}
                            <a href="https://clck.ru/e5Nnc">
                                ReactJS-приложение
                            </a>
                            <img
                                src="https://clck.ru/e5Ndn"
                                alt="to the left"
                                width="15"
                            />
                            со ссылкой на деплой на нестабильном сервере, из-за
                            его бесплатности.
                        </li>
                        <li>
                            <img
                                src="https://clck.ru/e5Ncn"
                                alt="to the right"
                                width="15"
                            />{" "}
                            <a href="https://github.com/BossNumber1">
                                Мой GitHub аккаунт
                            </a>{" "}
                            <img
                                src="https://clck.ru/e5Ndn"
                                alt="to the left"
                                width="15"
                            />{" "}
                            Тут вы можете посмотреть лишь мою активность. Ибо я
                            его использовал лишь для сохранения, но не
                            выкладывания чистого и правильного кода.
                        </li>
                        <li>
                            {" "}
                            <img
                                src="https://clck.ru/e5Ncn"
                                alt="to the right"
                                width="15"
                            />{" "}
                            <a href="https://ustinnov.ru/">Личный сайт</a>{" "}
                            <img
                                src="https://clck.ru/e5Ndn"
                                alt="to the left"
                                width="15"
                            />{" "}
                            Он связан со вторым моим призванием - поэзией.
                            Находится в процессе развития.
                        </li>
                        <li>
                            <img
                                src="https://clck.ru/e5Ncn"
                                alt="to the right"
                                width="15"
                            />{" "}
                            <a href="https://vk.com/bookmen_off">
                                Один из крупнейших пет-проектов
                            </a>{" "}
                            <img
                                src="https://clck.ru/e5Ndn"
                                alt="to the left"
                                width="15"
                            />
                            , где можно посмотреть на процесс разработки. На
                            данный момент проект не на сервере. Из-за переезда
                            руки не дошли его восстановить...
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
