import fetch from 'node-fetch';
import { oneUserQuery } from './queries';
import apollo from '../../service/apollo';

export async function validateToken(ida, token) {
  return fetch(`${process.env.REACT_APP_IDA_AUTH_API_URI}/validate-email-token`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ida,
      token,
    }),
  });
}

export async function getUser(ida) {
  return apollo.query({
    query: oneUserQuery,
    variables: {
      user: {
        ida_id: ida,
      }
    },
  });
}

export async function getIDA(ida) {
  return fetch(`${process.env.REACT_APP_IDA_AUTH_API_URI}/user/${ida}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
