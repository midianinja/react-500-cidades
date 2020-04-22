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
            user: {

            }
        }
    })

    return (
        <>
            <Menu>
                <Routes />
            </Menu>
            {/* {data.users.map(({ id, name }) => (
                <div key={id}>
                    <p>
                        {id}: {name}
                    </p>
                </div>

            ))}; */}
        </>
    )

}
export default UserList;