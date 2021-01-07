import React from 'react';
import {
    Title,
    Wrapper,
    Container
  } from './privacePolice.style';
  import Menu from '../../components/Menu';
  import NavigationBar from '../../components/NavigationBar';
  import Button from '../../components/Button';
import { withRouter } from 'react-router-dom';

const PrivacePolice = ({history}) => {
        return (
            <Container>
            <NavigationBar />
            <Menu />
            <Wrapper>
                <Title>Política de Privacidade</Title>
                <p>1. Os dados são coletados quando você insere ou submete voluntariamente ao acessar e interagir com as funcionalidades disponibilizadas neste site referente ao cadastramento no mesmo.</p>
                <p>2. Nenhum dado pessoal é coletado em nossa plataforma sem que você o informe, por sua livre e espontânea vontade, participando de alguma de nossas ações virtuais ou ainda pelo preenchimento de nossos formulários.</p>

                <p>3. Não capturamos informações como endereços de IP ou de e-mail e outros dados pessoais nem instalamos ou ativamos nenhum tipo de programa, vírus, script, trojans ou similares que possam de alguma forma comprometer sua segurança ou invadir sua privacidade.</p>

                <p>4. A utilização de cookies em nosso site tem a finalidade única e exclusiva de estabelecer estatísticas de acesso, sendo coletados dados sobre provedor de acesso, sistema operacional, navegador (tipo, versão, opções habilitadas e plug-ins instalados), data e hora do acesso e páginas vistas.<br/>
                As métricas acima são coletadas através de ferramentas de análises online, no nosso caso Google Analytics. Tais estatísticas têm por propósito conhecer melhor o público que acessa o site e aperfeiçoá-lo cada vez mais, de maneira a adequar a visualização e o acesso ao maior número de pessoas possível.</p>

                <p>5. As informações coletadas pelos meios acima descritos em hipótese alguma serão vendidas ou compartilhadas com quaisquer outras instituições, empresas ou pessoas. Somente membros autorizados da Mídia NINJA têm acesso a essas informações. Nenhum dado é divulgado, seja em nosso site, seja em nossas publicações, sem que tal possibilidade seja devidamente explicitada no momento de seu fornecimento. </p>

                <p>6. Não enviamos nenhum tipo de material, seja por e-mail, seja por meios físicos de postagem, sem que você opte por recebê-lo e indique tal opção ao preencher algum de nossos formulários.</p>

                <p>7. A opção de descadastro de email da base de emails está sempre disponível no fim de cada disparo de email.</p>

                <p>8. Você pode solicitar cópia de qualquer informação pessoal que tenhamos a seu respeito a qualquer momento, bem como solicitar a correção ou remoção dos seus dados entrando em contato pelos emails:
                Mídia Ninja: midianinja@gmail.com</p>

                <p>A Mídia NINJA acredita ser fundamental que seu direito à privacidade na internet seja respeitado e nós fazemos tudo o que está ao nosso alcance para assegurá-lo.</p>
                <div>
                <Button onClick={() => history.push('/')} className="btn3D--blue">Voltar</Button>
                </div>
                    
            </Wrapper>
            </Container>
        );
}
export default withRouter(PrivacePolice);