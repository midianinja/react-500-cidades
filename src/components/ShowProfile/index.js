import React, { useContext } from 'react';
import Popup from "reactjs-popup";
import { FaTimesCircle } from "react-icons/fa";


import './styles.css';
import Store from '../../store/Store';

const ShowProfile = (props) => {

    const containerModal = {
        border: "none",
        position: 'relative',
        background: 'rgb(255, 255, 255)',
        width: '50%',
        padding: '2rem',
    };
    const { state } = useContext(Store);
    return (
        <Popup
            modal
            overlayStyle={{ background: "rgb(255, 255, 255)" }}
            contentStyle={containerModal}
            closeOnDocumentClick={false}
            trigger={({ open }) => <FaTimesCircle size={28} color={'#333'} open={open} />}>
            {state.allusers.map(agent => (
                <article className="profile"key={agent.id}>
                    {(close) => <ShowProfile close={close} />}
                    <header className="header-profile">
                        <img className="image-profile" src={agent.profile_image.mimified} alt="Por do Sol"></img>
                        <div className="header-title">
                            <h2 className="user-name">{agent.name}</h2>
                            <h5 className="user-profession">{agent.job}</h5>
                        </div>
                    </header>
                    <section className="contact-info">
                        <p><strong>Email</strong> {agent.email}</p>
                        <p><strong>Celular</strong> {agent.phone}</p>
                        <p><strong>Localidade</strong> {agent.address.city} <span className="minor-text">{agent.address.state}</span></p>
                        <p><strong>Endereço</strong> {agent.street} {agent.complement} {agent.district} <span className="minor-text">{agent.zipcode}</span></p>
                        <h3 className="subtitle-profile">Tags</h3>
                        {agent.skills.map((skill) => (
                            <div>
                                <h5 className="blue-pills">{skill}</h5>
                                <h5 className="blue-pills">{skill}</h5>
                            </div>
                        ))}

                        <h3 className="title-biography">Sobre {agent.name}</h3>
                        <p className="text-biography">
                            {agent.biography}
                        </p>
                    </section>
                </article>
            ))}
        </Popup>
    );
}

export default ShowProfile;