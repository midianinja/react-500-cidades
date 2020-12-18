import React, { useContext, useState } from 'react';
import { Link, withRouter } from "react-router-dom";

import Button from '../../components/Button';
import Menu from '../../components/Menu';
import Input from '../../components/Input';

import logoImg from '../../assets/500cidades-logo.png';
import mapImg from '../../assets/mapa-ativista.png';
import stepImg1 from '../../assets/passos-cadastro.png';
import stepImg2 from '../../assets/passos-cidade-mapa.png';
import stepImg3 from '../../assets/passos-historia.png';
import newsletterImg from '../../assets/newsletter.png';
import logoNinjaImg from '../../assets/logo-midia-ninja.png';
import logoCircleImg from '../../assets/logo-circle.png';
import logoAmzImg from '../../assets/logo-amazonia-org.png';
import { registerNewsLetter } from './landing.controller';

import './styles.css';
import Store from '../../store/Store';
import { openIDASignin } from '../../service/ida.lib';


const Landing = ({ history }) => {
  const { state, dispatch } = useContext(Store);
  console.log('🚀 ~ file: index.js ~ line 26 ~ Landing ~ state', state);
  const [email, setEmail] = useState('');
  const hasSignup = () => {
    if (state.auth && state.user) return history.push('/usuario/mapa');
    dispatch({
      type: 'TOGGLE_LOGIN_MODAL',
      data: true,
    });
  }
    return (
      <div className="landing-container">
        <section className="landing">
          <div className="landing-top">
            <div className="landing-logo">
              <img
                className="logo-img"
                src={logoImg}
                alt="Logotipo 500 Cidades"
              />
            </div>
            <div className="landing-title">
              <h1 className="heading-primary">
                <span className="heading-primary--white">Coloque</span>
                <span className="heading-primary--green">sua quebrada</span>
                <span className="heading-primary--white">no mapa</span>
              </h1>
              <div className="landing-top-links">
                <Button onClick={() => openIDASignin(state.ida)} className="btn3D--red">Quero!</Button>
                <Link onClick={() => openIDASignin(state.ida)} href="#" alt="Já tenho cadastro" className="anchor-link">
                  Já tenho cadastro.
                </Link>
              </div>
            </div>
          </div>
          <div className="landing-bottom">
            <h2 className="heading-secondary--landing-bottom">
              Um mergulho no Brasil de verdade
            </h2>
            <p className="paragraph--landing-bottom">
              Com o projeto 500 Cidades viajamos pelo Brasil para colocar no
              mapa pessoas e projetos que criam uma ponte entre a arte e a
              cultura, e transformam seus espaços de alguma forma, na beleza das
              pequenas atitudes e nas vitórias diárias.
            </p>
          </div>
        </section>
        <section className="activist-map">
          <div style={{ textAlign: "left" }}>
            <h2 className="heading-secondary">Mapa Ativista</h2>
            <img className="map-img" src={mapImg} alt="Mapa Ativista" />
          </div>
          <Button onClick={() => history.push('/usuario/mapa')} className="btn3D--blue">Navegue e descubra mais</Button>
          <div className="steps">
            <div>
              <img className="steps-img" src={stepImg1} alt="Cadastre-se" />
              <p>Cadastre-se</p>
            </div>
            <div>
              <img
                className="steps-img"
                src={stepImg2}
                alt="Coloque sua cidade"
              />
              <p>Coloque sua cidade no mapa</p>
            </div>
            <div>
              <img
                className="steps-img"
                src={stepImg3}
                alt="Escreva sua história"
              />
              <p>
                Conte sua história
              </p>
            </div>
          </div>
        </section>
        <section className="about">
          <div>
            {/* <Container> */}
            <h2 className="heading-secondary--about">500 cidades</h2>
            <div className="paragraph-about">
              <p>
                O 500 cidades é um projeto organizado pela rede de coletivos
                culturais que tem por objetivo identificar pessoas, projetos
                e espaços espalhados pelo Brasil para construir uma rede de 
                territórios ativistas e promover a criação de redes de confiança, 
                empatia e solidariedade, a partir de experiências e histórias de 
                vida.
              </p>
              <p>
                Enquanto uma onda de intolerância e conservadorismo ganha força,
                milhares de experiências e práticas colaborativas de superação
                pessoal e coletiva emergem transformando todo o país num grande
                laboratório de uma nova cidadania no século XXI. Participar da
                vida social e política é uma das principais atitudes que
                caracterizam o brasileiro do século XXI, principalmente depois
                das jornadas de junho de 2013.
              </p>
              <p>
                Segundo especialistas estamos diante da maior crise humanitária
                do último século. Não bastasse tudo isso, o Brasil tem neste
                momento um presidente incapaz de lidar com os desafios que temos
                pela frente. Estes dois fatores dão a dimensão da EMERGÊNCIA
                deste chamado a participação.
              </p>
              <p>
                Temos que aproveitar este momento para se abrir ainda mais e
                ampliar as conexões entre as pessoas dispostas a construir em
                seus territórios esta rede de confiança. Debaixo pra cima, a
                partir de cada local, chegou a hora de semearmos um novo projeto
                de sociedade. Mais justo e igualitário. Que empodere e dê
                visibilidade a toda potência de um Brasil profundo e que precisa
                emergir.
              </p>
              <p>Venha fazer parte desta história...</p>
            </div>
            {/* </Container> */}
          </div>
        </section>
        <section className="newsletter">
          <img
            className="newsletter-img"
            src={newsletterImg}
            alt="Newsletter"
          />
          <div className="newsletter-text">
            <h3 className="heading-terciary--newsletter">
              Saiba tudo que está rolando no 500 cidades
            </h3>
            <p>Assine nossa newsletter</p>
            <div className="newsletter-subscription">
              <Input
                type="e-mail"
                inputClass="newsletter-email"
                placeholder="Insira aqui seu e-mail"
                labelClass="label-email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <Button
                onClick={() => registerNewsLetter(email, dispatch)}
                className="newsletter-btn3D--blue"
              >
                >
              </Button>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="org">
            <p>Quem constrói isso com a gente</p>
            <img
              className="org-logo"
              src={logoNinjaImg}
              alt="Logo Mídia Ninja"
            />
            <img
              className="org-logo"
              src={logoCircleImg}
              alt="pesquisar....."
            />
            <img
              className="org-logo"
              src={logoAmzImg}
              alt="Logo Amazônia.org"
            />
          </div>
          <div className="more-about">
            <a className="more-about-link" href="#sobre">
              Sobre
            </a>
            <a className="more-about-link" href="#politica">
              Política de privacidade
            </a>
            <a className="more-about-link" href="#termos">
              Termos de uso
            </a>
          </div>
        </section>
      </div>
    );
}

export default withRouter(Landing);
