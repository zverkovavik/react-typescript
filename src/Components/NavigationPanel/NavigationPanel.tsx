import React from "react";

function NavigationPanel(): JSX.Element {
    return (
    <header className="main-header">
        <div className="logo">
            <img src="./img/logo.png" alt="" className="logo__picture" />
        </div>
        <nav className="nav-menu">
            <ul className="nav-menu__list">
                <li className="nav-menu__item">О продукте</li>
                <li className="nav-menu__item">Как работает</li>
                <li className="nav-menu__item">Технология</li>
                <li className="nav-menu__item">Вопросы</li>
                <li className="nav-menu__item">Контакты</li>
            </ul>
        </nav>
        <div className="get-ticket">
            <button className="get-ticket__button">
                Заказать
            </button>
            <a href="tel:+88005553575">+ 8 (800)555 35 75</a>
        </div>
    </header>
    );
};

export default NavigationPanel;
