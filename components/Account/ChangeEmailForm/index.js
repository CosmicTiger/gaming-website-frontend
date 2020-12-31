import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

function initialValues() {
    return {
        email: "",
        confirmEmail: ""
    }
}

function validationSchema() {
    return {
        email: Yup.string()
            .email("Email must be a valid email")
            .required(true)
            .oneOf([Yup.ref("confirmEmail")], "Email has to match with the email confirmation"),
        confirmEmail: Yup.string()
            .email("Email confirmation must be a valid email")
            .required(true)
            .oneOf([Yup.ref("email")], "Email confirmation has to match with the email")
    }
}

const ChangeEmailForm = (props) => {
    const [ loading, setLoading ] = useState(false);
    const { user, logout, setReloadUser } = props;
    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log(formData);
        }
    });

    return (
        <div className="ChangeEmailForm">
            <h4>Change your email <span>(Your current email: { user.email })</span></h4>
            
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input 
                        name='email'
                        placeholder="Your new email"
                        onChange={formik.handleChange} 
                        value={formik.values.email}
                        error={formik.errors.email}
                    />
                    <Form.Input
                        name="confirmEmail"
                        placeholder="Confirm your new email"
                        onChange={formik.handleChange} 
                        value={formik.values.confirmEmail}
                        error={formik.errors.confirmEmail} 
                    />
                </Form.Group>
                <Button
                    className="submit"
                    type="submit"
                    loading={loading}
                >
                Update
                </Button>
            </Form>
        </div>
    )
}

export default ChangeEmailForm
