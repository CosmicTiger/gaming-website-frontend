import React, { Fragment } from 'react';
import { Container } from "semantic-ui-react";
import Header from "../../components/Header";
import classNames from "classnames";

export default function BasicLayout(props) {
    const { className, children } = props;

    return (
        <Fragment>
            <Container 
                fluid 
                className={classNames("basic-layout", {
                [className]: className, 
            })}
            >
                <Header />
                <Container className="basic-layout-content">
                    {children}
                </Container>
            </Container>
        </Fragment>
    );
}

