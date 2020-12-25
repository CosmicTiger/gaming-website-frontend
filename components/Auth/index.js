import React, { useState } from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Auth = (props) => {

    const [ showLogin, setShowLogin ] = useState(true);
    const { onCloseModal, setTitleModal } = props;

    const showLoginForm = () => {
        setTitleModal("Account Login");
        setShowLogin(true);
    };
    const showRegisterForm = () => {
        setTitleModal("Create New Account");
        setShowLogin(false);
    };

    return showLogin 
        ? 
        <LoginForm showRegisterForm={showRegisterForm}/> 
        : 
        <RegisterForm showLoginForm={showLoginForm} />
}

export default Auth
