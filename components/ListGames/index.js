import React from 'react'
import { map } from "lodash";
import CardGame from './CardGame';
import { Grid } from 'semantic-ui-react';

const ListGames = (props) => {
    const { games } = props;

    return (
        <div className="ListGames">
            <Grid>
                <Grid.Row columns={5}>
                    { map(games, (game) => {
                        return <CardGame key={game._id} game={game} />
                    })}
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default ListGames
