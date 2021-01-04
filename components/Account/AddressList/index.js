import React, { useState, useEffect } from 'react'
import { Grid } from "semantic-ui-react";
import { map, size } from "lodash";
import { getAddressesApi } from "../../../api/address";
import useAuth from "../../../hooks/useAuth";

import AddressCard from "../AddressCard";

function renderingAddress(addresses, logout, setReloadAddressess) {

    if (size(addresses) === 0) {
        return <h3>There's no address</h3>
    } else {
        return (
            <Grid>
                {map(addresses, (address) => {
                    return (
                        <Grid.Column key={address.id} mobile={16} tablet={8} computer={4}>
                            <AddressCard 
                                address={address} 
                                logout={logout} 
                                setReloadAddressess={setReloadAddressess} 
                                />
                        </Grid.Column>)
                })}
            </Grid>
        )
    }
}

const AddressList = (props) => {
    const [addresses, setAddresses] = useState(null);
    const { auth, logout } = useAuth();
    const { reloadAddresses, setReloadAddressess } = props;

    useEffect(() => {
        (async () => {
            const response = await getAddressesApi(auth.idUser, logout);
            setAddresses(response || []);
            setReloadAddressess(false);
        })()
    }, [reloadAddresses]);

    if(!addresses) return null;

    return (
        <div className="AddressList">
            { renderingAddress(addresses, logout, setReloadAddressess) }
        </div>
    )
}

export default AddressList
