import React, { useContext } from 'react';
import './styles.css';
import Store from '../../store/Store';
import { SocialIcon } from '../../Pages/About/about.style';

const openSocialMedia = (media, domain) => {
    const reg = new RegExp(`${domain}`, '');
    if (reg.test(media)) window.open(media, '_blank');
    else window.open(`https://${domain}.com/${media}`, '_blank');
}

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
                        <img className="image-profile" src={agent.profile_image.mimified} alt="Foto de perfil do Agente"></img>
                        <div className="header-title">
                            <h2 className="user-name">{agent.name}</h2>
                            {/* <h5 className="user-profession">{agent.job}</h5> */}
                        </div>
                    </div>
                </header>
                <section className="contact-info">
                    {state.auth && state.user ? <p><strong>Email</strong> {agent.email}</p> : null}
                    {state.auth && state.user ? <p><strong>Celular</strong> {agent.phone}</p> : null}
                    <p><strong>Localidade</strong> {agent.address.city} <span className="minor-text">{agent.address.state}</span></p>
                    <p><strong>Endereço</strong> {agent.address.street} {agent.address.complement} {agent.address.district} <span className="minor-text">{agent.address.zipcode}</span></p>
                    <h3 className="subtitle-profile">T A G S</h3>
                    <div>
                        {agent.skills.map((skill) => (
                            <span className="blue-pills">{skill}</span>
                        ))}
                    </div>
                    <h3 className="title-biography">Sobre {agent.name}</h3>
                    <p className="text-biography">
                        {agent.biography}
                    </p>
                    <SocialIcon
                        onClick={() => openSocialMedia(agent.facebook, 'facebook')}
                        src="https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/004-facebook.svg"
                        customStyle="margin: 20px; width: 30px;"
                    />
                    <SocialIcon
                        onClick={() => openSocialMedia(agent.instagram, 'instagram')}
                        src="https://500-cidades-profile-images.s3-us-west-2.amazonaws.com/assets/001-instagram.svg"
                        customStyle="margin: 20px; width: 30px;"
                    />
                </section>
            </article>
        </div>

    );
}

export default ShowProfile;