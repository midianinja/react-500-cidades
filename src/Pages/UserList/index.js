import React, { useEffect, useState } from 'react';
import Routes from '../../routes';
import Menu from '../../components/Menu';
import './styles.css';
import { userQueries } from "./queries";
import apollo from '../../service/apollo';
// import Button from '../../components/Button'
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
            <section className="container-usercard">
                {data.map(({ id, name, job, skills }) => (
                    <div className="div-usercard" key={id}>
                        <p className="userinfo">   {`ID: ${id}`}
                            {`Usuário: ${name}`}
                            {`Trabalho: ${job}`}
                        </p>
                        <p className="card--blue"> {`${skills}`}</p>
                    </div>
                ))
                }
                {/* {address.map(({ id, city }) => (
                    <div key={id}>
                        <p>
                            {`Cidade: ${city}`}

                        </p>
                    </div>
                ))
                } */}
            </section>

        </>
    )

}
export default UserList;