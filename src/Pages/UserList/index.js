import React, { useEffect, useState } from 'react';
import Routes from '../../routes';
import Menu from '../../components/Menu';
import './styles.css';
import { userQueries } from "./queries";
import apollo from '../../service/apollo';
import ToggleButton from './components/ToggleButton'
import { Link } from "react-router-dom";
import logoCircleImg from '../../assets/logo-circle.png';
import Input from '../../components/Input';
import { FaSearch } from 'react-icons/fa'

const UserList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        apollo.query({
            query: userQueries,
            variables: {
                user: {}
            }
        })
            .then(result => {
                setData(result.data.allUsers)

                console.log(result.data.allUsers)
            })

    }, [])

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
                {data.map(({ id, name, job, skills }) => (
                    <div className="div-usercard" key={id}>
                        <div className="userinfo">
                            <img
                                className="logo-img"
                                src={logoCircleImg}
                                alt="Logotipo 500 Cidades"
                            />
                            <div className="user">
                                <p>{name}</p>
                                <p>{job}</p>
                            </div>
                        </div>
                        <div className="skills">
                            {skills.map((skill) => (
                                <div className="skill">
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