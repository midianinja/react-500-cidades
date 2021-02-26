import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    width: 100%;
    top: 0;
    justify-content: space-between;
    align-items: center;
    background-color: var(--eggplant);
    height: 50px;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    li {
        cursor: pointer;
        font-weight: 700;
        padding: 0 10px;        
    }
    // @media (max-width:992px){
    //       visibility: hidden;
    //       display: none;
    // }
`;

export const HeaderContainer = styled.div`
    display: flex;
    height: 50px;
    width: 100vw;
    justify-content: space-between;
`;

export const BrandImage = styled.img`
    height: 100%;
    cursor: pointer;
    padding: .5rem;
`;

export const UserProfileImage = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 100%;
`;

export const SignInButton = styled.button`
    width: 100%;
    max-width: 180px;
    background-color: transparent;
    margin: 0;
    border: 2px solid var(--white);
    border-radius: 5px;
    padding: .5em;
    font-size: .8em;
    color: var(--white);
    font-weight: 700;
    font-family: 'Roboto Medium', sans-serif;
`;

export const SignOutButton = styled.button`
    width: 100%;
    max-width: 180px;
    background-color: transparent;
    margin: 0;
    border: 2px solid var(--white);
    border-radius: 5px;
    padding: .5em;
    font-size: .8em;
    color: var(--white);
    font-weight: 700;
    font-family: 'Roboto Medium', sans-serif;
`;

export const CreateAccountButton = styled.button`
    width: 100%;
    max-width: 180px;
    background-color: var(--red);
    color: var(--white);
    margin: 0 0 5px 0;
    border: none;
    border-radius: 5px;
    padding: .5em;
    font-size: .8em;
    font-family: "Roboto Medium", sans-serif;
    font-weight: 700;
    text-decoration: none;
    top: 0;
    transition: all 300ms ease-in-out;
    box-shadow: 0 0.4em var(--darker-red);
    &:hover {
    top: 0.2em;
    box-shadow: 0 0.2em var(--darker-red);
    }
    &:active {
    top: 0.6em;
    box-shadow: 0 0.1em rgba(0, 0, 0, 0.4);
    }
`;

export const RegistrationField = styled.div`
    margin:0;
`;
