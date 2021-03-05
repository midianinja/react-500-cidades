import React, { useContext } from 'react';
import {
    Title,
    Wrapper,
    Container,
    IconBack,
    ButtonBack,
    Subtitle,
    Chapter,
    UsualText, 
    FooterAbout, 
    Logo500Img,
    SocialMedia,
    Facebook,
    Twitter,
    Instagram,
    Snapchat,
  } from './privacePolice.style';
  import Menu from '../../components/Menu';
  import Logo500Cidades from '../../assets/500cidades-logo.png';
  import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { withRouter } from 'react-router-dom';
import Store from '../../store/Store';
import { useState } from 'react/cjs/react.development';
import { SocialIcon } from '../About/about.style';

const PrivacePolice = ({ history }) => {
    const { state, dispatch } = useContext(Store);
    if (!state.modals.privacy) return null;
    return (
        <Container>
            <NavigationBar />
            <Menu />
            <IconBack onClick={() => {
                        history.goBack();
                        dispatch({ type: 'CLOSE_MODAL' })
                        }} />
            <Wrapper>
            <Title>Política de Privacidade</Title>
                <UsualText>1. Os dados são coletados quando você insere ou submete voluntariamente ao acessar e interagir com as funcionalidades disponibilizadas neste site referente ao cadastramento no mesmo.</UsualText>
                <UsualText>2. Nenhum dado pessoal é coletado em nossa plataforma sem que você o informe, por sua livre e espontânea vontade, participando de alguma de nossas ações virtuais ou ainda pelo preenchimento de nossos formulários.</UsualText>

                <UsualText>3. Não capturamos informações como endereços de IP ou de e-mail e outros dados pessoais nem instalamos ou ativamos nenhum tipo de programa, vírus, script, trojans ou similares que possam de alguma forma comprometer sua segurança ou invadir sua privacidade.</UsualText>

                <UsualText>4. A utilização de cookies em nosso site tem a finalidade única e exclusiva de estabelecer estatísticas de acesso, sendo coletados dados sobre provedor de acesso, sistema operacional, navegador (tipo, versão, opções habilitadas e plug-ins instalados), data e hora do acesso e páginas vistas.<br/>
                As métricas acima são coletadas através de ferramentas de análises online, no nosso caso Google Analytics. Tais estatísticas têm por propósito conhecer melhor o público que acessa o site e aperfeiçoá-lo cada vez mais, de maneira a adequar a visualização e o acesso ao maior número de pessoas possível.</UsualText>

                <UsualText>5. As informações coletadas pelos meios acima descritos em hipótese alguma serão vendidas ou compartilhadas com quaisquer outras instituições, empresas ou pessoas. Somente membros autorizados da Mídia NINJA têm acesso a essas informações. Nenhum dado é divulgado, seja em nosso site, seja em nossas publicações, sem que tal possibilidade seja devidamente explicitada no momento de seu fornecimento. </UsualText>

                <UsualText>6. Não enviamos nenhum tipo de material, seja por e-mail, seja por meios físicos de postagem, sem que você opte por recebê-lo e indique tal opção ao preencher algum de nossos formulários.</UsualText>

                <UsualText>7. A opção de descadastro de email da base de emails está sempre disponível no fim de cada disparo de email.</UsualText>

                <UsualText>8. Você pode solicitar cópia de qualquer informação pessoal que tenhamos a seu respeito a qualquer momento, bem como solicitar a correção ou remoção dos seus dados entrando em contato pelos emails:
                Mídia Ninja: <a href="mailto:midianinja@gmail.com">midianinja@gmail.com</a>
                </UsualText>

                <UsualText>A Mídia NINJA acredita ser fundamental que seu direito à privacidade na internet seja respeitado e nós fazemos tudo o que está ao nosso alcance para assegurá-lo.</UsualText>
                <Subtitle>
                TERMOS E CONDIÇÕES DE USO E POLÍTICA DE PRIVACIDADE DA PLATAFORMA 500 CIDADES
                </Subtitle>
                <Subtitle>
                AVISOS LEGAIS
                </Subtitle>
                <UsualText>
                O acesso e uso desta plataforma estão sujeitos às Condições ou Termos de Uso a seguir. 
                </UsualText>
                <UsualText>
                    Ao acessar e utilizar nossa plataforma, você está confirmando que aceita estas Condições de Uso sem nenhuma reserva ou restrição e que você concorda com estes termos.
                    </UsualText>
                                    <UsualText>
                    Estas Condições de Uso se referem e incorporam também nossa Política de Privacidade, que igualmente se aplica à utilização deste domínio.
                    </UsualText>
                                    <UsualText>
                    Estes termos são importantes pois trazem informações sobre como deve ser o uso da plataforma e as regras que todos precisam seguir ao usá-la, além de explicar os direitos e deveres que você terá ao utilizá-la, bem como suas responsabilidades.
                    </UsualText>
                                    <UsualText>
                    O termo “Usuário” refere-se a você que utilizará a presente plataforma ou qualquer outra através da sua IDA - IDENTIDADE DIGITAL ATIVISTA,  ao aceitar todas as condições estabelecidas por este Termo.
                    </UsualText>
                                    <UsualText>
                    Este site é de propriedade e administrado pela Serviços de Cultura Digital, localizada na cidade de São Paulo, na Rua José Bento 102/106 - Cambuci - CEP 01523030, inscrita sob o CNPJ nº 31.029.654/0001-71.
                    </UsualText>
                <Chapter>1. Introdução</Chapter>
                <UsualText>
                Ao acessar ou se inscrever para utilizar qualquer uma das áreas da presente plataforma, com todos os seus recursos e funcionalidades, interfaces de usuário associados e interatividade, assim como todo o conteúdo, materiais disponibilizados e software associados ao nosso serviço, o Usuário estará celebrando um contrato vinculativo com a pessoa jurídica Serviços de Cultura Digital.
                </UsualText>
                <UsualText>
                Este contrato inclui o presente Termo com suas respectivas Condições de Uso e quais termos adicionais com os quais o Usuário concordar, além de termos com quaisquer terceiros. O Usuário atesta que leu e compreendeu todos os enunciados, aceita-os e concorda em estar vinculado a estes. Caso não concorde (ou não possa cumpri-los), o Usuário não poderá fazer uso da Plataforma 500 Cidades e nem do conteúdo interativo presente na mesma.
                </UsualText>
                <UsualText>
                Para acessar a Plataforma 500 Cidades e seus conteúdos, o Usuário precisará:
                </UsualText>
                <UsualText>
                a) Ser pessoa física;
                </UsualText>
                <UsualText>
                b) Ser maior de 18 anos;
                </UsualText>
                <UsualText>
                c) Residir em um país onde o acesso à plataforma esteja disponível.
                </UsualText>
                <UsualText>
                O Usuário ainda se compromete e garante que qualquer informação de registro que enviar para a plataforma é verdadeira, precisa e completa, sob sua responsabilidade.
                </UsualText>
                <Chapter>
                2. Alterações nos acordos 
                </Chapter>
                <UsualText>
                O 500 Cidades se reserva ao direito de fazer alterações nos Acordos aqui enunciados por razões válidas, como melhorar as funções ou recursos existentes, bem como acrescentar novas funções ou recursos à plataforma, e por ajustes técnicos razoáveis, assegurando a operacionalidade e segurança do serviço, além de realizar modificações por razões legais ou regulamentares.
                </UsualText>
                <UsualText>
                O 500 Cidades se reserva também ao direito de remover ou alterar o serviço fornecido em nossa plataforma sem qualquer aviso prévio, não garantindo que o site ou qualquer parte do conteúdo estará sempre disponível, ou de forma ininterrupta. Poderemos suspender, remover, descontinuar ou modificar parte ou mesmo todo o site sem aviso prévio, sem que por isso sejamos considerados responsáveis por qualquer motivo se a plataforma estiver indisponível em qualquer horário, ou por qualquer período. Também resta aqui resguardado o direito à restrição de acesso a algumas partes ou mesmo à totalidade da plataforma, a qualquer momento.
                </UsualText>
                <UsualText>
                Também poderão ser eventualmente alteradas as presentes Condições ou Termos de Uso pela plataforma, devendo estas serem regularmente conferidas para assegurar que o Usuário esteja ciente de qualquer modificação. O acesso à plataforma 500 Cidades implica em aceitação tácita de todos os seus termos.   
                </UsualText>
                <Chapter>3. Acessando a Plataforma 500 Cidades</Chapter>
                <UsualText>
                Aqui estão algumas informações sobre todas as maneiras que o Usuário pode aproveitar a plataforma 500 Cidades.
                </UsualText>
                <UsualText>
                O acesso se dará pelo website URL, onde o Usuário poderá experienciar:
                </UsualText>
                <UsualText>
