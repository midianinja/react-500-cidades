import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
// import gql from 'graphql-tag'
//import { gql } from 'apollo-boost';
// import { useQuery } from 'react-apollo'
import * as options from '../../register-options.json'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Select from '../../components/Select'
import './styles.css';

// const REGISTER_USER = gql`
//     mutation user?? (
//      $name: String
//      ) { }

//      {tipology, name, job, profile_image, cover_image, biography, skills, email, phone, instagram, facebook,
//      site_address, birth_date, gender, sexual_orientation, race}

const Register = () => {
    // const {loading, data: {putUser: user} } = useQuery(PUT_USER_QUERY) 
    const [userInfo, setUserInfo] = useState({
        tipology: '', //?
        name: 'Seu nome',
        job: 'Profissão',
        profile_image: '',
        cover_image: '',
        biography: '',
        skills: [],//tags
        email: '',
        phone: '',
        instagram: '',
        facebook: '',
        site_address: '',
        birth_date: '',
        gender: '',
        sexual_orientation: '',
        race: '',
    })
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
        geometry: '',
        latitude: '',
        longitude: '',
    })

    const onChangeUserInfo = (e) => {
        console.log(e.target.name, e.target.value)
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
        console.log(userInfo)
    }

    const onChangeAddressInfo = (e) => {
        setAddressInfo({...addressInfo, [e.target.name]: e.target.value})
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    // }

    return (
        <div className="register-container">
            {/* component menu */}
            <section className="register-cover">
                {/* icon */}
                <div className="add-photo">
                    {/* icon */}
                </div>
                <div className="register-text">
                    {/* <h1 className="add-name" contentEditable="false">{userInfo.name}</h1>  <icon onClick={this.contenteditable = "true"}> */}
                    {/* <h2 className="add-job" contentEditable="false">{userInfo.job}</h2>  <icon onClick={this.contenteditable = "true"}> */}
                </div>
            </section>
            <form className="register-form">
                <div>
                    <h3 className="heading-terciary">
                        Escreva uma biografia
                    </h3>
                    <textarea
                        name="biography"
                        placeholder="Digite aqui sua biografia"
                        maxLength="300"
                        value={userInfo.biography}
                        onChange={onChangeUserInfo}
                    >
                    </textarea>
                </div>
                <div>
                    <h3 className="heading-terciary">
                        Qual a sua área de atuação?
                    </h3>
                    <Input
                        name="skills"
                        value={userInfo.skills}
                        onChange={onChangeUserInfo}
                        type="text"
                        inputClass="register-input"
                        labelClass="register-label"
                        labelName="Adicione suas tags"
                    />
                </div>
                <div>
                    <h3 className="heading-terciary">
                        Adicionar informações pessoais
                    </h3>
                    <div  className="add-details">
                        <Input
                            name="email"
                            value={userInfo.email}
                            onChange={onChangeUserInfo}
                            type="email"
                            inputClass="register-input"
                            labelClass="register-label"
                            labelName="E-mail"
                        />
                        <Input
                            name="phone"
                            value={userInfo.phone}
                            onChange={onChangeUserInfo}
                            type="tel"
                            inputClass="register-input"
                            labelClass="register-label"
                            labelName="Telefone"
                        />
                        <Input
                            name="instagram"
                            value={userInfo.instagram}
                            onChange={onChangeUserInfo}
                            type="url"
                            inputClass="register-input"
                            labelClass="register-label"
                            labelName="Instagram"
                        />
                        <Input
                            name="facebook"
                            value={userInfo.facebook}
                            onChange={onChangeUserInfo}
                            type="url"
                            inputClass="register-input"
                            labelClass="register-label"
                            labelName="Facebook"
                        />
                        <Input
                            name="site_address"
                            value={userInfo.site_address}
                            onChange={onChangeUserInfo}
                            type="url"
                            inputClass="register-input"
                            labelClass="register-label"
                            labelName="Site/portifolio"
                        />
                        <Input
                            name="birth_date"
                            value={userInfo.birth_date}
                            onChange={onChangeUserInfo}
                            type="date"
                            inputClass="register-input"
                            labelClass="register-label"
                            labelName="Data de nascimento"
                        />
                        <Select
                            options={options.gender}
                            name="gender"
                            value={userInfo.gender}
                            onChange={onChangeUserInfo}
                            selectClass="register-select"
                            optionClass="register-option"
                            labelClass="register-label"
                            labelName="Gênero"
                        />
                        <Select
                            options={options.sexual_orientation}
                            name="sexual_orientation"
                            value={userInfo.sexual_orientation}
                            onChange={onChangeUserInfo}
                            selectClass="register-select"
                            optionClass="register-option"
                            labelClass="register-label"
                            labelName="Orientação Sexual"
                        />
                        <Select
                            options={options.race}
                            name="race"
                            value={userInfo.race}
                            onChange={onChangeUserInfo}
                            selectClass="register-select"
                            optionClass="register-option"
                            labelClass="register-label"
                            labelName="Raça/cor"
                        />
                        <Input
                            name="zipcode"
                            value={addressInfo.zipcode}
                            onChange={onChangeAddressInfo}
                            type="text"
                            inputClass="register-input"
                            labelClass="register-label"
                            labelName="CEP"
                        />
                        <Input
                            type="text"
                            inputClass="register-input"
                            labelClass="register-label"
                            labelName="Bairro"
                        />
                        <Input
                            type="text"
                            inputClass="register-input"
                            labelClass="register-label"
                            labelName="Município"
                        />
                        <Input
                            name="city"
                            value={addressInfo.city}
                            onChange={onChangeAddressInfo}
                            type="text"
                            inputClass="register-input"
                            labelClass="register-label"
                            labelName="Cidade"
                        />
                        <Input
                            name="country"
                            value={addressInfo.country}
                            onChange={onChangeAddressInfo}
                            type="text"
                            inputClass="register-input"
                            labelClass="register-label"
                            labelName="País"
                        />
                    </div>
                </div>
                <div className="register-submit">
                    <Button
                        type="submit"
                        children="Criar conta"
                        className="btn--blue"
                    />
                    <Button
                        children="Cancelar"
                        className="btn--transparent"
                    />
                </div>
            </form>
            
        </div>
    );
}

export default Register;