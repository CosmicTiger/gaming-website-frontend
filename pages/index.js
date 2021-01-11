import React, { useState, useEffect } from 'react';
import { Loader } from "semantic-ui-react";
import { getLastGamesApi } from "../api/game";
import { size } from "lodash";
import BasicLayout from '../layouts/BasicLayout';
import ListGames from "../components/ListGames";

export default function Home() {
  const [ games, setGames ] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getLastGamesApi(50);
      if(size(response) > 0) setGames(response);
      else setGames([]);
    })();
  }, [])

  return (
    <BasicLayout className="Home">
      { !games && <Loader active>Loading games...</Loader>}
      { games && size(games) === 0 && (
        <div>
          <h3>There's no games</h3>
        </div>
      )}
      { size(games) > 0 && <ListGames games={games}/>}
    </BasicLayout>
  )
}
