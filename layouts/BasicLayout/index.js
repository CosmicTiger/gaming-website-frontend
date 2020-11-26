import React, { Fragment } from 'react';
import { Container } from "semantic-ui-react";

export default function BasicLayout(props) {
    const { children } = props;

    return (
        <Fragment>
            <Container fluid className="basic-layout">
                <div>Menu</div>
                {children}
            </Container>
        </Fragment>
    );
}