a) Criação de Perfil
</UsualText>
                <UsualText>
b) Georreferenciamento 
</UsualText>
                <UsualText>
O acesso às informações e experiências acima elencadas estão sujeitas a estas condições de uso, devendo o Usuário consentir aos termos, para ter acesso.

</UsualText>
                <UsualText>
A plataforma 500 Cidades é de propriedade da Serviços de Cultura Digital. A plataforma concede ao Usuário uma permissão limitada, não exclusiva e revogável para fazer uso de nossos recursos, de forma limitada, pessoal e não comercial. Resta terminantemente proibido utilizar-se de sistemas automatizados ou programas de computador para extrair conteúdo ou informação de nosso website para objetivos comerciais. O Usuário se compromete a utilizar nossos conteúdos para seu próprio uso pessoal, não comercial, e que não irá distribuir nem transferir tais conteúdos e recursos.
</UsualText>

<Chapter>
4. Direitos de Propriedade Intelectual
</Chapter>
<UsualText>
Exceto onde estiver expressamente afirmado, a Empresa Serviços de Cultura Digital possui todos os direitos de propriedade intelectual do site e do material nele publicado (incluindo, mas não limitado a textos, imagens, áudios, vídeos, códigos HTML, entre outros). Todo o conteúdo resta devidamente protegido, conforme legislação pertinente e copyright, de forma que o Usuário não pode utilizar qualquer conteúdo da Plataforma 500 CIdades no sentido de infringir direitos autorais ou de propriedade intelectual, da plataforma ou de terceiros.
</UsualText>
                <UsualText>
