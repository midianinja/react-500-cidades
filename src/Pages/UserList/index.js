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
                console.log(result.data.skills)
            })

    }, [])
    const arr = ["java", "react", "vue"]

    return (
        <>
            <Menu>
                <Routes />
            </Menu>
            <main className="container-usercard gradient">
                {data.map(({ id, name, job, skills }) => (
                    <div className="div-usercard" key={id}>
                        <p className="userinfo">
                            {`Usuário: ${name}`}
                            {`Trabalho: ${job}`}
                        </p>
                        <section class="skills">
                            <div class="skill">
                                <div class="skill-name">{`${skills}`}</div>
                            </div>
                        </section>
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
            </main>

        </>
    )

}
export default UserList;