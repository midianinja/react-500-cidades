import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SelectTags from "../../../components/SelectTags";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import Snackbar from '../../../components/Snackbar';
import { phoneMask, cepMask } from '../../../components/Masks';
import options from '../register.model';
import './styles.css';

const Form = ({
  userInfo, onChangeUserInfo, setUserInfo,
  addressInfo, onChangeAddressInfo, onSubmit,
  setLoading, loading, skills, setSkills, errors
}) => {
  return (
    <form className="register-form">
      <div>
        <h3 className="heading-terciary">Escreva uma biografia</h3>
        <textarea
          name="biography"
          placeholder="Digite aqui sua biografia"
          maxLength="300"
          className="biography"
          value={userInfo.biography}
          onChange={onChangeUserInfo}
        ></textarea>
        {errors.biography ? <span className="error">{errors.biography}.</span> : null}
      </div>
      <div>
        <h3 className="heading-terciary">Qual a sua área de interesse?</h3>
        <SelectTags
          tags={skills}
          adicionalClass="tags-style"
          error={errors.skills}
          handleChange={(tags) => setSkills(tags)}
        />
      </div>
      <h3 className="heading-terciary">Adicionar informações pessoais</h3>
      <div className="add-details">
      <div className="row">
        <Input
          name="email"
          value={userInfo.email}
          onChange={onChangeUserInfo}
          type="email"
          inputClass="register-input"
          labelClass="register-label"
          labelName="E-mail"
          error={errors.email}
          adicionalClass="common-input email"
          size="1000"
        />
        <Input
          name="phone"
          value={phoneMask(userInfo.phone)}
          onChange={onChangeUserInfo}
          type="tel"
          error={errors.phone}
          adicionalClass="common-input phone"
          inputClass="register-input"
          labelClass="register-label"
          labelName="Telefone"
        />
      </div>
      <div className="row">
        <Input
          name="instagram"
          value={userInfo.instagram}
          onChange={onChangeUserInfo}
          error={errors.instagram}
          inputClass="register-input insta"
          labelClass="register-label"
          adicionalClass="common-input insta"
          labelName="Seu @ do instagram"
        />
        <Input
          name="facebook"
          value={userInfo.facebook}
          onChange={onChangeUserInfo}
          error={errors.facebook}
          type="url"
          inputClass="register-input face"
          labelClass="register-label"
          adicionalClass="common-input face"
          labelName="Facebook"
        />
        <Input
          name="site_address"
          value={userInfo.site_address}
          onChange={onChangeUserInfo}
          adicionalClass="common-input site"
          type="url"
          error={errors.site_address}
          inputClass="register-input portfolio"
          labelClass="register-label"
          labelName="Site/portifolio"
        />
      </div>
      <div className="row">
        <Input
          name="birth_date"
          value={userInfo.birth_date}
          onChange={onChangeUserInfo}
          type="date"
          error={errors.birth_date}
          adicionalClass="common-input birth-date"
          inputClass="register-input birth-date"
          labelClass="register-label"
          labelName="Data de nascimento"
        />
        <Select
          options={options.gender}
          name="gender"
          value={userInfo.gender}
          onChange={onChangeUserInfo}
          error={errors.gender}
          adicionalClass="common-input gender"
          selectClass="register-select gender"
          optionClass="register-option"
          labelClass="register-label"
          labelName="Gênero"
        />
        <Select
          options={options.sexual_orientation}
          name="sexual_orientation"
          value={userInfo.sexual_orientation}
          onChange={onChangeUserInfo}
          selectClass="register-select sexual-orientation"
          error={errors.sexual_orientation}
          adicionalClass="common-input sexual-orientation"
          optionClass="register-option"
          labelClass="register-label"
          labelName="Orientação Sexual"
        />
        <Select
          options={options.race}
          name="race"
          value={userInfo.race}
          error={errors.race}
          adicionalClass="common-input race"
          onChange={onChangeUserInfo}
          selectClass="register-select race"
          optionClass="register-option"
          labelClass="register-label"
          labelName="Raça/cor"
        />
      </div>
      <div className="row">
        <Input
          name="zipcode"
          value={cepMask(addressInfo.zipcode)}
          onChange={onChangeAddressInfo}
          type="text"
          error={errors.zipcode}
          inputClass="register-input zipcode"
          labelClass="register-label"
          adicionalClass="common-input zipcode"
          labelName="CEP"
        />
        <Input
          name="district"
          value={addressInfo.district}
          onChange={onChangeAddressInfo}
          type="text"
          inputClass="register-input neighborhood"
          adicionalClass="common-input neighborhood"
          labelClass="register-label"
          labelName="Bairro"
        />
        <Input
          name="city"
          value={addressInfo.city}
          onChange={onChangeAddressInfo}
          type="text"
          inputClass="register-input city"
          adicionalClass="common-input city"
          labelClass="register-label"
          labelName="Cidade"
        />
      </div>
      <div className="row last-row">
        <Input
          name="state"
          value={addressInfo.state}
          onChange={onChangeAddressInfo}
          type="text"
          inputClass="register-input state"
          adicionalClass="common-input state"
          labelClass="register-label"
          labelName="Estado"
        />
        <Input
          name="country"
          value={addressInfo.country}
          onChange={onChangeAddressInfo}
          type="text"
          adicionalClass="common-input country"
          inputClass="register-input country"
          labelClass="register-label"
          labelName="País"
        />
      </div>
      <div className="register-submit">
        <Button
          onClick={(e) => onSubmit(e)}
          type="submit"
          disabled={loading}
          children={loading ? loading : "Criar conta"}
          className="btn3D--blue"
        />
        <Snackbar /* ref={} */ />
        <Link to="/">
          <Button
            children="Cancelar"
            className="btn3D--transparent"
          />
        </Link>
      </div>
      </div>
    </form>
  );
}

const shapeUser = {
        name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  profile_image: PropTypes.string.isRequired,
  cover_image: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  site_address: PropTypes.string.isRequired,
  birth_date: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  sexual_orientation: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
};

const shapeAddresss = {
  district: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  place_id: PropTypes.string.isRequired,
  geometry: PropTypes.object.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
}

Form.propTypes = {
  userInfo: PropTypes.shape(shapeUser).isRequired,
  addressInfo: PropTypes.shape(shapeAddresss).isRequired,
  
  setUserInfo: PropTypes.func.isRequired,
  onChangeUserInfo: PropTypes.func.isRequired,
  onChangeAddressInfo: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

export default Form;
