import React, { useState, useEffect, useContext } from 'react';
import options from './register.model';
import Input from '../../components/simple-Input/Input';
import InputFile from '../../components/InputFile';
import { registerAction } from './controller';
import { withRouter } from 'react-router-dom';
import Form from './components/form/form';
import Store from '../../store/Store';
import Menu from '../../components/Menu';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import {
  CoverSize, MainFields, AddPhotoButton,
  CoverWrapper, Cover, RegisterContainer,
  RegisterWrapper, customInputStyle, Wrapperinputs,
  AddPhotoButtonMobile, ProfileImageConteiner,
} from './register.style';
import JobInput from './components/job-input/jobInput';



const getMapsProperty = (placeResults, id) => {
  const component = placeResults.address_components.find(i => i.types.includes(id));
  return component ? component.long_name : '';
}

const Register = ({ history }) => {
  const { dispatch, state } = useContext(Store);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: '',
    job: '',
    profile_image: '',
    cover_image: '',
    biography: '',
    skills: [],
    email: '',
    phone: '',
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    site_address: '',
    birth_date: '',
    gender: '',
    sexual_orientation: '',
    race: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    job: '',
    profile_image: '',
    cover_image: '',
    biography: '',
    skills: '',
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    site_address: '',
    birth_date: '',
    gender: '',
    sexual_orientation: '',
    race: '',
    zipcode: '',
  });
  
  const [addressInfo, setAddressInfo] = useState({
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    zipcode: '',
    state: '',
    country: '',
    place_id: '',
    geometry: {},
    latitude: null,
    longitude: null
  });

  const onChangeUserInfo = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value,
    });
  };
  
  const getAddress = async (zipcodeInput) => {
    try {
      const zipcodeAddress = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcodeInput}&language=pt&key=${process.env.REACT_APP_MAP_KEY}`);
      const result = await zipcodeAddress.json();
      if (result.results.length > 0) {
        const placeResults = result.results[0];
        setAddressInfo(addressInfo => ({
          ...addressInfo,
          city: getMapsProperty(placeResults, "administrative_area_level_2"),
          state: getMapsProperty(placeResults, "administrative_area_level_1"),
          country: getMapsProperty(placeResults, "country"),
          district: getMapsProperty(placeResults, "sublocality"),
          geometry: placeResults.geometry.bounds,
          place_id: placeResults.place_id,
          latitude: placeResults.geometry.location.lat,
          longitude: placeResults.geometry.location.lng
        }));
      } else {
        throw new Error("Couldn't find zipcode")
      }
    } catch (error) {
      return console.error(error);
    }
  }
  
  useEffect(() => {
    const myZipcode = addressInfo.zipcode.replace(/-/g, "");
    if (myZipcode.length === 8) {
      getAddress(myZipcode);
    }
  }, [addressInfo.zipcode])
  useEffect(() => {
    if (state.modals.register) {
      if (!state.auth) {
        history.push('/mapa/?page=landing');
        dispatch({ type: 'OPEN_MODAL', modal: 'landing'});
      }
      if (state.user) {
        history.push('/');
        dispatch({ type: 'CLOSE_MODAL'});
      }
    }
  }, [state.user, state.auth, state.modals]);
  if (!state.modals.register) return null;
  
  return (
    <RegisterWrapper>
      <NavigationBar />
      <Menu />
      <RegisterContainer>
        <CoverWrapper cover_image={userInfo.cover_image.url}>
          <Cover>
            <Wrapperinputs>
              <InputFile
                id="cover_image"
                name="cover_image"
                label="Alterar Capa"
                value={userInfo.cover_image}
                onChange={(e) => setUserInfo({
                  ...userInfo,
                  cover_image: { file: e.target.files[0], url: URL.createObjectURL(e.target.files[0]) },
                })}
                customStyle={'position: absolute; top: 20px; right: 20px;'}
              />
              <ProfileImageConteiner>
                <AddPhotoButton style={{ backgroundImage: `url(${userInfo.profile_image.url})` }}>
                  <InputFile
                    borderRadius="100%"
                    id="profile_image"
                    name="profile_image"
                    value={userInfo.profile_image}
                    onChange={(e) => setUserInfo({
                      ...userInfo,
                      profile_image: { file: e.target.files[0], url: URL.createObjectURL(e.target.files[0]) },
                    })}
                  />
                </AddPhotoButton>
                <AddPhotoButtonMobile htmlFor="profile_image">
                  Alterar Foto
                </AddPhotoButtonMobile>
              </ProfileImageConteiner>
              <MainFields>
                <Input
                  customStyle={customInputStyle}
                  name="name"
                  placeholder="Digite seu nome aqui"
                  id="name"
                  value={userInfo.name}
                  onChange={onChangeUserInfo}
                  type="text"
                  inputClass="register-name-input"
                  error={errors.name}
                  maxlength="33"
                  style={{ "width": userInfo.name.length + 'ch' }}
                  onBlur={() => setEdit(false)}
                  />
                <JobInput
                  options={options.job.sort()}
                  name="job"
                  value={userInfo.job || 'Selecione sua profissão'}
                  error={errors.job}
                  onChange={onChangeUserInfo}
                  />
              </MainFields>
              <CoverSize>Tamanho: 4:1</CoverSize>
            </Wrapperinputs>
          </Cover>
        </CoverWrapper>
        <Form
          errors={errors}
          userInfo={userInfo}
          onChangeUserInfo={(e) => {
            setUserInfo({
              ...userInfo,
              [e.target.id]: e.target.value,
            })
          }}
          setUserInfo={setUserInfo}
          addressInfo={addressInfo}
          onChangeAddressInfo={(e) => setAddressInfo({
            ...addressInfo,
            [e.target.id]: e.target.value,
          })}
          onSubmit={(event) => registerAction({
            event, userInfo, dispatch, history,
            addressInfo, setLoading, skills,
            setErrors, auth: state.auth
          })}
          setLoading={setLoading}
          loading={loading}
          optionsJob={options}
          skills={skills}
          setSkills={setSkills}
        />
      </RegisterContainer>
    </RegisterWrapper>
  );
}

export default withRouter(Register);