Todas as marcas, nomes comerciais, logotipos, nomes de domínio e quaisquer outras características das marcas, são de propriedade exclusiva da Plataforma 500 Cidades e dos respectivos patrocinadores. O Usuário não possui nenhum direito para usar quaisquer características de tais registros, seja para uso comercial ou não comercial. 
</UsualText>

<Chapter>5. Direitos que o Usuário concede a Plataforma 500 Cidades</Chapter>
<UsualText>
Ao acessar a Plataforma 500 Cidades, o Usuário nos concede o direito de mostrar publicidades e outras informações, bem como permitir que nossos parceiros de negócios façam o mesmo. Em qualquer parte da Plataforma 500 Cidades, o conteúdo que o Usuário acessar pode ser influenciado por considerações de natureza comercial.
</UsualText>
<UsualText>
O Usuário concede a Plataforma 500 Cidades uma licença não-exclusiva, transferível, sublicenciável, isenta de royalties, perpétua, irrevogável, sem limitação de território, para usar, reproduzir, disponibilizar ao público (por exemplo, executar ou exibir), publicar, traduzir, modificar, criar trabalhos derivados e distribuir qualquer um de seus Conteúdos de Usuário em conexão com a plataforma através de qualquer meio, seja individualmente ou em combinação com outros conteúdos ou materiais, de qualquer maneira e por qualquer meio, método ou tecnologia, atualmente conhecidos ou posteriormente criados.
</UsualText>
<UsualText>
Ao acessar as áreas da plataforma, caso haja exposição de imagem, o Usuário aceita e autoriza automaticamente o uso da sua imagem para produção de material audiovisual por parte da plataforma e de informações nela contidas ou de seus parceiros e patrocinadores, para uso com fins promocionais e institucionais, de divulgação de informações ou dos produtos de seus patrocinadores.
</UsualText>
<Chapter>6. Ofertas e Promoções</Chapter>
<UsualText>
A Plataforma 500 Cidades e suas informações de georeferenciamento poderão expor eventualmente ofertas, promoções ou concursos, e estes estarão sujeitos a termos e condições específicos, ou regulamento próprio, sobre os quais você, Usuário, será avisado, caso opte por participar.
</UsualText>

