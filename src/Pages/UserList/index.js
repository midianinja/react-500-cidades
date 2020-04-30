import React, { useContext } from 'react';
import Routes from '../../routes';
import Menu from '../../components/Menu';
import './styles.css';
import ToggleButton from '../../components/ToggleButton';
import { Link } from "react-router-dom";
import logoCircleImg from '../../assets/logo-circle.png';
import Input from '../../components/Input';
import { FaSearch } from 'react-icons/fa';
import AllUsers from '../../context/AllUsersContext';

const UserList = () => {
    const {state} = useContext(AllUsers);
    console.log(state)
    return (
        <>
            <Menu>
                <Routes />
            </Menu>
            <main className="container-usercard">
                <div className="search-icon">
                    <Input
                        name="name"
                        type="text"
                        inputClass="name-input"
                        autofocus={true}
                        maxlength="33"
                        style={{ "color": "black" }}
                        placeholder="Faça sua busca"
                    />
                    <label>
                        <FaSearch />
                    </label>
                </div>
                <div className="infolist">
                    <p>Agente</p>
                    <p>Local</p>
                    <p>Tags</p>
                </div>
                {state.map(agent => (
                    <div className="div-usercard" key={agent.id}>
                        <div className="userinfo">
                            <img
                                className="user-info--img"
                                alt="user-photo"
                                src={agent.profile_image.mimified}
                            />
                            <div className="user">
                                <p className="p-name">{agent.name}</p>
                                <p  className="p-city">{agent.address.city} / {agent.address.state}</p>
                                <p className="p-job">{agent.job}</p>
                            </div>
                        </div>
                        <div className="skills">
                            {agent.skills.map(( skill, index ) => (
                                <div className="skill" key={index}>
                                    <p className="skill-name">{skill}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                ))
                }
                <div className="links-fixos">
                    <p>Tipo de Vizualização</p>
                    <Link to="/mapa">
                        <ToggleButton className="btn-toggle">Mapa</ToggleButton>
                    </Link>
                    <Link to="/userlist">
                        <ToggleButton className="btn-toggle--blue">Lista</ToggleButton>
                    </Link>
                </div>
            </main>

        </>
    )

}
export default UserList;