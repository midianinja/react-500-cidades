import React from 'react';
import {
      Title,
      Wrapper,
      Container
    } from './termsOfUse.style';
    import Menu from '../../components/Menu';
    import NavigationBar from '../../components/NavigationBar';
    import Button from '../../components/Button';
import { withRouter } from 'react-router-dom';

const About = ({history}) => {
      return (
          <Container>
          <NavigationBar />
          <Menu />
          <Wrapper>
              <Title>Termos de Uso</Title>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Duis auteur irure pain in reprehenderit in voluptate velit this cillum dolore eu fugiat nulla pariatur. Excepteur sint occecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Duis auteur irure pain in reprehenderit in voluptate velit this cillum dolore eu fugiat nulla pariatur. Excepteur sint occecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Duis auteur irure pain in reprehenderit in voluptate velit this cillum dolore eu fugiat nulla pariatur. Excepteur sint occecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Duis auteur irure pain in reprehenderit in voluptate velit this cillum dolore eu fugiat nulla pariatur. Excepteur sint occecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <div>
              <Button onClick={() => history.push('/')} className="btn3D--blue">Voltar</Button>
              </div>
                  
          </Wrapper>
          </Container>
      );
  }

export default withRouter(About);