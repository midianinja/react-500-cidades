import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SelectTags from "../../../../components/SelectTags";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import Snackbar from '../../../../components/Snackbar';
import { phoneMask, cepMask } from '../../../../components/Masks';
import options from '../../register.model';
import './styles.css';
import TextArea from '../../../../components/TextArea/TextArea';
import { formatDate } from '../../../../utils/date.utils';
import { extractNumbers } from '../../../../utils/number.utils';
import { FormContainer, FormWrapper, SectionLabel, OutlineButton, FilledButton } from './form.style';

const Form = ({
  userInfo, onChangeUserInfo, setUserInfo, optionsJob,
  addressInfo, onChangeAddressInfo, onSubmit,
  setLoading, loading, skills, setSkills, errors
}) => {
  return (
    <FormWrapper>
      <FormContainer>
      <Input
        name="name"
        id="name"
        placeholder="Digite seu nome"
        value={userInfo.name}
        onChange={onChangeUserInfo}
        type="text"
        inputClass="register-input"
        labelClass="register-label"
        labelName="Nome"
        error={errors.name}
        adicionalClass="common-input name"
        />
        <Select
            options={optionsJob.job.sort()}
            name="job"
            id="job"
            value={userInfo.job || 'Selecione sua profissão'}
            error={errors.job}
            placeholder="Selecione sua profissão"
            adicionalClass="common-input job"
            onChange={onChangeUserInfo}
            selectClass="register-select job"
            optionClass="register-option"
            labelClass="register-label"
            labelName="Profissão"
          />
        <SectionLabel className="heading-terciary">Escreva uma biografia</SectionLabel>
        <TextArea
          name="biography"
          id="biography"
          placeholder="Digite aqui sua biografia"
          maxLength="500"
          className="biography"
          error={errors.biography}
          value={userInfo.biography}
          onChange={onChangeUserInfo}
        />
        <SectionLabel className="heading-terciary">Qual a sua área de interesse?</SectionLabel>
        <SelectTags
          tags={skills.sort()}
          placeholder="Digite uma área de interesse"
          adicionalClass="tags-style"
          error={errors.skills}
          handleChange={(tags) => setSkills(tags)}
        />
        <SectionLabel className="heading-terciary">Adicionar informações pessoais</SectionLabel>
        <div className="add-details">
          <div className="row">
            <Input
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
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
              id="phone"
              placeholder="Digite seu telefone"
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
            id="instagram"
            value={userInfo.instagram}
            onChange={onChangeUserInfo}
            placeholder="Digite seu @ do instagram"
            error={errors.instagram}
            inputClass="register-input insta"
            labelClass="register-label"
            adicionalClass="common-input insta"
            labelName="Seu @ do instagram"
          />
          <Input
            name="facebook"
            id="facebook"
            value={userInfo.facebook}
            placeholder="Digite seu facebook"
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
            placeholder="Digite o endereço do seu site"
            id="site_address"
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
            name="date"
            id="birth_date"
            value={formatDate(userInfo.birth_date)}
            onChange={(e) => onChangeUserInfo({ target: { id: 'birth_date', value: extractNumbers(e.target.value) }})}
            type="text"
            placeholder="dd/MM/AAAA"
            error={errors.birth_date}
            adicionalClass="common-input birth-date"
            inputClass="register-input birth-date"
            labelClass="register-label"
            labelName="Data de nascimento"
          />
          <Select
            options={options.gender}
            name="gender"
            id="gender"
            value={userInfo.gender}
            placeholder="Selecione seu gênero"
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
            id="sexual_orientation"
            value={userInfo.sexual_orientation}
            placeholder="Selecione sua orientação sexual"
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
            id="race"
            value={userInfo.race}
            error={errors.race}
            placeholder="Selecione sua cor"
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
            id="zipcode"
            value={cepMask(addressInfo.zipcode)}
            onChange={onChangeAddressInfo}
            type="text"
            error={errors.zipcode}
            inputClass="register-input zipcode"
            placeholder="Digite seu CEP"
            labelClass="register-label"
            adicionalClass="common-input zipcode"
            labelName="CEP"
          />
          <Input
            name="district"
            id="district"
            value={addressInfo.district}
            onChange={onChangeAddressInfo}
            type="text"
            placeholder="Digite seu Bairro"
            inputClass="register-input neighborhood"
            adicionalClass="common-input neighborhood"
            labelClass="register-label"
            labelName="Bairro"
          />
          <Input
            name="city"
            id="city"
            value={addressInfo.city}
            onChange={onChangeAddressInfo}
            type="text"
            placeholder="Digite Cidade"
            inputClass="register-input city"
            adicionalClass="common-input city"
            labelClass="register-label"
            labelName="Cidade"
          />
        </div>
        <div className="row last-row">
          <Input
            name="state"
            id="state"
            value={addressInfo.state}
            onChange={onChangeAddressInfo}
            type="text"
            inputClass="register-input state"
            adicionalClass="common-input state"
            placeholder="Estado"
            labelClass="register-label"
            labelName="Estado"
          />
          <Input
            name="country"
            id="country"
            value={addressInfo.country}
            onChange={onChangeAddressInfo}
            type="text"
            adicionalClass="common-input country"
            inputClass="register-input country"
            placeholder="País"
            labelClass="register-label"
            labelName="País"
          />
        </div>
        <div className="register-submit">
          <OutlineButton
            children="Cancelar"
          />
          <FilledButton
            onClick={(e) => onSubmit(e)}
            type="submit"
            disabled={loading}
            children={loading ? loading : "Criar conta"}
          />
          <Snackbar />
        </div>
        </div>
      </FormContainer>
    </FormWrapper>
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