<Chapter>7. Limitação de responsabilidade</Chapter>
<UsualText>
A Plataforma 500 Cidades é integrada com ou pode, de outra forma, interagir com aplicativos, sites, dispositivos e serviços de terceiros (“Aplicativos e Dispositivos de Terceiros”). Estes Aplicativos e Dispositivos de Terceiros podem ter seus próprios termos e condições de uso e política de privacidade. O Usuário entende e concorda que a Plataforma 500 Cidades não endossa e não é responsável pelo comportamento, recursos, ou conteúdo de qualquer Aplicativo ou Dispositivo de Terceiros ou por qualquer transação que o Usuário venha a realizar com o provedor de qualquer um desses Aplicativos e Dispositivos de Terceiros.
</UsualText>
<UsualText>
Em nenhum caso, a Plataforma 500 Cidades, seus gestores, patrocinadores, funcionários ou prestadores de serviços terceirizados terão qualquer responsabilidade, direta, especial, indireta ou consequente perda e dano ocorrido ao usuário com relação ao website ou em conexão com a utilização deste, à sua incapacidade de uso ou relativas a resultados da utilização da plataforma, ou de quaisquer outros sites acessados por links através da Plataforma 500 Cidades ou de qualquer material nele postado.
</UsualText>
<UsualText>
A Plataforma 500 Cidades não se responsabiliza pelos conteúdos dos sites com link em nossa aplicação e não será penalizada por qualquer perda ou dano que possa surgir a partir da utilização deles por parte do usuário. Também não será responsabilizado por perda ou dano causado por vírus ou qualquer outro código de computador, arquivo ou programas criados para interromper, restringir, destruir, limitar a funcionalidade ou de qualquer outra forma comprometer a integridade de qualquer outro software ou hardware de computador ou outro equipamento de telecomunicação ou material transmitido com ou como parte das páginas do website ou de qualquer material baixado a partir dele.
</UsualText>



<Chapter>8. DA POLÍTICA DE PRIVACIDADE DA PLATAFORMA 500 CIDADES</Chapter>
<Chapter>8.1 - INFORMAÇÕES GERAIS</Chapter>
<UsualText>
A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários da Plataforma Digital 500 Cidades, com a finalidade de demonstrar absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações pessoais.
</UsualText>
<UsualText>
Esta Política de Privacidade aplica-se a todos os Usuários da Plataforma Digital 500 Cidades e integra os Termos e Condições Gerais de Uso da 500 Cidades, de propriedade e administrada pela Empresa Serviços de Cultura Digital, inscrita no CNPJ sob o nº 31.029.654/0001-71, situada em São Paulo, na Rua José Bento, 102/106, CEP 01523-030 doravante denominada Administradora. 
</UsualText>
<UsualText>
O presente documento foi elaborado em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/18), o Marco Civil da Internet (Lei 12.965/14) (e o Regulamento da UE n. 2016/6790). Ainda, o documento poderá ser atualizado em decorrência de eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção.
</UsualText>


