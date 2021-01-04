import React, { useState, useEffect } from 'react'
import {
    Container,
    Menu,
    Grid,
    Icon
} from "semantic-ui-react";
import Link from 'next/link';
import { map } from 'lodash';
import BasicModal from "../Modal/BasicModal";
import Auth from '../Auth';
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/user";
import { getPlatformsApi } from "../../api/platform";

const MenuPlatforms = (props) => {

    const { platforms } = props;

    return (
        <Menu>
            {map(platforms, (platform) => {
                return (
                <Link href={`/games/${platform.url}`} key={platform._id}>
                    <Menu.Item as="a" name={platform.url}>
                        { platform.title }
                    </Menu.Item>
                </Link>
                )
            })}
        </Menu>
    );
}

const MenuOptions = (props) => {

    const { onShowModal, user, logout } = props;

    return (
        <Menu>
            { user ? (
                <>
                    <Link href="/orders">
                        <Menu.Item as="a">
                            <Icon name="game" />
                            My orders
                        </Menu.Item>
                    </Link>
                    <Link href="/wishlist">
                        <Menu.Item as="a">
                            <Icon name="heart outline" />
                            Wishlist
                        </Menu.Item>
                    </Link>
                    <Link href="/account">
                        <Menu.Item as="a">
                            <Icon name="user outline" />
                            {`${user.name} ${user.lastName}`}
                        </Menu.Item>
                    </Link>
                    <Link href="/cart">
                        <Menu.Item as="a" className="m-0">
                            <Icon name="cart" />
                        </Menu.Item>
                    </Link>
                    <Menu.Item
                        onClick={logout} className="m-0">
                        <Icon name="power off" />
                    </Menu.Item>
                </>
            ) : (
                    <Menu.Item onClick={onShowModal}>
                        <Icon name="user outline" />
                    My Account
                    </Menu.Item>
                )}
        </Menu>
    );
}

const Navbar = () => {
    const [platforms, setPlatforms] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("Account Login");
    const [user, setUser] = useState(undefined);

    const { auth, logout } = useAuth();

    useEffect(() => {
        (async () => {
            const response = await getMeApi(logout);
            setUser(response);
        })();
    }, [auth]);

    useEffect(() => {
        (async () => {
            const response = await getPlatformsApi();
            setPlatforms(response || []);
        })();
    }, []);

    const onShowModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);

    const showingOptions = () => {
        return user !== undefined
            &&
            <MenuOptions onShowModal={onShowModal} user={user} logout={logout} />
    }

    return (
        <div className="Menu">
            <Container>
                <Grid>
                    <Grid.Column className="Menu-left" width={6}>
                        <MenuPlatforms platforms={platforms} />
                    </Grid.Column>
                    <Grid.Column className="Menu-right" width={10}>
                        {showingOptions()}
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
