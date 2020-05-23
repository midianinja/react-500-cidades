import Axios from "axios";
import { getBase64 } from "../../utils/file.utils";
import apollo from "../../service/apollo";
import { registerUserMutation, registerAddressMutation } from "./mutations";

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const filterNumbers = (value) =>  value.replace(/\D/g, "");

const validateUser = (user) => {
  const errors = [];
  try {
    if(user.biography.length < 20) errors.push({ type: 'biography', error: 'Biografia inválida' });
    
    if(
      !user.birth_date
      || new Date(user.birth_date).toString() === 'Invalid Date'
    ) errors.push({ type: 'birth_date', error: 'Data de nascimento inválida' });
  
    if(!user.cover_image) errors.push({ type: 'cover_image', error: 'Insira uma imagem de fundo' });
    if(!regexEmail.test(user.email)) errors.push({ type: 'email', error: 'E-mail inválido' });
    if(!user.facebook) errors.push({ type: 'facebook', error: 'Campo obrigatório' });
    if(!user.gender) errors.push({ type: 'gender', error: 'Campo obrigatório' });
    if(!user.instagram) errors.push({ type: 'instagram', error: 'Campo obrigatório' });
    if(!user.job) errors.push({ type: 'job', error: 'Campo obrigatório' });
    if(!user.name) errors.push({ type: 'name', error: 'Campo obrigatório' });
    if(!user.phone) errors.push({ type: 'phone', error: 'Telefone inválido' });
    if(!user.profile_image) errors.push({ type: 'profile_image', error: 'Campo obrigatório' });
    if(!user.race) errors.push({ type: 'race', error: 'Campo obrigatório' });
    if(!user.sexual_orientation) errors.push({ type: 'sexual_orientation', error: 'Campo obrigatório' });
    if(!user.site_address) errors.push({ type: 'site_address', error: 'Campo obrigatório' });
    if(!user.skills.length) errors.push({ type: 'skills', error: 'Campo obrigatório' });
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
  userInfo, coverImage, profileImage, skills,
}) => ({
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
  birth_date: new Date(userInfo.birth_date),
  genre: userInfo.birth_date,
  sexual_orientation: userInfo.gender,
  race: userInfo.race

})


export const registerAction = async ({
  skills, event, userInfo,
  addressInfo, setLoading,
  dispatch, history, setErrors,
}) => {
  event.preventDefault();
  try {
    setLoading(true);
  
    const userValidation = validateUser({ ...userInfo, skills, addressInfo });
    if (!userValidation.valid) {
      window.scrollTo(0, 0);
      throw new Error(JSON.stringify(userValidation.errors));
    }

    const base64Cover = await getBase64(userInfo.cover_image.file);
    const base64Profile = await getBase64(userInfo.profile_image.file);

    const coverImage = await sendImageToApi({ base64: base64Cover });
    const profileImage = await sendImageToApi({ base64: base64Profile });
    const mappedUser = await mapUserToApi({
      userInfo, skills,
      coverImage: coverImage.data.data.urls,
      profileImage: profileImage.data.data.urls,
    });

    const registeredUser = await sendUserToApi(mappedUser);
    await apollo.mutate({
      mutation: registerAddressMutation,
      variables: {
        address: { ...addressInfo, user: registeredUser.data.createUser.id },
      }
    });
    setLoading(false);
    dispatch({
      type: 'SET_PRE_REGISTER_ID',
      data: registeredUser.data.createUser.id,
    });
    dispatch({
      type: 'TOGGLE_REGISTER_MODAL',
      data: true,
    });
  } catch(err) {
    console.log('err:', err)
    const errors = JSON.parse(err.message)
    const errorObj = {};
    errors.forEach(err => errorObj[err.type] = err.error)
    
    setErrors(errorObj)
    setLoading(false);
    dispatch({
      type: 'SHOW_TOAST',
      data: {
        error: true,
        msg: 'O formulário possui campos inválidos.',
      },
    });
  }
  
}
