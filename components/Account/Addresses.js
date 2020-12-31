import React from 'react';
import { Icon } from "semantic-ui-react";

const Addresses = () => {
    return (
        <div className="Account-addresses">
            <div className="title">
                Routes
                <Icon name="plus" link />
            </div>
            <div className="data">
                <p>List of routes....</p>
            </div>
        </div>
    )
}

export default Addresses
