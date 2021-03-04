import React, { useContext, useEffect, useState, useCallback } from 'react';
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import logoImg from '../../assets/500cidades-logo.png';
import logoNinjaImg from '../../assets/ninja-logo-branco.svg';
import logoReSystemImg from '../../assets/resystem-logo-branco.svg';
import MapImg from '../../assets/mapa-ativista.png';
import newsletterImg from '../../assets/newsletter.png';
import Input from '../../components/Input';
import Store from '../../store/Store';
import { openIDASignin } from '../../service/ida.lib';
import { registerNewsLetter } from './landing.controller';
import ReponsiveVideoPlayer from "../../components/ResponsiveVideoPlayer/ReponsiveVideoPlayer";
import Slider from '../../components/Slider/Slider';
import {
  Wrapper, Apresentation, CallActionWrapper,
  CallActionContainer,CommonText,
  TextWithFocus, BigLogo, RegisterButton,
  HaveRegisterLink, ShortTextWrapper,
  ShortTextTitle, ShortText, MapSection, MapContainer,
  MapImage, GoToMap, VideoSection, CarouselTitle,
  CarouselSection, CarouselContainer, PathWaySection, PahtImage,
  PhraseWrapper, Phrase, PhraseWhite,
  Footer, NinjaBrand, ReBrand,
  LinksWrapper, FooterLink, NewsLetter, HeadingNews, 
  TextNews, NewsLetterImg, NewsSubscription, ButtonNews, 
  NewsLetterContainer, TextWhoOrgs, OrgsContainer
} from './landing.style';
import DynamicText from '../../components/dynamicText/dynamicText';



const getUsersToCarousel = (users) => {
  const arr = users.filter((usr) => {
    return (usr.biography.length > 200 && usr.profile_image.mimified)
  });
  console.log(users);
  return arr.slice(0, 20);
}

const Landing = ({ history }) => {
  const parsed = queryString.parse(history.location.search);
  const { state, dispatch } = useContext(Store);
  const [email, setEmail] = useState('');

  
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
              <DynamicText />
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
          <CarouselContainer>
            <CarouselTitle>Ativistas no mapa</CarouselTitle>
            <Slider  users={getUsersToCarousel(state.allusers)} />
          </CarouselContainer>
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
          <NewsLetterImg src={newsletterImg} alt="Newsletter"/>
            <NewsLetterContainer>
              <HeadingNews>Saiba tudo que está rolando no 500 cidades</HeadingNews>
              <TextNews>Assine nossa newsletter</TextNews>
              <NewsSubscription>
                <Input
                  type="e-mail"
                  placeholder="Insira aqui seu e-mail"
                  labelClass="label-email"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
                <ButtonNews
                  onClick={() => registerNewsLetter(email, dispatch)}
                />
              </NewsSubscription>
            </NewsLetterContainer>
        </NewsLetter>
        <Footer>
          <OrgsContainer>
          <TextWhoOrgs>Quem constrói isso com a gente</TextWhoOrgs>
          <NinjaBrand
            src={logoNinjaImg}
            alt="Logo Mídia Ninja"
          />
          <ReBrand
            src={logoReSystemImg}
            alt="Logo Re System"
          />
          </OrgsContainer>
        <LinksWrapper>
          <FooterLink onClick={ () => dispatch({ type: 'OPEN_MODAL', modal: 'about' })} to="/?page=sobre">Sobre</FooterLink>
          <FooterLink onClick={ () => dispatch({ type: 'OPEN_MODAL', modal: 'privacy' })} to="/?page=politica">Política de privacidade e Termos de uso</FooterLink>
        </LinksWrapper>
      </Footer>
    </Wrapper>
  );
}

export default withRouter(Landing);
