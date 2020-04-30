import React, { useState, useEffect, useContext } from 'react';
import { FaPen, FaSave } from "react-icons/fa";
import options from './register.model';
import Input from '../../components/Input';
import InputFile from '../../components/InputFile';
import Select from '../../components/Select';
import './styles.css';
import { registerAction } from './controller';
import Form from './components/Form';
import Store from '../../store/Store';
import Menu from '../../components/Menu';
import NavigationBar from '../../components/NavigationBar';
import Routes from '../../routes';

const renderNameField = ({
  edit, setEdit, userInfo, onChangeUserInfo,
}) =>{ 
  if (!edit) {
    return (
      <>
        <h1 className="add-name">{userInfo.name}</h1>
        <FaPen className="icons-input" size={20} color="#888" onClick={() => setEdit(true)} />
      </>
    );
  }

  return (
      <>
        <div className="add-name">
          <Input
            name="name"
            value={userInfo.name}
            onChange={onChangeUserInfo}
            type="text"
            inputClass="name-input"
            autofocus={true}
            maxlength="33"
            style={{ "width": userInfo.name.length + 'ch' }}
          />
        </div>
      <FaSave className="icons-input" size={20} color="#888" onClick={() => setEdit(false)} />
      </>
    );
}

const Register = () => {
  const [edit, setEdit] = useState(false);
  const { dispatch } = useContext(Store);
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: 'Seu nome',
    job: 'Profissão',
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
      [e.target.name]: e.target.value,
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
          city: placeResults.address_components.find(i => i.types.includes("administrative_area_level_2")).long_name,
          state: placeResults.address_components.find(i => i.types.includes("administrative_area_level_1")).long_name,
          country: placeResults.address_components.find(i => i.types.includes("country")).long_name,
          district: placeResults.address_components.find(i => i.types.includes("sublocality")).long_name,
          geometry: placeResults.geometry.bounds,
          place_id: placeResults.place_id,
          latitude: placeResults.geometry.location.lat,
          longitude: placeResults.geometry.location.lng
        }));
      } else {
        throw new Error("Couldn't find zipcode")
      }
    } catch (error) {
      return console.log(error);
    }
  }

  useEffect(() => {
    if (addressInfo.zipcode.length === 9) {
      const zipcodeInput = addressInfo.zipcode.replace(/-/g, "");
      console.log('zipcodeInput:', zipcodeInput)
      getAddress(zipcodeInput);
    }
  }, [addressInfo.zipcode])

  return (
    <>
    <NavigationBar />
    <div className="register-container">
        <Menu>
          <Routes/>
        </Menu>
        <section className="register-cover">
          <div className={!userInfo.cover_image ? "cover-photo gradient" : "cover-photo"} style={{ backgroundImage: `url(${userInfo.cover_image.url})` }}>
            <InputFile
              id="cover_image"
              name="cover_image"
              value={userInfo.cover_image}
              onChange={(e) => setUserInfo({
                ...userInfo,
                cover_image: { file: e.target.files[0], url: URL.createObjectURL(e.target.files[0])},
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
                  profile_image: { file: e.target.files[0], url: URL.createObjectURL(e.target.files[0])},
                })}
                inputClass="profile-image"
              />
            </div>
            <div className="register-text">
              <div className="register-edit-text">
                {renderNameField({ edit, setEdit, userInfo, onChangeUserInfo })}
              </div>
              <Select
                options={options.job}
                name="job"
                value={userInfo.job}
                onChange={onChangeUserInfo}
                selectClass="job-select"
                optionClass="job-option"
                defaultName="Profissão"
                style={{ "width": (userInfo.job.length + 1) + 'ch' }}
              />
            </div>
          </div>
        </section>
        <Form
          userInfo={userInfo}
          onChangeUserInfo={(e) => setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
          })}
          setUserInfo={setUserInfo}
          addressInfo={addressInfo}
          onChangeAddressInfo={(e) => setAddressInfo({
            ...addressInfo,
            [e.target.name]: e.target.value,
          })}
          onSubmit={(event) => registerAction({
            event, userInfo, dispatch,
            addressInfo, setLoading, skills,
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

export default Register;
