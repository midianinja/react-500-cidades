import React from 'react';
import Routes from '../../routes';
import Menu from '../../components/Menu';
import './styles.css';
import { userQueries } from "./queries";
import apollo from '../../service/apollo';




const UserList = () => {

    apollo.query({
        query: userQueries,
        variables: {
            user: {}
        }
    })
        .then(result => {
            const data = result


            console.log(data.data.allUsers) 
        })



    return (
        <>
            <Menu>
                <Routes />
            </Menu>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading</p>
                if (error) return <p>Error</p>

                return data.data.allUsers.map(({ id, name }) => (
                    <div key={id}>
                        <p>
                            {`Usuário: ${name}`}
                        </p>
                    </div>
                ))

            }

            }
        </>
    )

}
export default UserList;