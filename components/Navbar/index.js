import React from 'react'
import {
    Container,
    Menu, Grid,
    Icon, Label } from "semantic-ui-react";
import Link from 'next/link';

const MenuPlatforms = () => {
    return (
        <Menu>
            <Link href="/play-station">
                <Menu.Item as="a">
                    PlayStation
                </Menu.Item>
            </Link>
            <Link href="/xbox">
                <Menu.Item as="a">
                    Xbox
                </Menu.Item>
            </Link>
            <Link href="/switch">
                <Menu.Item as="a">
                    Nintendo Switch
                </Menu.Item>
            </Link>
        </Menu>
    );
}

const MenuOptions = () => {
    return(
        <Menu>
            <Menu.Item>
                <Icon name="user outline" />
                My Account
            </Menu.Item>
        </Menu>
    );
}

const Navbar = () => {
    return (
        <div className="Menu">
            <Container>
                <Grid>
                    <Grid.Column className="Menu-left" width={6}>
                        <MenuPlatforms />
                    </Grid.Column>
                    <Grid.Column className="Menu-right" width={10}>
                        <MenuOptions/>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}

export default Navbar;
