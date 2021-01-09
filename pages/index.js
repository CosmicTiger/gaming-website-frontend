import React, { useState, useEffect } from 'react';
import { getLastGamesApi } from "../api/game";
import { size } from "lodash";
import BasicLayout from '../layouts/BasicLayout';

export default function Home() {
  const [ games, setGames ] = useState(null);

  console.log(games);

  useEffect(() => {
    (async () => {
      const response = await getLastGamesApi(50);
      console.log(response);
      if(size(response) > 0) setGames(response);
      else setGames([]);
    })();
  }, [])

  return (
    <BasicLayout>
      <h1>Estamos en Home Page</h1>
    </BasicLayout>
  )
}
