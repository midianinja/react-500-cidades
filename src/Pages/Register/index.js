import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import Button from '../../components/Button'
import Input from '../../components/Input'
import './styles.css';

const Register = () => {
    // const [name, useName] = useState('Seu Nome');
    // const [job, useJob] = useState('Profissão');
    return (
        <div className="register-container">
            <section className="header">
            </section>
            {/* component header */}
            <section className="register-cover">
                <div className="add-photo">
                    {/* icon */}
                </div>
                <div className="register-text">
                    <p className="add-name">Seu nome</p>  {/*icon*/}
                    <p className="add-job">Profissão</p>  {/*icon*/}
                </div>
            </section>
            <form className="register-form">
                <div>
                    <h3 className="heading-terciary">
                        Escreva uma biografia
                    </h3>
                    <textarea placeholder="Digite aqui sua biografia" maxlength="250"></textarea>
                </div>
                <div>
                    <h3 className="heading-terciary">
                        Qual a sua área de atuação?
                    </h3>
                    <Input
                        type="text"
                        classInput="register-input"
                        id="registerInput"
                        classLabel="register-label"
                    />
                </div>
                <div>
                    <h3 className="heading-terciary">
                        Adicionar informações pessoais
                    </h3>
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                </div>
                <div>
                    <Button>Criar conta</Button>
                    <Button>Cancelar</Button>
                </div>
            </form>
            
        </div>
    );
}

export default Register;