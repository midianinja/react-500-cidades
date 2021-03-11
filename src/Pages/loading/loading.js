import React, { useContext } from 'react';
import Loading from '../../components/ida/components/loading/Loading';
import Store from '../../store/Store';
import {
  Wrapper,
} from './loading.style';


const Landing = () => {
  const { state } = useContext(Store);
  if(!state.modals.loading) return null;
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Loading />
    </Wrapper>
  );
}

export default Landing;
