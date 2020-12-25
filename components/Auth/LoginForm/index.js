import React from 'react'

const LoginForm = (props) => {
    
    const { showRegisterForm } = props;

    return (
        <div>
            <h2>We are in the Login Form</h2>
            <button onClick={showRegisterForm}>Go to register</button>
        </div>
    )
}

export default LoginForm
