import React, { useState } from 'react'
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updateNameApi } from "../../../api/user";

function initialValues(name, lastName) {
    return {
        name: name || "",
        lastName: lastName || ""
    }
}

function validationSchema() {
    return {
        name: Yup.string().required(true),
        lastName: Yup.string().required(true)
    }
}

const ChangeNameForm = (props) => {
    const [ loading, setLoading ] = useState(false);
    const { user, logout, setReloadUser } = props;
    const formik = useFormik({
        initialValues: initialValues(user.name, user.lastName),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await updateNameApi(user.id, formData, logout);
            if(!response) {
                toast.error("Error updating the name and last name");
            } else {
                setReloadUser(true);
                toast.success("Successfully updated the name and last name");
            }
            setLoading(false);
        }
    });

    return (
        <div className="ChangeNameForm">
            <h4>Change your name and last name</h4>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input 
                        name="name" 
                        placeholder="New name" 
                        onChange={formik.handleChange} 
                        value={formik.values.name} 
                        error={formik.errors.name}
                        />
                    <Form.Input 
                        name="lastName" 
                        placeholder="New last name" 
                        onChange={formik.handleChange} 
                        value={formik.values.lastName} 
                        error={formik.errors.lastName}
                        />
                </Form.Group>
                <Button className="submit" type="submit">Update</Button>
            </Form>
        </div>
    )
}

export default ChangeNameForm
