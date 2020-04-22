import React from 'react';
import Routes from '../../routes';
import Menu from '../../components/Menu';
import './styles.css';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';


const USER_INFO = gql`
  {
    users {
      id
      name
    }
  }
`;

const UserList = () => {

    const { loading, error, data } = useQuery(USER_INFO);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <>
            <Menu>
                <Routes />
            </Menu>
            {data.users.map(({ id, name }) => (
                <div key={id}>
                    <p>
                        {id}: {name}
                    </p>
                </div>

            ))};
        </>
    )

}
export default UserList;