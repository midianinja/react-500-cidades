import Axios from "axios";
import { getBase64 } from "../../utils/file.utils";
import apollo from "../../service/apollo";
import { registerUserMutation, registerAddressMutation } from "./mutations";
import { strToDateDDMMYYYY } from "../../utils/date.utils";

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const filterNumbers = (value) =>  value.replace(/\D/g, "");

const validateUser = (user) => {
  const errors = [];
  try {
    // if(user.biography.length < 20) errors.push({ type: 'biography', error: 'Biografia inválida' });
    
    if(
      !user.birth_date
      || new Date(`${user.birth_date.slice(-4)}-${user.birth_date.slice(2, -4)}-${user.birth_date.slice(0, 2)}`).toString() === 'Invalid Date'
    ) errors.push({ type: 'birth_date', error: 'Data de nascimento inválida' });
  
    // if(!user.cover_image) errors.push({ type: 'cover_image', error: 'Insira uma imagem de fundo' });
    if(!regexEmail.test(user.email)) errors.push({ type: 'email', error: 'E-mail inválido' });
    // if(!user.facebook) errors.push({ type: 'facebook', error: 'Campo obrigatório' });
    // if(!user.gender) errors.push({ type: 'gender', error: 'Campo obrigatório' });
    // if(!user.instagram) errors.push({ type: 'instagram', error: 'Campo obrigatório' });
    // if(!user.job) errors.push({ type: 'job', error: 'Campo obrigatório' });
    if(!user.name) errors.push({ type: 'name', error: 'Campo obrigatório' });
    // if(!user.phone) errors.push({ type: 'phone', error: 'Telefone inválido' });
    // if(!user.profile_image) errors.push({ type: 'profile_image', error: 'Insira uma imagem de perfil' });
    // if(!user.race) errors.push({ type: 'race', error: 'Campo obrigatório' });
    // if(!user.sexual_orientation) errors.push({ type: 'sexual_orientation', error: 'Campo obrigatório' });
    // if(!user.skills.length) errors.push({ type: 'skills', error: 'Campo obrigatório' });
    if(!user.addressInfo.zipcode) errors.push({ type: 'zipcode', error: 'Campo obrigatório' });
  
    return ({ valid: !errors.length, errors });
  } catch (err) {
    throw err;
  }

};

const sendImageToApi = ({ base64 }) => {
  return Axios.post(
    process.env.REACT_APP_MEDIA_API_URI,
    { file: base64 },
    {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY,
      }
    },
  );
}

const sendUserToApi = (user) => {
  return apollo.mutate({
    mutation: registerUserMutation,
    variables: { user: user }
  });
}

const mapUserToApi = ({
  userInfo, coverImage, profileImage, skills, auth,
}) => ({
  ida_id: auth.ida,
  name: userInfo.name,
  profile_image: profileImage,
  cover_image: coverImage,
  biography: userInfo.biography,
  skills: skills,
  email: userInfo.email,
  instagram: userInfo.instagram,
  facebook: userInfo.facebook,
  phone: filterNumbers(`55${userInfo.phone}`).slice(0, 11),
  job: userInfo.job,
  site_address: userInfo.site_address,
  birth_date: new Date(strToDateDDMMYYYY(userInfo.birth_date)),
  genre: userInfo.gender,
  sexual_orientation: userInfo.sexual_orientation,
  race: userInfo.race
});

const getValidationErrors = ({
  err, setErrors, setLoading, dispatch,
}) => {
  const errors = JSON.parse(err.message)
  const errorObj = {};
  let msg = 'O formulário possui campos inválidos.';
  errors.forEach(err => errorObj[err.type] = err.error)
  if (errorObj.cover_image) msg = 'errorObj.cover_image';
  if (errorObj.profile_image) msg = errorObj.profile_image;
  
  setErrors(errorObj)
  setLoading(false);
  dispatch({
    type: 'SHOW_TOAST',
    data: {
      error: true,
      msg: msg,
    },
  });
};

const getGraphqlErrors = ({
  err, setErrors, setLoading, dispatch,
}) => {
  const messages = err.map(err => err.message);
  const errObj = {};
  messages.forEach(msg => {
    if (msg.indexOf('email_1 dup key') !== -1) {
      errObj.email = 'Email já cadastrado';
    }
  });
  
  setErrors(errObj)
  setLoading(false);
  dispatch({
    type: 'SHOW_TOAST',
    data: {
      error: true,
      msg: errObj.email ? errObj.email : '',
    },
  });
}


export const registerAction = async ({
  skills, event, userInfo, auth,
  addressInfo, setLoading, users,
  dispatch, history, setErrors,
}) => {
  console.log('🚀 ~ file: controller.js ~ line 131 ~ users', users);
  event.preventDefault();
  try {
    setLoading('validando usuário...');
  
    const userValidation = validateUser({ ...userInfo, skills, addressInfo, auth });
    if (!userValidation.valid) {
      window.scrollTo(0, 0);
      throw new Error(JSON.stringify(userValidation.errors));
    }
    setLoading('Tratando imagens...');
    let urlImageCover = {};
    let urlImageProfile = {};

    if (userInfo.cover_image.file) {
      setLoading('Subindo foto de capa...');
      const base64Cover = await getBase64(userInfo.cover_image.file);
      const coverImage = await sendImageToApi({ base64: base64Cover });
      urlImageCover = coverImage.data.data.urls;
    }
    if (userInfo.profile_image.file) {
      setLoading('Subindo foto de perfil...');
      const base64Profile = await getBase64(userInfo.profile_image.file);
      const profileImage = await sendImageToApi({ base64: base64Profile });
      urlImageProfile = profileImage.data.data.urls
    }
    const mappedUser = await mapUserToApi({
      userInfo, skills,
      coverImage: urlImageCover,
      profileImage: urlImageProfile,
      auth,
    });
    
    setLoading('Salvando usuário...');
    const registeredUser = await sendUserToApi(mappedUser);
    console.log('🚀 ~ file: controller.js ~ line 165 ~ registeredUser', registeredUser);
    setLoading('Salvando Endereço...');
    const registeredAddress = await apollo.mutate({
      mutation: registerAddressMutation,
      variables: {
        address: { ...addressInfo, user: registeredUser.data.createUser.id },
      }
    });
    console.log('🚀 ~ file: controller.js ~ line 173 ~ registeredAddress', registeredAddress);
    setLoading(false);
    history.push('/');
    dispatch({ type: 'CLOSE_MODAL' });
    dispatch({ type: 'SET_USER', data: {...registeredUser.data.createUser, address: registeredAddress.data.createAddress } });
    console.log('🚀 ~ file: controller.js ~ line 182 ~ users', users);
    const allUsers = JSON.parse(JSON.stringify(users));
    console.log('🚀 ~ file: controller.js ~ line 180 ~ allUsers', allUsers);
    dispatch({ type: 'SET_ALL_USERS', data: [...allUsers, {...registeredUser.data.createUser, address: registeredAddress.data.createAddress }] });
  } catch(err) {
    try {
    console.log('🚀 ~ file: controller.js ~ line 180 ~ err', [err]);
      if (err.graphQLErrors) {
        return getGraphqlErrors({
          err: err.graphQLErrors, setErrors, setLoading, dispatch,
        });
      } else {
        getValidationErrors({
          err, setErrors, setLoading, dispatch,
        });
      }
    } catch (err) {
      console.log('Erro inesperado', [err]);
      setLoading(false);
      dispatch({
        type: 'SHOW_TOAST',
        data: {
          error: true,
          msg: 'Erro inesperado',
        },
      });
    }
  }
  
}
