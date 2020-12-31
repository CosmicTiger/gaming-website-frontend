import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

function initialValues() {
    return {
        password: "",
        confirmPassword: "",
    }
}

function validationSchema() {
    return {
        password: Yup.string()
            .required(true)
            .oneOf([Yup.ref("confirmPassword")], "Password must match with password confirmation"),
        confirmPassword: Yup.string()
            .required(true)
            .oneOf([Yup.ref("password")], "Password confirmation must match password")
    }
}

const ChangePasswordForm = (props) => {
    const [ loading, setLoading ] = useState(false);
    const { user, logout } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log(formData);
        },
    })

    return (
        <div className="ChangePasswordForm">
            <h4>Change Password</h4>
            
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input 
                        name="password"
                        type="password"
                        placeholder="Your new password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.errors.password}
                    />
                    <Form.Input 
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your new password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        error={formik.errors.confirmPassword}
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

export default ChangePasswordForm
