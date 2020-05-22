import axios from 'axios';
// import { oneUserQuery } from './queries';
// import apollo from '../../../service/apollo';

export async function getUser(ida) {
  // return apollo.query({
  //   query: oneUserQuery,
  //   variables: {
  //     ida,
  //   },
  // });
}

export async function authorize(username, password) {
  return axios.post(
    `${process.env.REACT_APP_IDA_AUTH_API_URI}/login`,
    { username, password },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  );
}

export async function getIDA(ida) {
  return axios.get(`${process.env.REACT_APP_IDA_AUTH_API_URI}/user/${ida}`);
}

export const ignore = null;
