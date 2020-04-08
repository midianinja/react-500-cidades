import React from 'react';
//import { Link } from 'react-router-dom';
import Button from '../../components/Button'
import Input from '../../components/Input'
import './styles.css';

const Register = () => {
    // const [name, useName] = useState('Seu Nome');
    // const [job, useJob] = useState('Profissão');

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
                    <h1 className="add-name" contentEditable="false">Seu nome</h1>  {/*<icon onClick={this.contenteditable = "true"}>*/}
                    <h2 className="add-job" contentEditable="false">Profissão</h2>  {/*<icon onClick={this.contenteditable = "true"}>*/}
                </div>
            </section>
            <form className="register-form">
                <div className="biography">
                    <h3 className="heading-terciary">
                        Escreva uma biografia
                    </h3>
                    <textarea id="biography" placeholder="Digite aqui sua biografia" maxLength="250"></textarea>
                </div>
                <div className="role">
                    <h3 className="heading-terciary">
                        Qual a sua área de atuação?
                    </h3>
                    <Input
                        type="text"
                        classInput="register-input"
                        id="skills"
                        classLabel="register-label"
                        children="Adicione suas tags"
                    />
                </div>
                <div className="personal-info">
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
                        />
                        <Input
                            type="tel"
                            classInput="register-input"
                            id="phone"
                            classLabel="register-label"
                            children="Telefone"
                        />
                        <Input
                            type="url"
                            classInput="register-input"
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
                        />
                        <Input
                            type="url"
                            classInput="register-input"
                            id="site_address"
                            classLabel="register-label"
                            children="Site/portifolio"
                        />
                        <Input
                            type="date"
                            classInput="register-input"
                            id="birth-date"
                            classLabel="register-label"
                            children="Data de nascimento"
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
                    <Button
                        children="Criar conta"
                        className="btn3D--blue"
                    />
                    <Button
                        children="Cancelar"
                        className="btn3D--transparent"
                    />
                </div>
            </form>
            
        </div>
    );
}

export default Register;