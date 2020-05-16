import React, { useContext } from 'react';
import './styles.css';
import Store from '../../store/Store';

const ShowProfile = () => {
    const { state, dispatch } = useContext(Store);

    if (!state.profile) return null

    const agent = state.allusers.find(agent => agent.id === state.profile)

    return (
        <div className="wrapper">
            <article className="profile " key={agent.id}>
                <img
                    src="/icons/close.svg"
                    className="svg"
                    alt="Fechar"
                    onClick={() => dispatch({ type: 'HIDE_PROFILE', data: agent.id })}
                />
                <header className="header-profile" style={{ backgroundImage: `url(${agent.cover_image.mimified})` }}>
                    <div className="show-profile-wrapper">
                        <img className="image-profile" src={agent.profile_image.mimified} alt="Por do Sol"></img>
                        <div className="header-title">
                            <h2 className="user-name">{agent.name}</h2>
                            <h5 className="user-profession">{agent.job}</h5>
                        </div>
                    </div>
                </header>
                <section className="contact-info">
                    <p><strong>Email</strong> {agent.email}</p>
                    <p><strong>Celular</strong> {agent.phone}</p>
                    <p><strong>Localidade</strong> {agent.address.city} <span className="minor-text">{agent.address.state}</span></p>
                    <p><strong>Endereço</strong> {agent.address.street} {agent.address.complement} {agent.address.district} <span className="minor-text">{agent.address.zipcode}</span></p>
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
        </div>

    );
}

export default ShowProfile;