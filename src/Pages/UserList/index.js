import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import './styles.css';
import ToggleButton from '../../components/ToggleButton';
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import Store from '../../store/Store'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ShowProfile from '../../components/ShowProfile'
import { getUsers } from './list.controller'

const Wrapper = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: white;
    height: 100vh;
    overflow-x: auto;
`;

const ContainerTopList = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    padding: 0 20px;
    // display:flex;
    // flex-direction:column;
    // align-items: center;
    // width:100vw;
    // margin: 0 auto;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`;

const InputContainer = styled.form`
    width: 100%;
    max-width: 50vw;
    position: relative;
    @media (min-width: 768px) {
        order: 1;
        padding: 0px;
        margin: 10px 0px 40px 23px;
    }
`;

const renderList = (list, dispatch) => list.filter((usr) => usr.address).map(agent => (
    <div className="div-usercard" onClick={() => dispatch({ type: 'SHOW_PROFILE', data: agent.id })} key={agent.id} >
        <div className="userinfo" >
            <img
                className="user-info-img"
                alt="Agente"
                src={agent.profile_image.mimified}
            />
            <div className="user">
                <p className="p-name">{agent.name}</p>
                <p className="p-city">{agent.address.city} / {agent.address.state}</p>
                <p className="p-job">{agent.job}</p>
            </div>
        </div>
        <div className="skills">
            {agent.skills.map((skill, index) => (
                <div className="skill" key={index}>
                    <p className="skill-name">{skill}</p>
                </div>
            ))}
        </div>

    </div>
))

const UserList = () => {
    const { state, dispatch } = useContext(Store);
    const [value, setVaue] = useState('');
    const [wordFetch, setWordFetch] = useState('');
    const [users, setUsers] = useState(state.allusers);
    useEffect(() => {
        setUsers(state.allusers)
    }, [state.allusers])
    if (!state.modals.list) return null;
    return (
        <Wrapper>
            <NavigationBar />
            <Menu />
            <ContainerTopList>
                <div className="links-fixos">
                    <p>Tipo de Vizualização</p>
                    <Link to="/" onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                        <ToggleButton className="btn-toggle">Mapa</ToggleButton>
                    </Link>
                    <Link to="/?page=lista" onClick={() => dispatch({ type: 'OPEN_MODAL', modal: 'llist' })}>
                        <ToggleButton className="btn-toggle--blue">Lista</ToggleButton>
                    </Link>
                </div>
                <InputContainer onSubmit={(e) => getUsers(e, value, setUsers, setWordFetch)}>
                    <input
                        name='search'
                        type='text'
                        placeholder='Procurar...'
                        onChange={({ target }) => setVaue(target.value)}
                        id='search'
                        className='input-container--search'
                    />
                    <span className='input-container--icon'><FaSearch size={20} color="#888" /></span>
                </InputContainer>
                {wordFetch ? <h1 className="title-search">Você procurou por <strong>{users.length} Agentes</strong> em <strong>{wordFetch}</strong> </h1> : null}
            </ContainerTopList>
            <main className="container-usercard">
                <div className="infolist">
                    <div className="infolist-wrapper">
                        <div><p>Agente</p></div>
                        <div><p>Tags</p></div>
                    </div>
                </div>
                <div className="container-list">
                    {state.loading ? <p>Carregando...</p> : renderList(users, dispatch)}
                </div>
            </main>
            <ShowProfile />
        </Wrapper>
    )

}
export default UserList;