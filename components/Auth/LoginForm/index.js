import React, { useState } from 'react'
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const LoginForm = (props) => {
    
    const { showRegisterForm } = props;

    return (
        <Form className="AuthForm Login">
            <Form.Input 
                name="identifier"
                type="text"
                placeholder="Email"
            />
            <Form.Input 
                name="password"
                type="password"
                placeholder="Password"
            />
            <div className="actions">
                <Button type="button" basic onClick={showRegisterForm}>
                    Register
                </Button>
                <div className="actionsLogin">
                    <Button className="submit" type="submit">
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
