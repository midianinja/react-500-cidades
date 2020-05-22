import React, { useContext, useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import './styles.css';
import ToggleButton from '../../components/ToggleButton';
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import Store from '../../store/Store'
import NavigationBar from '../../components/NavigationBar';
import ShowProfile from '../../components/ShowProfile'
import { getUsers } from './list.controller'

const renderList = (list, dispatch) => list.filter((usr) => usr.address).map(agent => (
    <div className="div-usercard" onClick={() => dispatch({ type: 'SHOW_PROFILE', data: agent.id })} key={agent.id} >
        <div className="userinfo" >
            <img
                className="user-info--img"
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
    const [users, setUsers] = useState(state.allusers);
    useEffect(() => {
        setUsers(state.allusers)
    }, [state.allusers])
    return (
        <>
            <NavigationBar />
            <Menu />
            <main className="container-usercard">
                <form onSubmit={(e) => getUsers(e, value, setUsers)} className='input-container'>
                    <input
                        name='search'
                        type='text'
                        placeholder='Procurar...'
                        onChange={({ target }) => setVaue(target.value)}
                        id='search'
                        className='input-container--search'
                    />
                    <span className='input-container--icon'><FaSearch size={20} color="#888" /></span>
                </form>
                <h1 className="title-search">Você procurou por <strong>{users.length} Agentes</strong> em <strong>São Paulo</strong> </h1>
                <div className="infolist">
                    <p>Agente</p>
                    <p>Local</p>
                    <p>Tags</p>
                </div>
                <div className="container-list">
                    {state.loading ? <p>Carregando...</p> : renderList(users, dispatch)}
                </div>
                <div className="links-fixos">
                    <p>Tipo de Vizualização</p>
                    <Link to="/usuario/mapa">
                        <ToggleButton className="btn-toggle">Mapa</ToggleButton>
                    </Link>
                    <Link to="/usuario/lista-de-agentes">
                        <ToggleButton className="btn-toggle--blue">Lista</ToggleButton>
                    </Link>
                </div>
            </main>
            <ShowProfile />
        </>
    )

}
export default UserList;