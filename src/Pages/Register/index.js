import React, { useState, useEffect } from 'react';
import { FaPen, FaSave } from "react-icons/fa";
import options from './register.model';
import Input from '../../components/Input';
import InputFile from '../../components/InputFile';
import Select from '../../components/Select';
import './styles.css';
import { registerAction } from './controller';
import Form from './components/Form';

// const REGISTER_USER = gql`
//     mutation user?? (
//      $name: String
//      ) { }

//      {tipology, name, job, profile_image, cover_image, biography, skills, email, phone, instagram, facebook,
//      site_address, birth_date, gender, sexual_orientation, race}

const Register = () => {
  // const {loading, data: {putUser: user} } = useQuery(PUT_USER_QUERY) 
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: 'Seu nome',
    job: 'Profissão',
    profile_image: '',
    cover_image: '',
    biography: 'Biogragfia do carilho, da silva salro, jorge dragão, note de olivera',
    skills: [],
    email: 'email@mail.com',
    phone: '11986756060',
    instagram: 'www.instagram.com/lokaum',
    facebook: 'www.facebook.com/lokinho',
    site_address: 'meusite.com.br',
    birth_date: '2020-04-01',
    gender: '',
    sexual_orientation: '',
    race: '',
  });

  const [addressInfo, setAddressInfo] = useState({
    street: '',
    number: '',
    complement: '',
    district: '',
    district2: '',
    city: '',
    zipcode: '',
    state: '',
    country: '',
    place_id: '',//google
    geometry: {},//google
    latitude: '',//google
    longitude: ''//google
  });

  const onChangeUserInfo = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const getAddress = async (zipcodeInput) => {
    try {
      const zipcodeAddress = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcodeInput}&sensor=false&language=pt&key=${process.env.REACT_APP_MAP_KEY}`);
      const result = await zipcodeAddress.json();
      if (result.results.length > 0) {
        const placeResults = result.results[0];
        setAddressInfo(addressInfo => ({
          ...addressInfo,
          city: placeResults.address_components.find(i => i.types.includes("administrative_area_level_2")).long_name,
          state: placeResults.address_components.find(i => i.types.includes("administrative_area_level_1")).long_name,
          country: placeResults.address_components.find(i => i.types.includes("country")).long_name,
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
      return getAddress(zipcodeInput);
    }
  }, [addressInfo.zipcode])

  return (
    <div className="register-container">
      {/* component menu */}
      <section className="register-cover" style={{ backgroundImage: userInfo.cover_image ? `url(${userInfo.profile_image})` : 'linear-gradient(to bottom, var(--light-gray) 50%, var(--gray) 100% )' }}>
        <div className="cover-photo">
          <InputFile
            id="cover_image"
            name="cover_image"
            onChange={(e) => setUserInfo({
              ...userInfo,
              cover_image: URL.createObjectURL(e.target.files[0]),
            })}
            inputClass="cover-image"
          />
        </div>
        <div className="add-photo" style={{ backgroundImage: `url(${userInfo.cover_image})` }}>
          <InputFile
            borderRadius="100%"
            id="profile_image"
            name="profile_image"
            value={userInfo.profile_image}
            onChange={(e) => setUserInfo({
              ...userInfo,
              profile_image: URL.createObjectURL(e.target.files[0]),
            })}
            inputClass="profile-image"
          />
        </div>
        <div className="register-text">
          <div className="register-edit-text">
            {edit
              ? (
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
                  <FaSave size={20} color="#888" onClick={() => setEdit(false)} />
                </>
              ) : (
                <>
                  <h1 className="add-name">{userInfo.name}</h1>
                  <FaPen size={20} color="#888" onClick={() => setEdit(true)} />
                </>
              )}
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
          event,
          userInfo,
          addressInfo,
          setLoading,
        })}
        setLoading={setLoading}
        loading={loading}
        skills={skills}
        setSkills={setSkills}
      />
    </div>
  );
}

export default Register;
