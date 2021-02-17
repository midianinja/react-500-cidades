import React, { useContext, useEffect, useState, useCallback } from 'react';
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import logoImg from '../../assets/500cidades-logo.png';
import logoNinjaImg from '../../assets/ninja-logo-branco.svg';
import logoReSystemImg from '../../assets/resystem-logo-branco.svg';
import MapImg from '../../assets/mapa-ativista.png';
import newsletterImg from '../../assets/newsletter.png';
import Store from '../../store/Store';
import { openIDASignin } from '../../service/ida.lib';
import ReponsiveVideoPlayer from "../../components/ResponsiveVideoPlayer/ReponsiveVideoPlayer";
import Slider from '../../components/Slider/Slider';
import {
  Wrapper, Apresentation, CallActionWrapper,
  CallActionContainer,CommonText,
  TextWithFocus, BigLogo, RegisterButton,
  HaveRegisterLink, ShortTextWrapper,
  ShortTextTitle, ShortText, MapSection, MapContainer,
  MapImage, GoToMap, VideoSection, CarouselTitle,
  CarouselSection, PathWaySection, PahtImage,
  PhraseWrapper, Phrase, PhraseWhite,
  Footer, NinjaBrand, ReBrand,
  LinksWrapper, FooterLink, NewsLetter, HeadingNews, TextNews, NewsLetterImg
} from './landing.style';

const placesChange = ['sua quebrada', 'seu role', 'seu trampo', 'sua vida', 'sua comunidade', 'seu projeto'];


const getUsersToCarousel = (users) => {
  const arr = users.filter((usr) => {
    return (usr.biography.length > 200)
  });
  return arr.slice(0, 20);
}

const Landing = ({ history }) => {
  const { state, dispatch } = useContext(Store);
  const [newString, setNewString] = useState(placesChange[0]);

  const shuffle = useCallback(() => {
    const stringShuffle = Math.floor(Math.random() * placesChange.length);
    setNewString(placesChange[stringShuffle]);
  }, []);
  
  useEffect(() => {
      const intervalID = setInterval(shuffle, 1500);
      return () => clearInterval(intervalID);
  }, [shuffle]);

  const [email, setEmail] = useState('');
  const parsed = queryString.parse(history.location.search);
  useEffect( () => {
    if (state.modals.landing) {
      if (state.user) {
        history.push('/');
        dispatch({ type: 'CLOSE_MODAL' })
      }
      if (state.auth && !state.user) {
        dispatch({ type: 'OPEN_MODAL', modal: 'register' })
        history.push('/?page=cadastre-se');
      }
    }
  }, [state.auth, state.user]);
  if (!state.modals.landing || parsed.page !== 'landing') return null;

    return (
      <Wrapper>
        <Apresentation>
          <CallActionWrapper>
            <BigLogo
              src={logoImg}
              alt="Logotipo 500 Cidades"
            />
            <CallActionContainer>
              <CommonText>Coloque</CommonText>
              <TextWithFocus>{newString}</TextWithFocus>
              <CommonText>no mapa</CommonText>
                <RegisterButton onClick={() => openIDASignin(state.ida)} >Cadastre-se</RegisterButton>
                <HaveRegisterLink onClick={() => openIDASignin(state.ida)} alt="Já tenho cadastro">
                  Já tenho cadastro
                </HaveRegisterLink>
            </CallActionContainer>
          </CallActionWrapper>
          <ShortTextWrapper>
            <ShortTextTitle>
              Um  mergulho no Brasil de verdade
            </ShortTextTitle>
            <ShortText>
              Vamos visitar e conhecer 500 cidades por todo o Brasil para colocar em nosso mapa ativista pessoas, projetos e espaços que transformam seu cotidiano e territórios e são inspiração para (r)evoluções cotidianas em suas comunidades.
            </ShortText>
          </ShortTextWrapper>
        </Apresentation>
        <MapSection >
          <MapContainer>
            <MapImage src={MapImg} alt="Mapa Ativista" />
          </MapContainer>
          <GoToMap onClick={() => history.push('/usuario/mapa')} >Navegue e descubra</GoToMap>
        </MapSection>
        <VideoSection>
          <ReponsiveVideoPlayer />
        </VideoSection>
        <CarouselSection>
          <CarouselTitle>Ativistas no mapa</CarouselTitle>
          <Slider  users={getUsersToCarousel(state.allusers)} />
        </CarouselSection>
        <PathWaySection>
          <PahtImage />
          <PhraseWrapper> 
            <Phrase>Vamos percorrer<br/>
              <PhraseWhite>500 cidades</PhraseWhite>
            </Phrase>
          </PhraseWrapper>
          <PhraseWrapper>
            <Phrase>Em um total de <br/>
              <PhraseWhite>3203 km</PhraseWhite>
            </Phrase>
          </PhraseWrapper>
          <PhraseWrapper>
            <Phrase>E conheceremos mais de<br/>
              <PhraseWhite>20000</PhraseWhite><br/>
              pessoas com vontade de<br/>
              botar a mão na massa
            </Phrase>
          </PhraseWrapper>
        </PathWaySection>
        <NewsLetter>
            <HeadingNews>Saiba tudo que está rolando no 500 cidades</HeadingNews>
            <TextNews>Assine nossa newsletter</TextNews>
            <NewsLetterImg src={newsletterImg} alt="Newsletter"/>
        </NewsLetter>
        <Footer>
          <NinjaBrand
            src={logoNinjaImg}
            alt="Logo Mídia Ninja"
          />
          <ReBrand
            src={logoReSystemImg}
            alt="Logo Re System"
          />
        <LinksWrapper>
          <FooterLink to="/sobre">Sobre</FooterLink>
          <FooterLink to="/politica-de-privacidade">Política de privacidade</FooterLink>
          <FooterLink to="/termos-de-uso">Termos de uso</FooterLink>
        </LinksWrapper>
      </Footer>
    </Wrapper>
  );
}

export default withRouter(Landing);
