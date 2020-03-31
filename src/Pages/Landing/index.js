import React from 'react';
import Button from '../../components/Button'
import logoImg from '../../assets/500cidades-logo.png'
import mapImg from '../../assets/mapa-ativista.png'
import stepImg1 from '../../assets/passos-cadastro.png'
import stepImg2 from '../../assets/passos-cidade-mapa.png'
import stepImg3 from '../../assets/passos-historia.png'
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
                    <h2 className="heading-secondary--landing-bottom">
                        Um mergulho no Brasil de verdade
                    </h2>
                    <p className="paragraph--landing-bottom">
                        Com o projeto 500 Cidades viajamos pelo Brasil para colocar no mapa pessoas e projetos que criam uma ponte entre a arte e a cultura, e transformam seus espaços de alguma forma, na beleza das pequenas atitudes e nas vitórias diárias.
                    </p>
                </div>
            </section>
            <section className="activist-map">
                <h2 className="heading-secondary">Mapa Ativista</h2>
                <img className="map-img" src={mapImg} alt="Mapa Ativista" />
                <Button className="btn--blue">Navegue e descubra mais</Button>
                <div className="steps">
                    <img className="steps-img" src={stepImg1} alt="Cadastre-se" />
                    <img className="steps-img" src={stepImg2} alt="Coloque sua cidade" />
                    <img className="steps-img" src={stepImg3} alt="Escreva sua história" />
                </div>
            </section>
            <section className="about">
            <h2 className="heading-secondary--about">
                500 cidades
            </h2>
            <div className="paragraph-about">
                    <p>
                        O 500 cidades é um projeto organizado pela rede de coletivos culturais Fora do Eixo e a rede de mídia livre Ninja e tem por objetivo identificar pessoas, projetos e espaços espalhados pelo Brasil para construir uma rede de territórios ativistas e promover a criação de redes de confiança, empatia e solidariedade, a partir de experiências e histórias de vida.                   
                    </p>
                    <p>
                        Enquanto uma onda de intolerância e conservadorismo ganha força, milhares de experiências e práticas colaborativas de superação pessoal e coletiva emergem transformando todo o país num grande laboratório de uma nova cidadania no século XXI. Participar da vida social e política é uma das principais atitudes que caracterizam o brasileiro do século XXI, principalmente depois das jornadas de junho de 2013. 
                    </p>
                    <p>
                        Segundo especialistas estamos diante da maior crise humanitária do último século. Não bastasse tudo isso, o Brasil tem neste momento um presidente incapaz de lidar com os desafios que temos pela frente. Estes dois fatores dão a dimensão da EMERGÊNCIA deste chamado a participação.
                    </p>
                    <p>
                        Temos que aproveitar este momento para se abrir ainda mais e ampliar as conexões entre as pessoas dispostas a construir em seus territórios esta rede de confiança. Debaixo pra cima, a partir de cada local, chegou a hora de semearmos um novo projeto de sociedade. Mais justo e igualitário. Que empodere e dê visibilidade a toda potência de um Brasil profundo e que precisa emergir. 
                    </p>
                    <p>
                        Venha fazer parte desta história...
                    </p>
                </div>
            </section>
            <section className="footer"></section>
        </div>
    );
}

export default Landing;
