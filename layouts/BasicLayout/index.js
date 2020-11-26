import React, { Fragment } from 'react';
import { Container } from "semantic-ui-react";
import Header from "../../components/Header";

export default function BasicLayout(props) {
    const { children } = props;

    return (
        <Fragment>
            <Container fluid className="basic-layout">
                <Header />
                <Container className="basic-layout-content">
                    {children}
                </Container>
            </Container>
        </Fragment>
    );
}

