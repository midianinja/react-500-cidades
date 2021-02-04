import React, { useContext, useEffect, useState } from 'react';
import { Link, withRouter } from "react-router-dom";

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/500cidades-logo.png';

import newsletterImg from '../../assets/newsletter.png';
import logoNinjaImg from '../../assets/ninja-logo-branco.svg';
import logoReSystemImg from '../../assets/resystem-logo-branco.svg';
import stepImg1 from '../../assets/passos-cadastro.png';
import stepImg2 from '../../assets/passos-cidade-mapa.png';
import stepImg3 from '../../assets/passos-historia.png';
import { registerNewsLetter } from './landing.controller';
import mapImg from '../../assets/mapa-ativista.png';
import './styles.css';
import './iphones-styles.css';
import Store from '../../store/Store';
import { openIDASignin } from '../../service/ida.lib';
import Map from '../../components/Map/Map';
import ReponsiveVideoPlayer from "../../components/ResponsiveVideoPlayer/ReponsiveVideoPlayer";
import Slider from '../../components/Slider/Slider';
import SimpleCard from '../../components/SimpleCard/SimpleCard';

const iWant = (history, state) => {
  if (!state.auth) {
    openIDASignin(state.ida);
    return;
  }
  if (!state.user) {
    history.push('/cadastre-se')
    return;
  }
  history.push('/usuario/mapa')
}

const renderSimpleCards = (users) => {
  return users.map(( user ) => (<SimpleCard key={user.id} profileImage={user.profile_image.mimified} nameUser={user.name} job={user.job} bioUser={user.biograph} />))
}

const Landing = ({ history }) => {
  const { state, dispatch } = useContext(Store);

  console.log(state);
  const [email, setEmail] = useState('');
  const playerProps = { playing: true };
  useEffect( () => {
    if (state.user) history.push('/usuario/mapa');
    if (state.auth) history.push('/cadastre-se');
  }, [state.auth, state.user]);


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
                  Já tenho cadastro
                </Link>
              </div>
            </div>
          </div>
          <div className="landing-bottom">
            <h2 className="heading-secondary--landing-bottom">
              Um <br /> mergulho no <br />Brasil<br />de verdade
            </h2>
            <p className="paragraph--landing-bottom">
            Vamos visitar e conhecer 500 cidades por todo o Brasil para colocar em nosso mapa ativista pessoas, projetos e espaços que transformam seu cotidiano e territórios e são inspiração para (r)evoluções cotidianas em suas comunidades.
            </p>
          </div>
        </section>
        <section className="activist-map">
          <div style={{ textAlign: "left" }}>
            <img className="map-img" src={mapImg} alt="Mapa Ativista" />
        </div>
        <Button onClick={() => history.push('/usuario/mapa')} className="btn3D--blue">Navegue e descubra</Button>
        </section>
        
        <section>
          <ReponsiveVideoPlayer /* {...playerProps} */ />
        </section>

        <section className="carousel">
            <div className="carousel-container">
            <h3 className="carousel-title">Pequenas vitórias de gente como a gente</h3>
              <Slider>
                  { state.allusers ? renderSimpleCards(state.allusers.slice(0, 10)) : null }
              </Slider>
            </div>
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
