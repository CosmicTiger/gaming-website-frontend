import React from 'react';
import { useRouter } from "next/router";
import BasicLayout from '../../layouts/BasicLayout';

const Platform = () => {
    const { query } = useRouter();

    return (
        <BasicLayout className="Platform">
            <h2>We are in platform: { query.platform }</h2>
        </BasicLayout>
    )
}

export default Platform