<Chapter>8.2 - COMO RECOLHEMOS OS DADOS PESSOAIS DO USUÁRIO?</Chapter>
<UsualText>
Os dados pessoais do usuário são recolhidos pela Plataforma 500 Cidades da seguinte forma:
</UsualText>
<UsualText>
1. Nome Completo
</UsualText>
<UsualText>
2. Email
</UsualText>
<UsualText>
3. Telefone
</UsualText>
<UsualText>
4. Data de nascimento
</UsualText>
<UsualText>
5. Cidade/Estado
</UsualText>
<UsualText>
6. Idade
</UsualText>
<UsualText>
Quando o Usuário cria um perfil no IDA - IDENTIDADE DIGITAL ATIVISTA: esses dados são os dados de identificação básicos, como e-mail, nome completo e telefone. A partir deles, podemos identificar o Usuário, além de garantir uma maior segurança e bem-estar às suas necessidades. Ficam cientes os Usuários de que seu perfil na Plataforma estará acessível a todos demais Usuários da 500 Cidades. 
</UsualText>
<UsualText>
Quando um Usuário acessa a Plataforma 500 Cidades ou as Plataformas que integram o IDA - IDENTIDADE DIGITAL ATIVISTA: as informações sobre interação e acesso são coletadas pela Empresa Serviços de Cultura Digital para garantir uma melhor experiência ao Usuário. Estes dados podem tratar sobre as palavras-chaves utilizadas em uma busca, comentários, visualizações de páginas, perfis, a URL de onde o Usuário provêm, o navegador que utilizam e seus IPs de acesso, dentre outras que poderão ser armazenadas e retidas.
</UsualText>
<UsualText>
Quando um usuário faz login com o seu IDA - IDENTIDADE DIGITAL ATIVISTA de uma dessas Plataformas. A utilização desses dados é autorizada previamente pelos Usuários junto ao terceiro em questão.
</UsualText>


<Chapter>8.3 - QUAIS DADOS PESSOAIS RECOLHEMOS SOBRE O USUÁRIO?</Chapter>
<UsualText>
Os dados pessoais do Usuário recolhidos são os seguintes:
</UsualText>
<UsualText>
Dados para a criação da conta/perfil na Plataforma 500 Cidades, através da IDA - IDENTIDADE DIGITAL ATIVISTA: nome, email, telefone, data de nascimento, cidade/Estado, idade.
</UsualText>
<UsualText>
Newsletter: o e-mail cadastrado pelo visitante que optar por se inscrever na Newsletter será coletado e armazenado até que o Usuário solicite o descadastro.
</UsualText>
<UsualText>
Dados sensíveis: a Plataforma 500 Cidades, através da IDA - IDENTIDADE DIGITAL ATIVISTA, poderá coletar os seguintes dados sensíveis do usuário: cor/raça; gênero; orientação sexual;  se o Usuário é uma pessoa com deficiência; se sim, qual deficiência.
</UsualText>
<UsualText>
Dados relacionados a contratos: diante da formalização do contrato de prestação de serviços entre a Plataforma 500 Cidades e o Usuário poderão ser coletados e armazenados dados relativos à execução contratual, inclusive as comunicações realizadas entre a Empresa e o Usuário.
</UsualText>



<Chapter>8.4 - PARA QUE FINALIDADES UTILIZAMOS OS DADOS PESSOAIS DO USUÁRIO?</Chapter>
<UsualText>
Os dados pessoais do Usuário coletados e armazenados pela Plataforma 500 Cidades, através da IDA - IDENTIDADE DIGITAL ATIVISTA têm por finalidade:
</UsualText>
<UsualText>
Bem-estar do Usuário: aprimorar o produto e/ou serviço oferecido, facilitar, agilizar e cumprir os compromissos estabelecidos entre o Usuário e a Empresa, melhorar a experiência dos Usuários e fornecer funcionalidades específicas a depender das características básicas do Usuário.
</UsualText>
<UsualText>
Melhorias da Plataforma: compreender como o Usuário utiliza os serviços da Plataforma 500 Cidades, para ajudar no desenvolvimento do projeto.
</UsualText>
<UsualText>
Comercial: os dados são usados para personalizar o conteúdo oferecido e gerar subsídio à Plataforma 500 Cidades para a melhora da qualidade no funcionamento dos serviços.
</UsualText>
<UsualText>
Previsão do perfil do Usuário: tratamento automatizados de dados pessoais para avaliar o uso na Plataforma.
</UsualText>
<UsualText>
Dados de cadastro: para permitir o acesso do Usuário a determinados conteúdos da Plataforma, exclusivo para usuários cadastrados.
</UsualText>
<UsualText>
Dados de contrato: conferir às partes segurança jurídica e facilitar a conclusão do negócio.
</UsualText>
<UsualText>
O tratamento de dados pessoais para finalidades não previstas nesta Política de Privacidade somente ocorrerá mediante comunicação prévia ao Usuário, de modo que os direitos e obrigações aqui previstos permanecem aplicáveis.
</UsualText>
<Chapter>8.5 - POR QUANTO TEMPO OS DADOS PESSOAIS FICAM ARMAZENADOS?</Chapter>
<UsualText>
Os dados pessoais do Usuário são armazenados pela Plataforma 500 Cidades, bem como pela IDA - IDENTIDADE DIGITAL ATIVISTA, durante o período necessário para a prestação do serviço ou o cumprimento das finalidades previstas no presente documento, conforme o disposto no inciso I do artigo 15 da Lei 13.709/18.
</UsualText>
<UsualText>
Os dados podem ser removidos ou anonimizados a pedido do Usuário, excetuando os casos em que a lei oferecer outro tratamento.
</UsualText>
<UsualText>
Ainda, os dados pessoais dos Usuários apenas podem ser conservados após o término de seu tratamento nas seguintes hipóteses previstas no artigo 16 da referida lei:
</UsualText>
<UsualText>
1. Cumprimento de obrigação legal ou regulatória pelo controlador;
</UsualText>
<UsualText>
2. Estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;
</UsualText>
<UsualText>
3. Transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei;
</UsualText>
<UsualText>
4. Uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.
</UsualText>


