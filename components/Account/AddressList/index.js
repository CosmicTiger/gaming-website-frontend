import React, { useState, useEffect } from 'react'
import { getAddressesApi } from "../../../api/address";
import useAuth from "../../../hooks/useAuth";

const AddressList = () => {
    const [ addresses, setAddresses] = useState(null);
    const { auth, logout } = useAuth();
    console.log(addresses);

    useEffect(() => {
        (async () => {
            const response = await getAddressesApi(auth.idUser, logout);
            setAddresses(response || []);
        })()
    }, []);
    
    return (
        <div>
            <h2>ListAddress...</h2>
        </div>
    )
}

export default AddressList
