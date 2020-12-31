import React from 'react'
import { Form, Button } from "semantic-ui-react";

const AddressForm = () => {
    return (
        <Form>
            <Form.Input 
                name="title"
                type="text"
                label="Title for the Address"
                placeholder="Title for the Address"
            />

            <Form.Group widths="equal">
                <Form.Input 
                    name="name"
                    type="text"
                    label="Name and Last Name"
                    placeholder="Name and Last Name"
                />
                <Form.Input 
                    name="address"
                    type="text"
                    label="Address"
                    placeholder="Address"
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input 
                    name="city"
                    type="text"
                    label="City"
                    placeholder="City"
                />
                <Form.Input 
                    name="state"
                    type="text"
                    label="State/Province/Region"
                    placeholder="State/Province/Region"
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input 
                    name="zipCode"
                    type="text"
                    label="Zip Code"
                    placeholder="Zip Code"
                />
                <Form.Input 
                    name="phone"
                    type="text"
                    label="Phone Number"
                    placeholder="Phone Number"
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