<Chapter>8.6 - SEGURANÇA DOS DADOS PESSOAIS ARMAZENADOS</Chapter>
<UsualText>
A Plataforma 500 Cidades, através da empresa Serviços de Cultura Digital e da IDA - IDENTIDADE DIGITAL ATIVISTA, compromete-se a aplicar as medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados.
</UsualText>
<UsualText>
A Plataforma não se exime de responsabilidade por culpa exclusiva de terceiro, como em caso de ataque de hackers ou crackers, ou culpa exclusiva do Usuário, como no caso em que ele mesmo transfere seus dados a terceiros. A Plataforma se compromete a comunicar o Usuário em caso de alguma violação de segurança dos seus dados pessoais.
</UsualText>
<UsualText>
Os dados pessoais armazenados são tratados com confidencialidade, dentro dos limites legais. No entanto, podemos divulgar suas informações pessoais caso sejamos obrigados pela lei para fazê-lo ou se você violar nossos Termos de Uso e Serviço.
</UsualText>

<Chapter>8.7 - COMPARTILHAMENTO DOS DADOS</Chapter>
<UsualText>
    O compartilhamento de dados do Usuário ocorre apenas com os dados referentes a publicações realizadas pelo próprio Usuário, tais ações são compartilhadas publicamente com os outros Usuários.
</UsualText>

<Chapter>8.8 – COOKIES OU DADOS DE NAVEGAÇÃO</Chapter>
<UsualText>
Os cookies se referem a arquivos de texto enviados pela Plataforma ao computador do Usuário, e que nele ficam armazenados, com informações relacionadas à navegação no site. Tais informações são relacionadas aos dados de acesso como local e horário de acesso e são armazenadas pelo navegador do Usuário para que o servidor da Plataforma possa lê-las posteriormente a fim de personalizar os serviços da Plataforma.
</UsualText>
<UsualText>
O Usuário da Plataforma 500 Cidades manifesta conhecer e aceitar que pode ser utilizado um sistema de coleta de dados de navegação mediante à utilização de cookies.
</UsualText>
<UsualText>
O cookie persistente permanece no disco rígido do Usuário depois que o navegador é fechado e será usado pelo navegador em visitas subsequentes ao site. Os cookies persistentes podem ser removidos seguindo as instruções do seu navegador. Já o cookie de sessão é temporário e desaparece depois que o navegador é fechado. É possível redefinir seu navegador da web para recusar todos os cookies, porém alguns recursos da Plataforma podem não funcionar corretamente se a capacidade de aceitar cookies estiver desabilitada.
</UsualText>

<Chapter>8.9 - CONSENTIMENTO</Chapter>
<UsualText>
Ao utilizar os serviços e fornecer as informações pessoais na Plataforma 500 Cidades, através da IDA - IDENTIDADE DIGITAL ATIVISTA, o Usuário está consentindo com a presente Política de Privacidade.
</UsualText>
<UsualText>
O Usuário, ao se cadastrar, manifesta conhecer, podendo exercitar seus direitos de cancelar seu cadastro, acessar e atualizar seus dados pessoais, bem como garante a veracidade das informações por ele disponibilizadas.
</UsualText>
<UsualText>
O Usuário tem direito de retirar o seu consentimento a qualquer tempo, para tanto deve entrar em contato através do e-mail servicosdeculturadigital@gmail.com ou por correio enviado ao seguinte endereço Rua José Bento, 102/106 - Cambuci - CEP 01523030 - São Paulo - SP. 
</UsualText>

