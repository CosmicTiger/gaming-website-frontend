import React from 'react';
import { Form, Button } from "semantic-ui-react";

const ChangeEmailForm = (props) => {
    const { user, logout, setReloadUser } = props;
    
    return (
        <div className="ChangeEmailForm">
            <h4>Change your email <span>(Your current email: { user.email })</span></h4>
            
            <Form>
                <Form.Group widths="equal">
                    <Form.Input 
                        name='email'
                        placeholder="Your new email"
                    />
                    <Form.Input
                        name="repeatEmail"
                        placeholder="Confirm your new email"
                    />
                </Form.Group>
                <Button
                    className="submit"
                >
                Update
                </Button>
            </Form>
        </div>
    )
}

export default ChangeEmailForm
