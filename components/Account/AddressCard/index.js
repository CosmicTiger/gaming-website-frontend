import React, { useState } from 'react'
import { Button } from "semantic-ui-react";
import { deleteAddressApi } from '../../../api/address';

const AddressCard = (props) => {
    const [ loading, setLoading ] = useState(false);
    const { address, logout, setReloadAddressess, openModal } = props;

    const deleteAddress = async () => {
        setLoading(true);
        const response = await deleteAddressApi(address._id, logout);
        if (response) setReloadAddressess(true);
        setLoading(false);
    }

    const triggeringOpenModal = () => openModal(`Editing: ${address.title}`, address);

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
                <Button 
                    primary
                    onClick={triggeringOpenModal}    
                >
                Edit
                </Button>
                <Button 
                    onClick={deleteAddress}
                    loading={loading}
                >
                Delete
                </Button>
            </div>
        </div>
    )
}

export default AddressCard
