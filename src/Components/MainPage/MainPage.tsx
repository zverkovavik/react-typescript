import React from "react";
import NavigationPanel from '../NavigationPanel/NavigationPanel';

function MainPage(): JSX.Element {
    return (
        <>
            <NavigationPanel />
            <main>
                <section className="promo">
                    <h1 className="promo__title">Digital Planet VR</h1>
                    <p className="promo__description">Образовательный виртуальный планетарий в Новороссийске.
                        Познавательное приключение в мир звёзд и галактик.</p>
                </section>
                <section>
                    <h2>Что такое VR-планетарий?</h2>
                    <p className="text-description">Это образовательная программа, использующая технологию виртуальной реальности. <br />
                        Зрителям выдаются очки виртуальной реальности, оператор запускает сеанс планетария на всех очках одновременно. В коллекции фильмов идут обучающие картины о космосе, астрономии  и обществознании. <br />
                        За счёт реалестичности  и имитации игры такое обучение повышает мотивацию и стимулирует активную мозговую деятельность ребёнка. </p>
                </section>
            </main>
        </>
    );
};

export default MainPage;
