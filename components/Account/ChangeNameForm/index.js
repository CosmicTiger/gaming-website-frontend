import React from 'react'
import { Form, Button } from "semantic-ui-react";

const ChangeNameForm = (props) => {

    const { user } = props;

    return (
        <div className="ChangeNameForm">
            <h4>Change your name and last name</h4>
            <Form>
                <Form.Group widths="equal">
                    <Form.Input name="name" placeholder="New name" />
                    <Form.Input name="lastName" placeholder="New last name" />
                </Form.Group>
                <Button className="submit">Update</Button>
            </Form>
        </div>
    )
}

export default ChangeNameForm
