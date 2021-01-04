import React, { useState } from 'react';
import { Icon } from "semantic-ui-react";
import BasicModal from "../Modal/BasicModal";
import AddressForm from "./AddressForm";
import AddressList from "./AddressList";

const Addresses = () => {
    const [ showModal, setShowModal ] = useState(false);
    const [ realoadAddresses, setReloadAddressess ] = useState(false);
    const [ titleModal, setTitleModal ] = useState("");
    const [ formModal, setFormModal ] = useState(null);
    
    const openModal = (title) => {
        setTitleModal(title);
        setFormModal(<AddressForm 
            setShowModal={setShowModal} 
            setReloadAddressess={setReloadAddressess} />);
        setShowModal(true);
    }

    const newAddress = () => {
        openModal("New Address");
    }

    return (
        <div className="Account-addresses">
            <div className="title">
                Addresses
                <Icon name="plus" link onClick={newAddress} />
            </div>
            <div className="data">
                <AddressList reloadAddresses={realoadAddresses} setReloadAddressess={setReloadAddressess}  />
            </div>

            <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
                { formModal }
            </BasicModal>
        </div>
    )
}

export default Addresses
