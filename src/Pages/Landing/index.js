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


const Landing = ({ history }) => {
  const { state, dispatch } = useContext(Store);
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
                <Link to="/cadastre-se">
                  <Button className="btn3D--red">Quero!</Button>
                </Link>
                <Link onClick={hasSignup} href="#" alt="Já tenho cadastro" className="anchor-link">
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
              O 500 cidades tem por objetivo identificar pessoas, projetos e espaços espalhados pelo Brasil.  Descentralizar a cena e fomentar a voz da quebrada.  Construir uma teia de territórios ativistas e promover a criação de redes de confiança, afeto  e solidariedade, a partir das experiências e histórias de vida. Nutrir a construção de trocas sociais e ampliar o diálogo entre as manifestações plurais de um Brasil profundo e diverso.
              </p>
              <p>
              Segundo especialistas estamos diante da maior crise humanitária do último século, diante da qual o mundo todo se vira para questões fundamentais.
              </p>
              <p>
              Não bastasse tudo isso, o Brasil tem neste momento um governo incapaz de lidar com os desafios que temos pela frente.
              </p>
              <p>
              Estes dois fatores dão a dimensão da EMERGÊNCIA deste chamado a participação. Na medida em que observamos a necessidade de abarcar as iniciativas que vão surgindo no Brasil profundo, na medida em que as demandas sociais se destacam podemos notar uma eclosão de  projetos com foco nas diferentes carências sociais, dando voz a quem antes era silenciado por falta de espaços de articulação.
              </p>
              <p>A proposta é identificar e conectar pessoas que fazem a diferença em todos os cantos do país! Iniciativas culturais, de educação e solidariedade, música e empreendedorismo solidário, soberania alimentar e desenvolvimento sustentável e muito mais.</p>
              <p>Sabe quantos km existe do Oiapoque ao Chuí? 5.648 km!
É muito chão né? É Brasil que não acaba mais.
E assim que essa pandemia acabar vamos rodar por todo o país para dar voz às iniciativas que visam um mundo melhor e mais plural, amplificando as vozes das pequenas e grandes cidades.</p>
            <p>São incontáveis narrativas, ações, iniciativas e trabalhos que queremos encontrar neste Brasil Profundo. Faça parte dessa aventura incrível e vem com a gente!</p>
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
