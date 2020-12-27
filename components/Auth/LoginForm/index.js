import React, { useState } from 'react'
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { loginApi } from "../../../api/user";
import useAuth from "../../../hooks/useAuth";

function initialValues() {
    return {
        identifier: "",
        password: ""
    }
}

function validationSchema() {
    return {
        identifier: Yup.string().email(true).required(true),
        password: Yup.string().required(true)
    }
}

const LoginForm = (props) => {
    const [ loading, setLoading ] = useState(false);
    const { showRegisterForm, onCloseModal } = props;
    const auth = useAuth();

    console.log(auth);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await loginApi(formData);
            if (response?.jwt) {
                console.log(response);
                onCloseModal();
            } else {
                toast.error("Email or Password are incorrect");
            }
            setLoading(false);
        }
    });

    return (
        <Form className="AuthForm Login" onSubmit={formik.handleSubmit}>
            <Form.Input 
                name="identifier"
                type="text"
                placeholder="Email"
                onChange={formik.handleChange}
                error={formik.errors.identifier}
            />
            <Form.Input 
                name="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                error={formik.errors.password}
            />
            <div className="actions">
                <Button type="button" basic onClick={showRegisterForm}>
                    Register
                </Button>
                <div className="actionsLogin">
                    <Button className="submit" type="submit" loading={loading}>
                        Login
                    </Button>
                    <Button type="button">
                        Have you forgotten your password?
                    </Button>
                </div>
            </div>
        </Form>
    )
}

export default LoginForm
