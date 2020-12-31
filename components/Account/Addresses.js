import React, { useState } from 'react';
import { Icon } from "semantic-ui-react";
import BasicModal from "../Modal/BasicModal";

const Addresses = () => {
    const [ showModal, setShowModal ] = useState(false);
    const [ titleModal, setTitleModal ] = useState("");
    const [ formModal, setFormModal ] = useState(null);

    const openModal = (title) => {
        setTitleModal(title);
        setFormModal(<h1>New Address...</h1>);
        setShowModal(true);
    }

    const newRoute = () => {
        openModal("New Route");
    }

    return (
        <div className="Account-addresses">
            <div className="title">
                Routes
                <Icon name="plus" link onClick={newRoute} />
            </div>
            <div className="data">
                <p>List of routes....</p>
            </div>

            <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
                <p>Add - Update Form</p>
            </BasicModal>
        </div>
    )
}

export default Addresses
