import React, { useContext, useState } from 'react';
import { Link, withRouter } from "react-router-dom";

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/500cidades-logo.png';

import newsletterImg from '../../assets/newsletter.png';
import logoNinjaImg from '../../assets/ninja-logo-branco.svg';
import logoReSystemImg from '../../assets/resystem-logo-branco.svg';

import { registerNewsLetter } from './landing.controller';
import mapImg from '../../assets/500cidades-mapa-1054-623px.png';
import './styles.css';
import './iphones-styles.css';
import Store from '../../store/Store';
import { openIDASignin } from '../../service/ida.lib';
import ReponsiveVideoPlayer from "../../components/ResponsiveVideoPlayer/ReponsiveVideoPlayer";
import Slider from '../../components/Slider/Slider';
import SimpleCard from '../../components/SimpleCard/SimpleCard';


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
  const playerProps = { playing: true };

  const cardData = {
    dataEvent1:{
        img:'../../assets/imgCard1.png',
        description:'Imagem da praia em Fortaleza - CE',
        dateEvent:'30 jul',
        titleEvent:'Reunião Aberta Mídia Ninja em Fortaleza',
        placeEvent:'Fortaleza, CE',
    },
    dataEvent2:{
        img:'../../assets/imgCard1.png',
        description:'Imagem da praia em Fortaleza - CE',
        dateEvent:'2 ago',
        titleEvent:'Reunião Aberta Mídia Ninja em Fortaleza',
        placeEvent:'Fortaleza, CE',
    },
    dataEvent3:{
        img:'../../assets/imgCard1.png',
        description:'Imagem da praia em Fortaleza - CE',
        dateEvent:'5 ago',
        titleEvent:'Reunião Aberta Mídia Ninja em Fortaleza',
        placeEvent:'Fortaleza, CE',
    },
};
const dataCardEvent =JSON.stringify(cardData);
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
                <Button onClick={() => openIDASignin(state.ida)} className="btn3D--white">Cadastre-se</Button>
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
            Vamos visitar e conhecer 500 cidades por todo o Brasil para colocar em nosso mapa ativista pessoas, projetos e espaços que transformam seu cotidiano e territórios e são inspiração para (r)evoluções cotidianas em suas comunidades.
            </p>
          </div>
        </section>
        <section className="event-calendar">
            <p>Primeira rota lançada!</p>
            <h2>República do Nordeste</h2>
            <Slider>
              <SimpleCard dataEvents={dataCardEvent}></SimpleCard>
            </Slider>
        </section>
        <section className="activist-map">
          <div style={{ textAlign: "left" }}>
            <img className="map-img" src={mapImg} alt="Mapa Ativista" />
          </div>
          <Button onClick={() => history.push('/usuario/mapa')} className="btn3D--blue">Navegue e descubra mais</Button>
        </section>

        <section>
        <ReponsiveVideoPlayer {...playerProps} />
        </section>
        <section className="pathway">
          <div className="pathImg"></div>
              <div className="show-phrase"> 
                <p>Vamos percorrer<br/>
                  <span>500 cidades</span>
                </p>
              </div>
              <div className="show-phrase">
                <p>Em um total de <br/>
                  <span>3203 km</span>
                </p>
              </div>
              <div className="show-phrase">
                <p>E conheceremos mais de<br/>
                  <span>20000</span><br/>
                  pessoas com vontade de<br/>
                  botar a mão na massa
                </p>
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
              </Button>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="org">
            <p>Quem constrói isso com a gente</p>
            <img
              className="org-logos ninja-logo"
              src={logoNinjaImg}
              alt="Logo Mídia Ninja"
            />
            <img
              className="org-logos resystem-logo"
              src={logoReSystemImg}
              alt="Logo Re System"
            />
          </div>
          <div className="more-about">
            <Link className="more-about-link" to="/sobre">Sobre</Link>
            <Link className="more-about-link" to="/politica-de-privacidade">Política de privacidade</Link>
            <Link className="more-about-link" to="/termos-de-uso">Termos de uso</Link>
          </div>
        </section>
      </div>
    );
}

export default withRouter(Landing);
