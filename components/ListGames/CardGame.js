import React from 'react'
import { Image, Grid } from "semantic-ui-react";
import Link from 'next/link';

const CardGame = (props) => {

    const { game } = props;

    return (
        <Grid.Column className="ListGames-cardGame">
            <Link href={`/${game.url}`}>
                <a>
                    <div className="ListGames-gamePoster">
                        <Image src={ game.poster.url } alt={ game.title } />
                        <div className="ListGames-gamePoster--info">
                            { game.discount ? (
                                <span className="discount" data-discount={game.discount}></span>
                            ) : (
                                <span></span>
                            )}
                            <span className="price" data-price={game.price}></span>
                            <div className="title">
                                <h2>{game.title}</h2>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </Grid.Column>
    )
}

export default CardGame