<Chapter>8.10 - ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE</Chapter>
<UsualText>
Reservamos o direito de modificar essa Política de Privacidade a qualquer momento, então, é recomendável que o Usuário revise-a com frequência.
</UsualText>
<UsualText>
As alterações e esclarecimentos vão surtir efeito imediatamente após sua publicação na Plataforma 500 Cidades. Quando realizadas alterações os Usuários serão notificados. Ao utilizar o serviço ou fornecer informações pessoais após eventuais modificações, o Usuário demonstra sua concordância com as novas normas.
</UsualText>
<UsualText>
Diante da fusão ou venda da Plataforma à outra empresa, os dados dos usuários podem ser transferidos para os novos proprietários para que a permanência dos serviços oferecidos.
</UsualText>

<Chapter>8.11 – JURISDIÇÃO PARA RESOLUÇÃO DE CONFLITOS</Chapter>
<UsualText>
Para a solução de controvérsias decorrentes do presente instrumento será aplicado integralmente o Direito Brasileiro.
</UsualText>
<UsualText>
Os eventuais litígios deverão ser apresentados no foro da comarca em que se encontra a sede da empresa.
</UsualText>


<Chapter>9. Divisibilidade, renúncia e interpretação das disposições</Chapter>
<UsualText>
Salvo disposição em contrário, caso qualquer dos termos aqui enunciados seja considerado nulo ou inexequível por qualquer motivo ou em qualquer medida, tal nulidade ou inexequibilidade não afetará de qualquer forma nem tornará inválidas ou inexequíveis as disposições restantes aqui acordadas. A aplicação da disposição em questão deve ser aplicada na medida máxima permitida por lei.
</UsualText>

<Chapter>10. Disposições finais</Chapter>
<UsualText>
O Usuário concorda em indenizar e manter a Plataforma 500 Cidades ilesa contra todos os danos, perdas e despesas de qualquer natureza (incluindo custas e honorários advocatícios), dentro dos limites legais, decorrentes de ou relacionados com
</UsualText>
<UsualText>
a) violação, de sua parte, destas condições de uso; 
</UsualText>
<UsualText>
b) qualquer Conteúdo de Usuário que você postar ou com o qual contribuir; 
</UsualText>
<UsualText>
c) qualquer atividade na qual você se envolva no ou através do website do NOME; e
</UsualText>
<UsualText>
d) violação, de sua parte, de qualquer lei ou dos direitos de terceiros.
</UsualText>
<UsualText>
Você, Usuário, reconhece e concorda que os proprietários dos conteúdos expostos são também beneficiários do presente termo e têm o direito de fazer cumprir as cláusulas aqui enunciadas diretamente contra você.
</UsualText>
<Chapter>11. Fale Conosco</Chapter>
<UsualText>
Entre em contato conosco pelo e-mail <a href="mailto:servicosdeculturadigital@gmail.com">servicosdeculturadigital@gmail.com</a>
</UsualText>




                <FooterAbout>
                    <ButtonBack
                        cus
                        onClick={() => {
                            history.goBack();
                            dispatch({ type: 'CLOSE_MODAL' })
                        }}
                        className="btn3D--blue"
                    >
                        Voltar
                    </ButtonBack>
                    <SocialMedia>
                        <Logo500Img src={Logo500Cidades} alt="Logo 500 Cidades"/>
                        <SocialIcon src="https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/facebook-dark-purple.svg" />
                        <SocialIcon src="https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/twitter-dark-purple.svg" />
                        <SocialIcon src="https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/instagram-dark-purple.svg" />
                    </SocialMedia>
            </FooterAbout>          
            </Wrapper>
        </Container>
    );
}
export default withRouter(PrivacePolice);