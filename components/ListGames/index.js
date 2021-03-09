import React from 'react'
import { map } from "lodash";
import CardGame from './CardGame';
import { Grid } from 'semantic-ui-react';
import useWindowSize from '../../hooks/useWindowSize';
import { 
    breakpointUpSm, 
    breakpointUpMd, 
    breakpointUpLg 
} from '../../utils/breakpoints';

const ListGames = (props) => {
    const { games } = props;
    const { width } = useWindowSize();

    const getColumnRender = () => {
        switch (true) {
            case width > breakpointUpLg:
                return 5;
            case width > breakpointUpMd:
                return 3;
            case width > breakpointUpSm:
                return 2;
            default:
                return 1;
        }
    }

    return (
        <div className="ListGames">
            <Grid>
                <Grid.Row columns={getColumnRender()}>
                    { games && map(games, (game) => {
                        return <CardGame key={game._id} game={game} />
                    })}
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default ListGames
