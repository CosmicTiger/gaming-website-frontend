import React, { useState } from 'react';
import { Icon } from "semantic-ui-react";
import BasicModal from "../Modal/BasicModal";
import AddressForm from "./AddressForm";

const Addresses = () => {
    const [ showModal, setShowModal ] = useState(false);
    const [ titleModal, setTitleModal ] = useState("");
    const [ formModal, setFormModal ] = useState(null);

    const openModal = (title) => {
        setTitleModal(title);
        setFormModal(<AddressForm />);
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
                <p>List of addresses....</p>
            </div>

            <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
                { formModal }
            </BasicModal>
        </div>
    )
}

export default Addresses
