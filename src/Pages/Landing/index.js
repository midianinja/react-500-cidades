import React from 'react';
import Button from '../../components/Button'
import logoImg from '../../assets/500cidades-logo.png'
import './styles.css';

const Landing = () => {

    return (
        <div className="landing-container">
            <section className="landing">
                <div className="landing-top">
                    <div className="landing-logo">
                        <img className="logo-img" src={logoImg} alt="Logotipo 500 Cidades"/>
                    </div>
                    <div className="landing-title">
                        <h1 className="heading-primary">
                            <span className="heading-primary--white">Coloque</span>
                            <span className="heading-primary--green">sua quebrada</span>
                            <span className="heading-primary--white">no mapa</span>
                        </h1>
                        <Button className="btn--red">Quero!</Button>
                    </div>
                </div>
                <div className="landing-bottom">
                    <h2 className="heading-secondary--landing">
                        Um mergulho no Brasil de verdade
                    </h2>
                    <p className="paragraph">
                        Com o projeto 500 Cidades viajamos pelo Brasil para colocar no mapa pessoas e projetos que criam uma ponte entre a arte e a cultura, e transformam seus espaços de alguma forma, na beleza das pequenas atitudes e nas vitórias diárias.
                    </p>
                </div>
            </section>
            <section className="activist-map"></section>
            <section className="about"></section>
            <section className="footer"></section>
        </div>
    );
}

export default Landing;
