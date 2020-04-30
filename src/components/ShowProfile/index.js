import React, { useContext } from 'react';
import Popup from "reactjs-popup";

import { FaTimesCircle } from "react-icons/fa";

import './styles.css';

const ShowProfile = (props) => {
    const containerModal = {
        border: "none",
        position: 'relative',
        background: 'rgb(255, 255, 255)',
        width: '50%',
    };
    return (
        <Popup
            modal
            overlayStyle={{ background: "rgb(255, 255, 255)" }}
            contentStyle={containerModal}
            closeOnDocumentClick={true}
            trigger={(open) => <FaTimesCircle open={open} />}
        >
            {(close) => <ShowProfile close={close} />}>
            <header className="header-profile">
                <img className="image-profile" src="https://cache.desktopnexus.com/cropped-wallpapers/2400/2400913-1600x900-[DesktopNexus.com].jpg?st=VOYvI8Ok08LLIMOKHSrNBA&e=1588280813" alt="Por do Sol"></img>
                <div>
                    <h2 className="header-title">Marielle Ramires</h2>
                    <h5 className="header-profession">Artesã</h5>
                </div>
            </header>
            <section className="contact-info">
                <p><strong>Email</strong> marielleramires@gmail.com</p>
                <p><strong>Celular</strong> 11 99090 9909</p>
                <p><strong>Localidade</strong> Alfenas <span className="minor-text">Minas Gerais</span></p>
                <p><strong>Endereço</strong> Avenida Duque de Loulé, 3A Vila Mariana <span className="minor-text">93020 410</span></p>
            </section>
            <section>
                <h3>Tags</h3>
                <div>
                    <h5 className="blue-pills">artes</h5>
                    <h5 className="blue-pills">Educação</h5>
                </div>
            </section>
            <section>
                <h3 className="title-biography">Sobre Marielle</h3>
                <p className="text-biography">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporary incididunt ut labore et dolore magna aliqua. Enim adim ad minimim veniam, quis nostrud exercise ullamco laboris nisi ut alipip ex ea commodo consequat.
                </p>
            </section>
        </Popup>
    );
}

export default ShowProfile;