import axios from 'axios';
import apollo from '../../../service/apollo';
import { oneUserQuery } from './queries';

export async function createIDA(username, password) {
  return axios.post(`${process.env.REACT_APP_IDA_AUTH_API_URI}/signup`, {
    username,
    password,
  });
}

export async function generatePhoneCode(ida, phone) {
  return axios.post(`${process.env.REACT_APP_IDA_AUTH_API_URI}/phone-generate-code`, {
    ida,
    phone,
  });
}

export async function validatePhoneCode(ida, code) {
  return axios.post(`${process.env.REACT_APP_IDA_AUTH_API_URI}/phone-validate-code`, {
    ida,
    code,
  });
}

export async function sendValidationEmail(ida, email) {
  return axios.post(`${process.env.REACT_APP_IDA_AUTH_API_URI}/send-email-validation`, {
    ida,
    email,
  });
}

export async function getIDA(ida) {
  return axios.get(`${process.env.REACT_APP_IDA_AUTH_API_URI}/user/${ida}`);
}

export async function getUser(ida) {
  return apollo.query({
    query: oneUserQuery,
    variables: {
      ida,
    },
  });
}
