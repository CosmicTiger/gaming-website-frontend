import React from 'react'
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

function initialValues() {
    return {
        title: "",
        name: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        phone: ""
    }
}

function validationSchema() {
    return {
        title: Yup.string().required(true),
        name: Yup.string().required(true),
        address: Yup.string().required(true),
        city: Yup.string().required(true),
        state: Yup.string().required(true),
        zipCode: Yup.string().required(true),
        phone: Yup.string().required(true)
    }
}

const AddressForm = () => {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log(formData);
        }
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input 
                name="title"
                type="text"
                label="Title for the Address"
                placeholder="Title for the Address"
                onChange={formik.handleChange}
                value={formik.values.title}
                error={formik.errors.title}
            />

            <Form.Group widths="equal">
                <Form.Input 
                    name="name"
                    type="text"
                    label="Name and Last Name"
                    placeholder="Name and Last Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name}
                />
                <Form.Input 
                    name="address"
                    type="text"
                    label="Address"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    error={formik.errors.address}
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input 
                    name="city"
                    type="text"
                    label="City"
                    placeholder="City"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    error={formik.errors.city}
                />
                <Form.Input 
                    name="state"
                    type="text"
                    label="State/Province/Region"
                    placeholder="State/Province/Region"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    error={formik.errors.state}
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input 
                    name="zipCode"
                    type="text"
                    label="Zip Code"
                    placeholder="Zip Code"
                    onChange={formik.handleChange}
                    value={formik.values.zipCode}
                    error={formik.errors.zipCode}
                />
                <Form.Input 
                    name="phone"
                    type="text"
                    label="Phone Number"
                    placeholder="Phone Number"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    error={formik.errors.phone}
                />
            </Form.Group>
            <div className="actions">
                <Button className="submit" type="submit">
                    Create Address
                </Button>
            </div>
        </Form>
    )
}

export default AddressForm
