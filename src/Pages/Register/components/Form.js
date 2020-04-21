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

const Form = ({
  userInfo, onChangeUserInfo, setUserInfo,
  addressInfo, onChangeAddressInfo, onSubmit,
  setLoading, loading, skills, setSkills,
}) => {
  return (
    <form className="register-form">
      <div>
        <h3 className="heading-terciary">Escreva uma biografia</h3>
        <textarea
          name="biography"
          placeholder="Digite aqui sua biografia"
          maxLength="300"
          value={userInfo.biography}
          onChange={onChangeUserInfo}
        ></textarea>
      </div>
      <div>
        <h3 className="heading-terciary">Qual a sua área de interesse?</h3>
        <SelectTags
          tags={skills}
          placeholder="hakuna-matata"
          handleChange={(tags) => setSkills(tags)}
        />
      </div>
      <div>
        <h3 className="heading-terciary">Adicionar informações pessoais</h3>
        <div className="add-details">
          <Input
            name="email"
            value={userInfo.email}
            onChange={onChangeUserInfo}
            type="email"
            placeholder="seuemail@exemplo.com"
            inputClass="register-input email"
            labelClass="register-label"
            labelName="E-mail"
            size="1000"
          />
          <Input
            name="phone"
            value={phoneMask(userInfo.phone)}
            onChange={onChangeUserInfo}
            type="tel"
            placeholder="(00) 0000-0000"
            inputClass="register-input phone"
            labelClass="register-label"
            labelName="Telefone"
          />
          <Input
            name="instagram"
            value={userInfo.instagram}
            onChange={onChangeUserInfo}
            type="url"
            placeholder="instagram.com/seu_@aqui:)"
            inputClass="register-input insta"
            labelClass="register-label"
            labelName="Instagram"
          />
          <Input
            name="facebook"
            value={userInfo.facebook}
            onChange={onChangeUserInfo}
            placeholder="facebook.com/seu_@aqui:)"
            type="url"
            inputClass="register-input face"
            labelClass="register-label"
            labelName="Facebook"
          />
          <Input
            name="site_address"
            value={userInfo.site_address}
            onChange={onChangeUserInfo}
            type="url"
            inputClass="register-input portfolio"
            labelClass="register-label"
            labelName="Site/portifolio"
          />
          <Input
            name="birth_date"
            value={userInfo.birth_date}
            onChange={onChangeUserInfo}
            type="date"
            inputClass="register-input birth-date"
            labelClass="register-label"
            labelName="Data de nascimento"
          />
          <Select
            options={options.gender}
            name="gender"
            value={userInfo.gender}
            onChange={onChangeUserInfo}
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
            optionClass="register-option"
            labelClass="register-label"
            labelName="Orientação Sexual"
          />
          <Select
            options={options.race}
            name="race"
            value={userInfo.race}
            onChange={onChangeUserInfo}
            selectClass="register-select race"
            optionClass="register-option"
            labelClass="register-label"
            labelName="Raça/cor"
          />
          <Input
            name="street"
            value={addressInfo.street}
            onChange={onChangeAddressInfo}
            type="text"
            inputClass="register-input street"
            labelClass="register-label"
            labelName="Rua"
          />
          <Input
            name="number"
            value={addressInfo.number}
            onChange={onChangeAddressInfo}
            type="text"
            inputClass="register-input number"
            labelClass="register-label"
            labelName="Número"
          />
          <Input
            name="complement"
            value={addressInfo.complement}
            onChange={onChangeAddressInfo}
            type="text"
            inputClass="register-input complement"
            labelClass="register-label"
            labelName="Complemento"
          />
          <Input
            name="zipcode"
            placeholder="0000-000"
            value={cepMask(addressInfo.zipcode)}
            onChange={onChangeAddressInfo}
            type="text"
            inputClass="register-input zipcode"
            labelClass="register-label"
            labelName="CEP"
          />
          <Input
            name="district"
            value={addressInfo.district}
            onChange={onChangeAddressInfo}
            type="text"
            inputClass="register-input neiborhood"
            labelClass="register-label"
            labelName="Bairro"
          />
          <Input
            name="district2"
            value={addressInfo.district2}
            onChange={onChangeAddressInfo}
            type="text"
            inputClass="register-input district"
            labelClass="register-label"
            labelName="Município"
          />
          <Input
            name="city"
            value={addressInfo.city}
            onChange={onChangeAddressInfo}
            type="text"
            inputClass="register-input city"
            labelClass="register-label"
            labelName="Cidade"
          />
          <Input
            name="state"
            value={addressInfo.state}
            onChange={onChangeAddressInfo}
            type="text"
            inputClass="register-input state"
            labelClass="register-label"
            labelName="Estado"
          />
          <Input
            name="country"
            value={addressInfo.country}
            onChange={onChangeAddressInfo}
            type="text"
            inputClass="register-input country"
            labelClass="register-label"
            labelName="País"
          />
        </div>
      </div>
      <div className="register-submit">
        <Button
          onClick={(e) => onSubmit(e)}
          type="submit"
          disabled={loading}
          children="Criar conta"
          className="btn3D--blue"
        />
        <Snackbar ref={} />
        <Link to="/">
          <Button
            children="Cancelar"
            className="btn3D--transparent"
          />
        </Link>
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
  street: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  complement: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
  district2: PropTypes.string.isRequired,
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
