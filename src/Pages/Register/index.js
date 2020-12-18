import React, { useState, useEffect, useContext } from 'react';
import { FaPen, FaSave } from "react-icons/fa";
import options from './register.model';
import Input from '../../components/Input';
import InputFile from '../../components/InputFile';
import Select from '../../components/Select';
import './styles.css';
import { registerAction } from './controller';
import { withRouter } from 'react-router-dom';
import Form from './components/Form';
import Store from '../../store/Store';
import Menu from '../../components/Menu';
import NavigationBar from '../../components/NavigationBar';
import RegisterModal from '../../components/ida/register/Register.modal';

const getMapsProperty = (placeResults, id) => {
  const component = placeResults.address_components.find(i => i.types.includes(id));
  return component ? component.long_name : '';
}

const renderNameField = ({
  edit, setEdit, userInfo, onChangeUserInfo,
  error,
}) => {
  if (!edit) {
    return (
      <>
        <h1 onClick={() => setEdit(true)} className="add-name">{userInfo.name || 'Seu Nome'}</h1>
        <FaPen className="icons-input" size={20} color="#888" onClick={() => setEdit(true)} />
        {error ? <span className="error error-register-name">{error}</span> : null}
      </>
    );
  }

  return (
    <>
      <div className="add-name">
        <Input
          name="name"
          id="name"
          value={userInfo.name}
          onChange={onChangeUserInfo}
          type="text"
          inputClass="register-name-input"
          error={error}
          autofocus={true}
          maxlength="33"
          style={{ "width": userInfo.name.length + 'ch' }}
          onBlur={() => setEdit(false)}
        />
      </div>
      <FaSave className="icons-input" size={20} color="#888" onClick={() => setEdit(false)} />
    </>
  );
}

const Register = ({ history }) => {
  const [edit, setEdit] = useState(false);
  const { dispatch } = useContext(Store);
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
    instagram: '',
    facebook: '',
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

  return (
    <>
      <NavigationBar />
      <div className="register-container">
        <Menu />
        <section className="register-cover">
          <div className={!userInfo.cover_image ? "cover-photo gradient" : "cover-photo"} style={{ backgroundImage: `url(${userInfo.cover_image.url})` }}>
            <div className={!userInfo.cover_image ? "cover-wrapper" : "cover-wrapper photo-gradient"}>
              <InputFile
                id="cover_image"
                name="cover_image"
                value={userInfo.cover_image}
                onChange={(e) => setUserInfo({
                  ...userInfo,
                  cover_image: { file: e.target.files[0], url: URL.createObjectURL(e.target.files[0]) },
                })}
                inputClass="cover-image"
              />
              <div className="add-photo" style={{ backgroundImage: `url(${userInfo.profile_image.url})` }}>
                <InputFile
                  borderRadius="100%"
                  id="profile_image"
                  name="profile_image"
                  value={userInfo.profile_image}
                  onChange={(e) => setUserInfo({
                    ...userInfo,
                    profile_image: { file: e.target.files[0], url: URL.createObjectURL(e.target.files[0]) },
                  })}
                  inputClass="profile-image"
                />
              </div>
              <div className="register-text">
                <div className="register-edit-text">
                  {renderNameField({ edit, setEdit, userInfo, onChangeUserInfo, error: errors.name })}
                </div>
                <Select
                  options={options.job.sort()}
                  name="job"
                  id="job"
                  value={userInfo.job || 'Profissão'}
                  error={errors.job}
                  onChange={onChangeUserInfo}
                  selectClass="job-select"
                  optionClass="job-option"
                  defaultName="Profissão"
                />
              </div>
            </div>
          </div>
        </section>
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
            setErrors,
          })}
          setLoading={setLoading}
          loading={loading}
          skills={skills}
          setSkills={setSkills}
        />
      </div>
    </>
  );
}

export default withRouter(Register);
