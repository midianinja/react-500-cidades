const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const validateUser = (user) => {
  const errors = [];
  try {
    if(user.biography.length < 20) errors.push({ type: 'biography', error: 'Biografia inválida' });
    
    if(
      !user.birth_date
      || new Date(user.birth_date).toString() === 'Invalid Date'
    ) errors.push({ type: 'birth_date', error: 'Data de nascimento inválida' });
  
    if(!user.cover_image) errors.push({ type: 'cover_image', error: 'Insira uma imagem de fundo' });
    if(regexEmail.test(user.email) ) errors.push({ type: 'email', error: 'E-mail inválido' });
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
  
    return ({ valid: !!errors.length, errors });
  } catch (err) {
    throw err;
  }

};


export const registerAction = ({ event, userInfo, addressInfo, setLoading }) => {
  console.log('userInfo:', userInfo)
  event.preventDefault();
  setLoading(true);
  
  const userValidation = validateUser(userInfo);
  console.log('userValidation:', userValidation);
  
  setLoading(false);
}
