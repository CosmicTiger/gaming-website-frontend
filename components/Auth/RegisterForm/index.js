import React from 'react'

const RegisterForm = (props) => {

    const { showLoginForm } = props;

    return (
        <div>
            <h2>We are in the register for users</h2>
            <button onClick={showLoginForm}>Go to Login</button>
        </div>
    )
}

export default RegisterForm
