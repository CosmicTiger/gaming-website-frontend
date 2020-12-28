import React, { useState, useEffect } from 'react'
import {
    Container,
    Menu, 
    Grid,
    Icon } from "semantic-ui-react";
import Link from 'next/link';
import BasicModal from "../Modal/BasicModal";
import Auth from '../Auth';
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/user";

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
    const [ titleModal, setTitleModal ] = useState("Account Login");
    const [ user, setUser ] = useState(undefined);

    const { auth, logout } = useAuth();

    useEffect(() => {
        (async () => {
            const response = await getMeApi(logout);
            setUser(response);
        })();
    }, [auth]);

    const onShowModal = () => setShowModal(true);
    const onCloseModal = () =>  setShowModal(false);

    const showingOptions = () => {
        return auth ?
            <button onClick={logout}>Logout</button>
            :
            <MenuOptions onShowModal={onShowModal} />
    }

    return (
        <div className="Menu">
            <Container>
                <Grid>
                    <Grid.Column className="Menu-left" width={6}>
                        <MenuPlatforms />
                    </Grid.Column>
                    <Grid.Column className="Menu-right" width={10}>
                        { showingOptions() }
                    </Grid.Column>
                </Grid>
            </Container>
            <BasicModal 
                show={showModal} 
                setShow={setShowModal} 
                title={titleModal} 
                size="small">
                <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
            </BasicModal>
        </div>
    )
}

export default Navbar;
