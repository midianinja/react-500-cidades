import React from 'react';
import {
    BannerImg,
    Wrapper,
    Container
  } from './about.style';
import Menu from '../../components/Menu';
import NavigationBar from '../../components/NavigationBar';

import Button from '../../components/Button';
import { withRouter } from 'react-router-dom';

const About = ({history}) => {
    return (
        <Container>
        <NavigationBar />
        <Menu />
        <BannerImg>
            <div>
                <h1>Conheça o 500 Cidades</h1>
            </div>
        </BannerImg>
        <Wrapper>
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
                <p>Sabe quantos km existe do Oiapoque ao Chuí? 5.648 km!<br/>
                    É muito chão né? É Brasil que não acaba mais. <br/>
                    E assim que essa pandemia acabar vamos rodar por todo o país para dar voz às iniciativas que visam um mundo melhor e mais plural, amplificando as vozes das pequenas e grandes cidades.</p>
                <p>São incontáveis narrativas, ações, iniciativas e trabalhos que queremos encontrar neste Brasil Profundo. Faça parte dessa aventura incrível e vem com a gente!</p>
            <div>
                <Button onClick={() => history.push('/')} className="btn3D--blue">Voltar</Button>
            </div>     
        </Wrapper>
        </Container>
    );
}
export default withRouter(About);