import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { FaCamera, FaPen } from 'react-icons/fa';
// import ViaCep from "react-via-cep";
import { phoneMask, cepMask } from '../../components/Masks';
import Button from '../../components/Button'
import Input from '../../components/Input'
import './styles.css';

const Register = () => {
    // const [name, useName] = useState('Seu Nome');
    // const [job, useJob] = useState('Profissão');
    // const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ cep, setCep ] = useState('');

    console.log(phone);

    return (
      <div className="register-container">
        <section className="navigation"></section>
        {/* component navigation */}
        <section className="register-cover">
          <div className="add-photo">
              <FaCamera size={28} color="#888" />
          </div>
          <div className="register-text">
            <h1 className="add-name" contentEditable="false">
              Seu nome <FaPen size={20} color="#888" />
            </h1>{" "}
            {/*<icon onClick={this.contenteditable = "true"}>*/}
            <h2 className="add-job" contentEditable="false">
              Profissão <FaPen size={20} color="#888" />
            </h2>{" "}
            {/*<icon onClick={this.contenteditable = "true"}>*/}
          </div>
        </section>
        <form className="register-form">
          <div className="biography">
            <h3 className="heading-terciary">Escreva uma biografia</h3>
            <textarea
              id="biography"
              placeholder="Digite aqui sua biografia"
              maxLength="250"
            ></textarea>
          </div>
          <div className="role">
            <h3 className="heading-terciary">Qual a sua área de atuação?</h3>
            <Input
              type="text"
              classInput="register-input"
              id="skills"
              classLabel="register-label"
              children="Adicione suas tags"
            />
          </div>
          <div className="personal-info">
            <h3 className="heading-terciary">Adicionar informações pessoais</h3>
            <div className="add-details">
              <Input
                type="email"
                classInput="register-input"
                id="email"
                classLabel="register-label"
                children="E-mail"
                placeholder="seuemail@exemplo.com"
              />
              <Input
                type="tel"
                classInput="register-input"
                id="phone"
                placeholder="(00) 0000-0000"
                classLabel="register-label"
                children="Telefone"
                value={phoneMask(phone)}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                type="url"
                classInput="register-input"
                placeholder="https://www.instagram.com/seu_@aqui:)"
                id="instagram"
                classLabel="register-label"
                children="Instagram"
              />
              <Input
                type="url"
                classInput="register-input"
                id="facebook"
                classLabel="register-label"
                children="Facebook"
                placeholder="https://www.facebook.com/seu_perfil_aqui:)"
              />
              <Input
                type="url"
                classInput="register-input"
                id="site_address"
                classLabel="register-label"
                children="Site/portifolio"
                placeholder="Site/portifolio"
              />
              <Input
                type="date"
                classInput="register-input"
                id="birth-date"
                classLabel="register-label"
                children="Data de nascimento"
                placeholder="dd/mm/aaaa"
              />
              <Input
                type="text"
                classInput="register-input"
                id="gender"
                classLabel="register-label"
                children="gênero"
              />
              <Input
                type="text"
                classInput="register-input"
                id="sexual-orientation"
                classLabel="register-label"
                children="Orientação sexual"
              />
              <Input
                type="text"
                classInput="register-input"
                id="race"
                classLabel="register-label"
                children="Raça/cor"
              />
              <Input
                type="text"
                classInput="register-input"
                id="zipcode"
                classLabel="register-label"
                children="CEP"
                placeholder="0000-000"
                value={cepMask(cep)}
                onChange={(e) => setCep(e.target.value)}
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
                children="Estado"
              />
              <Input
                type="text"
                classInput="register-input"
                id="country"
                classLabel="register-label"
                children="País"
              />
            </div>
          </div>
          <div className="register-submit">
            <Button children="Criar conta" className="btn3D--blue" />
            <Button children="Cancelar" className="btn3D--transparent" />
          </div>
        </form>
      </div>
    );
}

export default Register;