import React from 'react';
import Button from '../../components/Button'
import './styles.css';

export default function Landing() {

    return (
        <div className="landing-container">
            <section className="landing">
                <h2 className="heading-secondary">
                    <span className="heading-secondary--white">Coloque</span>
                    <span className="heading-secondary--green">sua quebrada</span>
                    <span className="heading-secondary--white">no mapa</span>
                </h2>
                <Button className="btn--red">Quero!</Button>
            </section>
            <section className="activist-map"></section>
            <section className="about"></section>
            <section className="footer"></section>
        </div>
    );
}

export default Landing;