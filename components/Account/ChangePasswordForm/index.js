import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const ChangePasswordForm = (props) => {
    const [ loading, setLoading ] = useState(false);
    const { user, logout } = props;

    return (
        <div className="ChangePasswordForm">
            <h4>Change Password</h4>
            
            <Form>
                <Form.Group widths="equal">
                    <Form.Input 
                        name="password"
                        type="password"
                        placeholder="Your new password"
                    />
                    <Form.Input 
                        name="passwordConfirm"
                        type="password"
                        placeholder="Confirm your new password"
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
