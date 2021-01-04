import React, { useState } from 'react'
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../../hooks/useAuth";
import { createAddressApi } from "../../../api/address";

function initialValues(address) {
    return {
        title: address?.title || "",
        name: address?.name || "",
        address: address?.address || "",
        city: address?.city || "",
        state: address?.state || "",
        zipCode: address?.zipCode || "",
        phone: address?.phone || ""
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

const AddressForm = (props) => {
    const [ loading, setLoading ] = useState(false);
    const { setShowModal, setReloadAddressess, newAddress, address } = props;
    const { auth, logout } = useAuth();
    const formik = useFormik({
        initialValues: initialValues(address),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            newAddress ? 
                createAddress(formData) : 
                updateAddress(formData)
        }
    });

    const createAddress = async (formData) => {
        setLoading(true);
        const formDataTemp = {
            ...formData,
            users_permissions_user: auth.idUser
        };
        const response = await createAddressApi(formDataTemp, logout);
        if(!response) {
            toast.warning("Error creating address");
            setLoading(false);
        } else {
            formik.resetForm();
            setReloadAddressess(true);
            setLoading(false);
            setShowModal(false);
        }
    }

    const updateAddress = (formData) => {
        console.log('Updating Address');
    }

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
                <Button className="submit" type="submit" loading={loading}>
                    { newAddress ? "Create Address" : "Update Address" }
                </Button>
            </div>
        </Form>
    )
}

export default AddressForm
