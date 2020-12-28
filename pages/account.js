import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import BasicLayout from '../layouts/BasicLayout';
import useAuth from "../hooks/useAuth";
import { getMeApi } from "../api/user";
import Configuration from "../components/Account/Configuration";

const Account = () => {
    const [user, setUser] = useState(undefined);
    const { auth, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const response = await getMeApi(logout);
            setUser(response || null);
        })();
    }, [auth]);

    if (user === undefined) return null;
    if (!auth && !user) {
        router.replace("/");
        return null;
    }

    return (
        <BasicLayout className="Account">
            <Configuration />
        </BasicLayout>
    )
}

export default Account;
