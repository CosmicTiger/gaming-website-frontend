import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import BasicLayout from '../../layouts/BasicLayout';
import { getGamesPlatformApi } from "../../api/game";

const limitPerPage = 10;

const Platform = () => {
    const [games, setGames] = useState(null);
    const { query } = useRouter();

    useEffect(() => {
        ( async () => {
            const response = await getGamesPlatformApi(
                query.platform, 
                limitPerPage, 
                0);
            setGames(response);
        })()
    }, [query]);

    return (
        <BasicLayout className="Platform">
            <h2>We are in platform: { query.platform }</h2>
        </BasicLayout>
    )
}

export default Platform
