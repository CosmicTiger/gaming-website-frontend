import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerApi } from "../../../api/user";

function initialValues () {
    return {
        name: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    }
}

function validationSchema () {
    return {
        name: Yup.string().required("Please input your name to proceed in the registry"),
        lastName: Yup.string().required("Please input your last name to proceed in the registry"),
        username: Yup.string().required('A username is needed'),
        email: Yup.string().email(true).required("You're email is required to create an account"),
        password: Yup.string().required("A password is needed"),
    }
}

const RegisterForm = (props) => {

    const { showLoginForm } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            registerApi(formData);
        }
    });

    return (
        <Form className="AuthForm" onSubmit={formik.handleSubmit}>
            <Form.Input 
                className="AuthForm-input"
                name="name"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                error={formik.errors.name}
            />
            <Form.Input 
                className="AuthForm-input"
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={formik.handleChange}
                error={formik.errors.lastName}
            />
            <Form.Input 
                className="AuthForm-input"
                name="username"
                type="text"
                placeholder="Username"
                onChange={formik.handleChange}
                error={formik.errors.username}
            />
            <Form.Input 
                className="AuthForm-input"
                name="email"
                type="text"
                placeholder="E-mail"
                onChange={formik.handleChange}
                error={formik.errors.email}
            />
            <Form.Input 
                className="AuthForm-input"
                name="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                error={formik.errors.password}
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
