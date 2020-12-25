import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react';

const RegisterForm = (props) => {

    const { showLoginForm } = props;

    return (
        <Form className="AuthForm">
            <Form.Input 
                className="AuthForm-input"
                name="name"
                type="text"
                placeholder="Name"
            />
            <Form.Input 
                className="AuthForm-input"
                name="lastName"
                type="text"
                placeholder="Last Name"
            />
            <Form.Input 
                className="AuthForm-input"
                name="username"
                type="text"
                placeholder="Username"
            />
            <Form.Input 
                className="AuthForm-input"
                name="email"
                type="text"
                placeholder="E-mail"
            />
            <Form.Input 
                className="AuthForm-input"
                name="password"
                type="password"
                placeholder="Password"
            />
            <div className="actions">
                <Button type="button" basic>
                    Login
                </Button>
                <Button type="submit" className="submit">
                    Register
                </Button>
            </div>
        </Form>
    )
}

export default RegisterForm
