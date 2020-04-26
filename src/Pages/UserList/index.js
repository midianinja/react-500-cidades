import React, { useEffect, useState } from 'react';
import Routes from '../../routes';
import Menu from '../../components/Menu';
import './styles.css';
import { userQueries } from "./queries";
import apollo from '../../service/apollo';
import Button from '../../components/Button'
import { Link } from "react-router-dom";

const UserList = () => {

    const [data, setData] = useState([]);
    const [address, setAddress] = useState([]);

    useEffect(() => {
        apollo.query({
            query: userQueries,
            variables: {
                user: {}
            }
        })
            .then(result => {
                setData(result.data.allUsers)
                setAddress(result.data.allAdresses)
            })

    }, [])


    return (
        <>
            <Menu>
                <Routes />
            </Menu>
            <main className="container-usercard gradient">
                {data.map(({ id, name, job }) => (
                    <div className="div-usercard" key={id}>
                        <p className="userinfo">
                            {`Usuário: ${name}`}
                            {`Trabalho: ${job}`}
                        </p>
                        <section class="skills">
                            {data.map(({ skills }) => (
                                <div class="skill">
                                    <p class="skill-name">{`${skills}`}</p>
                                </div>
                            ))}

                        </section>
                    </div>

                ))
                }
                <div className="botoes">
                    <Link to="/usermap">
                        <Button className="links-fixos">Mapa</Button>
                    </Link>
    
                </div>
            </main>

        </>
    )

}
export default UserList;