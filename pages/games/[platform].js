import React, { useState, useEffect } from 'react';
import { Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import { size } from "lodash";
import BasicLayout from '../../layouts/BasicLayout';
import { getGamesPlatformApi } from "../../api/game";
import ListGames from "../../components/ListGames";

const limitPerPage = 10;

const Platform = () => {
    const [games, setGames] = useState(null);
    const { query } = useRouter();

    useEffect(() => {
        ( async () => {
            if(query.platform) {
                const response = await getGamesPlatformApi(
                    query.platform, 
                    limitPerPage, 
                    0);
                setGames(response);
            }
        })()
    }, [query]);

    return (
        <BasicLayout className="Platform">
            { !games && <Loader active>Loading games...</Loader> }
            { games && size(games) === 0 && (
                <div>
                    <h3>There's no games</h3>
                </div>
            ) }
            { size(games) > 0 && <ListGames games={games} /> }
        </BasicLayout>
    )
}

export default Platform
