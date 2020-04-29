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
    return (
        <>
            <Menu>
                <Routes />
            </Menu>
            <main className="container-usercard gradient">
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
                        <FaSearch/>
                    </label>
                </div>

                {state.map(agent => (
                    <div className="div-usercard" key={agent.id}>
                        <div className="userinfo">
                            <img
                                className="logo-img"
                                src={logoCircleImg}
                                alt="Logotipo 500 Cidades"
                            />
                            <div className="user">
                                <p>{agent.name}</p>
                                <p>{agent.address.city} / {agent.address.state}</p>
                                <p>{agent.job}</p>
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
                <div className="pagination links-fixos">
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