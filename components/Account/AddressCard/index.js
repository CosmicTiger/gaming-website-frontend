import React from 'react'
import { Button } from "semantic-ui-react";

const AddressCard = (props) => {
    
    const { address } = props;

    return (
        <div className="Address">
            <p className="Address-title">
                { address.title }
            </p>
            <p className="Address-name">
                { address.name }
            </p>
            <p className="Address-address">
                { address.address }
            </p>
            <p className="Address-location">
                {address.state}, {address.city} - {address.zipCode}
            </p>
            <p className="Address-phone">
                { address.phone }
            </p>
            <div className="actions">
                <Button primary>Edit</Button>
                <Button>Delete</Button>
            </div>
        </div>
    )
}

export default AddressCard
