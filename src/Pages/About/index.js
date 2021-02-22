import React, { useContext } from 'react';
import {
    BannerImg,
    IconBack,
    Wrapper,
    ContainerAbout,
    ButtonBack,
    ImgLogo, 
    TitleBanner,
    UsualText, 
    TextImage,
    FooterAbout, 
    Photo,
    Logo500Img,
    WrapperTextImg,
    SocialMedia,
    Facebook,
    Twitter,
    Instagram,
    Snapchat,
} from './about.style';
import Menu from '../../components/Menu';
import NavigationBar from '../../components/NavigationBar';
import logoImg from '../../assets/500cidades-logo.png';
import { withRouter } from 'react-router-dom';
import Store from '../../store/Store';
import Img1 from '../../assets/descobrindo-lugares.jpg';
import Img2 from '../../assets/montanha.jpg';
import Img3 from '../../assets/na-estrada.jpg';
import Img4 from '../../assets/seguindo-adiante.jpg';
import Img5 from '../../assets/ver-caminho-retrovisor.jpg';

import Logo500Cidades from '../../assets/500cidades-logo.png';

const About = ({ history }) => {
    const { state, dispatch } = useContext(Store)
    if (!state.modals.about) return null;
    return (
        <ContainerAbout>
            <NavigationBar />
            <Menu />
            <BannerImg>
                <IconBack onClick={() => {
                        history.goBack();
                        dispatch({ type: 'CLOSE_MODAL' })
                        }} />
                  <ImgLogo />  
                  <TitleBanner>Conheça o 500 Cidades</TitleBanner>
            </BannerImg>
            
            <Wrapper>
                <UsualText>
                    O 500 cidades tem por objetivo identificar pessoas, projetos e espaços espalhados pelo Brasil.  Descentralizar a cena e fomentar a voz da quebrada.  Construir uma teia de territórios ativistas e promover a criação de redes de confiança, afeto  e solidariedade, a partir das experiências e histórias de vida. Nutrir a construção de trocas sociais e ampliar o diálogo entre as manifestações plurais de um Brasil profundo e diverso.
                </UsualText>
                <UsualText>
                    Segundo especialistas estamos diante da maior crise humanitária do último século, diante da qual o mundo todo se vira para questões fundamentais.
                </UsualText>
                <UsualText>
                    Não bastasse tudo isso, o Brasil tem neste momento um governo incapaz de lidar com os desafios que temos pela frente.
                </UsualText>   

                <WrapperTextImg>
                    <TextImage>
                        <UsualText>
                            Estes dois fatores dão a dimensão da EMERGÊNCIA deste chamado a participação. Na medida em que observamos a necessidade de abarcar as iniciativas que vão surgindo no Brasil profundo, na medida em que as demandas sociais se destacam podemos notar uma eclosão de  projetos com foco nas diferentes carências sociais, dando voz a quem antes era silenciado por falta de espaços de articulação.
                        </UsualText>
                        <UsualText>
                            A proposta é identificar e conectar pessoas que fazem a diferença em todos os cantos do país! Iniciativas culturais, de educação e solidariedade, música e empreendedorismo solidário, soberania alimentar e desenvolvimento sustentável e muito mais.
                        </UsualText>
                    </TextImage>
                    <Photo src={Img4} alt="Foto de um homem registrando paisagens em fotos com o celular "/>
                </WrapperTextImg>


                <WrapperTextImg>
                <TextImage>
                    <UsualText>
                        Sabe quantos km existe do Oiapoque ao Chuí? 5.648 km!
                    </UsualText>
                    <UsualText>
                        É muito chão né? É Brasil que não acaba mais. 
                    </UsualText>
                    <UsualText>
                        E assim que essa pandemia acabar vamos rodar por todo o país para dar voz às iniciativas que visam um mundo melhor e mais plural, amplificando as vozes das pequenas e grandes cidades.
                    </UsualText>
                    <UsualText>
                        São incontáveis narrativas, ações, iniciativas e trabalhos que queremos encontrar neste Brasil Profundo. Faça parte dessa aventura incrível e vem com a gente!
                    </UsualText>
                </TextImage>
                <Photo src={Img5} alt="Foto de pessoas viajando de carro e passando por montanhas"/>
                </WrapperTextImg>

            <FooterAbout>
                    <Logo500Img src={Logo500Cidades} alt="Logo 500 Cidades"/>
                    <SocialMedia>
                        <Facebook></Facebook>
                        <Twitter></Twitter>
                        <Instagram></Instagram>
                        <Snapchat></Snapchat>
                    </SocialMedia>
                    <ButtonBack onClick={() => {
                        history.goBack();
                        dispatch({ type: 'CLOSE_MODAL' })
                        }} className="btn3D--blue">Voltar</ButtonBack>
            </FooterAbout>
            </Wrapper>
        </ContainerAbout>
    );
}
export default withRouter(About);