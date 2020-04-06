import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
// import gql from 'graphql-tag'
//import { gql } from 'apollo-boost';
// import { useQuery } from 'react-apollo'
import Button from '../../components/Button'
import Input from '../../components/Input'
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
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    const onChangeAddressInfo = (e) => {
        setAddressInfo({...addressInfo, [e.target.name]: e.target.value})
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    // }

    return (
        <div className="register-container">
            <section className="navigation">
            </section>
            {/* component navigation */}
            <section className="register-cover">
                {/* icon */}
                <div className="add-photo">
                    {/* icon */}
                </div>
                <div className="register-text">
                    <h1 className="add-name" contentEditable="false">{userInfo.name}</h1>  {/*<icon onClick={this.contenteditable = "true"}>*/}
                    <h2 className="add-job" contentEditable="false">{userInfo.job}</h2>  {/*<icon onClick={this.contenteditable = "true"}>*/}
                </div>
            </section>
            <form className="register-form">
                <div>
                    <h3 className="heading-terciary">
                        Escreva uma biografia
                    </h3>
                    <textarea
                        id="biography"
                        placeholder="Digite aqui sua biografia"
                        maxLength="250"

                    >
                    </textarea>
                </div>
                <div>
                    <h3 className="heading-terciary">
                        Qual a sua área de atuação?
                    </h3>
                    <Input
                        type="text"
                        classInput="register-input"
                        id="skills"
                        classLabel="register-label"
                        children="Adicione suas tags"
                        name="skills"
                        value={userInfo.skills}
                        onChange={onChangeUserInfo}
                    />
                </div>
                <div>
                    <h3 className="heading-terciary">
                        Adicionar informações pessoais
                    </h3>
                    <div  className="add-details">
                        <Input
                            type="email"
                            classInput="register-input"
                            id="email"
                            classLabel="register-label"
                            children="E-mail"
                            name="email"
                            value={userInfo.email}
                            onChange={onChangeUserInfo}
                        />
                        <Input
                            type="tel"
                            classInput="register-input"
                            id="phone"
                            classLabel="register-label"
                            children="Telefone"
                            name="phone"
                            value={userInfo.phone}
                            onChange={onChangeUserInfo}
                        />
                        <Input
                            type="url"
                            classInput="register-input"
                            id="instagram"
                            classLabel="register-label"
                            children="Instagram"
                            name="instagram"
                            value={userInfo.instagram}
                            onChange={onChangeUserInfo}
                        />
                        <Input
                            type="url"
                            classInput="register-input"
                            id="facebook"
                            classLabel="register-label"
                            children="Facebook"
                            name="facebook"
                            value={userInfo.facebook}
                            onChange={onChangeUserInfo}
                        />
                        <Input
                            type="url"
                            classInput="register-input"
                            id="site_address"
                            classLabel="register-label"
                            children="Site/portifolio"
                            name="site_address"
                            value={userInfo.site_address}
                            onChange={onChangeUserInfo}
                        />
                        <Input
                            type="date"
                            classInput="register-input"
                            id="birth-date"
                            classLabel="register-label"
                            children="Data de nascimento"
                            name="birth_date"
                            value={userInfo.birth_date}
                            onChange={onChangeUserInfo}
                        />
                        <Input
                            type="text"
                            classInput="register-input"
                            id="gender"
                            classLabel="register-label"
                            children="Gênero"
                            name="gender"
                            value={userInfo.gender}
                            onChange={onChangeUserInfo}
                        />
                        <Input
                            type="text"
                            classInput="register-input"
                            id="sexual-orientation"
                            classLabel="register-label"
                            children="Orientação sexual"
                            name="sexual_orientation"
                            value={userInfo.sexual_orientation}
                            onChange={onChangeUserInfo}
                        />
                        <Input
                            type="text"
                            classInput="register-input"
                            id="race"
                            classLabel="register-label"
                            children="Raça/cor"
                            name="race"
                            value={userInfo.race}
                            onChange={onChangeUserInfo}
                        />
                        <Input
                            type="text"
                            classInput="register-input"
                            id="zipcode"
                            classLabel="register-label"
                            children="CEP"
                            name="zipcode"
                            value={addressInfo.zipcode}
                            onChange={onChangeAddressInfo}
                        />
                        <Input
                            type="text"
                            classInput="register-input"
                            id="district"
                            classLabel="register-label"
                            children="Bairro"
                        />
                        <Input
                            type="text"
                            classInput="register-input"
                            id="district2"
                            classLabel="register-label"
                            children="Município"
                        />
                        <Input
                            type="text"
                            classInput="register-input"
                            id="city"
                            classLabel="register-label"
                            children="Cidade"
                            name="city"
                            value={addressInfo.city}
                            onChange={onChangeAddressInfo}
                        />
                        <Input
                            type="text"
                            classInput="register-input"
                            id="country"
                            classLabel="register-label"
                            children="País"
                            name="country"
                            value={addressInfo.country}
                            onChange={onChangeAddressInfo}
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