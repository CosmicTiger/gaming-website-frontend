import React, { useState } from 'react'
import {
    Container,
    Menu, Grid,
    Icon, Label } from "semantic-ui-react";
import Link from 'next/link';
import BasicModal from "../Modal/BasicModal/BasicModal";

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

const MenuOptions = (props) => {
    
    const { onShowModal } = props;

    return(
        <Menu>
            <Menu.Item onClick={onShowModal}>
                <Icon name="user outline" />
                My Account
            </Menu.Item>
        </Menu>
    );
}

const Navbar = () => {
    const [ showModal, setShowModal ] = useState(false);

    const onShowModal = () => setShowModal(true);

    return (
        <div className="Menu">
            <Container>
                <Grid>
                    <Grid.Column className="Menu-left" width={6}>
                        <MenuPlatforms />
                    </Grid.Column>
                    <Grid.Column className="Menu-right" width={10}>
                        <MenuOptions onShowModal={onShowModal} />
                    </Grid.Column>
                </Grid>
            </Container>
            <BasicModal 
                show={showModal} 
                setShow={setShowModal} 
                title="Account Login" 
                size="small">
                <h2>Modal Content</h2>
            </BasicModal>
        </div>
    )
}

export default Navbar;
